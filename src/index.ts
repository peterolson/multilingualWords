import { getWordData, verifySupportedLang } from './supportedLangs';

export type WordPair = {
  word: string;
  en: string;
  transliteration?: string;
};
export type GameWords = {
  getAllWords: () => WordPair[];
};

const cachedGameWords: Record<string, GameWords> = {};

export const gameWords = async (languageCode: string): Promise<GameWords> => {
  const lang = verifySupportedLang(languageCode);

  if (cachedGameWords[lang]) {
    return cachedGameWords[lang];
  }
  let languageData = await getWordData(lang);

  const translations: Record<string, { en: string; transliteration?: string }> = {};
  for (const conceptId of Object.keys(languageData)) {
    const { form, concept, transliteration } = languageData[conceptId];
    const en = concept.split('/')[0];
    translations[form] = { en };
    if (transliteration) {
      translations[form].transliteration = transliteration;
    }
  }
  function toWordPair(word: string) {
    return {
      word,
      ...translations[word],
    };
  }
  const out: GameWords = {
    getAllWords: () => Object.keys(translations).map(toWordPair),
  };
  cachedGameWords[languageCode] = out;
  return out;
};
