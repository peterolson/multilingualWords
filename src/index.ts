import { supportedLangImports } from './supportedLangs';

export type WordPair = {
  word: string;
  en: string;
};
export type GameWords = {
  getAllWords: () => WordPair[];
};

const cachedGameWords: Record<string, GameWords> = {};

export const gameWords = async (languageCode: string): Promise<GameWords> => {
  if (!(languageCode in supportedLangImports)) {
    throw new Error(`Language ${languageCode} is not supported.`);
  }
  if (cachedGameWords[languageCode]) {
    return cachedGameWords[languageCode];
  }
  let languageData: Record<string, { form: string; concept: string; transliteration?: string }>;

  languageData = await supportedLangImports[languageCode]().then((x) => x.default);

  const translations: Record<string, string> = {};
  for (const conceptId of Object.keys(languageData)) {
    const { form, concept, transliteration } = languageData[conceptId];
    const en = concept.split('/')[0];
    translations[form] = en;
  }
  function toWordPair(word: string) {
    return {
      word,
      en: translations[word],
    };
  }
  const out: GameWords = {
    getAllWords: () => Object.keys(translations).map(toWordPair),
  };
  cachedGameWords[languageCode] = out;
  return out;
};
