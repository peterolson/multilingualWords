import { supportedLangs } from './supportedLangs';

export type WordPair = {
  word: string;
  en: string;
};
export type GameWords = {
  getAllWords: () => WordPair[];
  getByCategory: (category: string) => WordPair[];
};

const cachedGameWords: Record<string, GameWords> = {};

export const gameWords = async (languageCode: string): Promise<GameWords> => {
  if (!supportedLangs.includes(languageCode)) {
    throw new Error(`Language ${languageCode} is not supported.`);
  }
  if (cachedGameWords[languageCode]) {
    return cachedGameWords[languageCode];
  }
  let languageData: Record<string, [string, string[]]>;

  languageData = await import(`./words/${languageCode}`).then((module) => module.default);
  const allWords = new Set();
  const byCategory: Record<string, Set<string>> = {};
  const translations: Record<string, string> = {};
  for (const word of Object.keys(languageData)) {
    const data = languageData[word];
    if (!data) continue;
    if (!data[0] || !data[1]) continue;
    translations[word] = data[0];
    for (const category of data[1]) {
      if (!byCategory[category]) byCategory[category] = new Set();
      byCategory[category].add(word);
      allWords.add(word);
    }
  }
  function toWordPair(word: string) {
    return {
      word,
      en: translations[word],
    };
  }
  const out: GameWords = {
    getAllWords: () => [...allWords].map(toWordPair),
    getByCategory: (category) => [...byCategory[category]].map(toWordPair) || [],
  };
  cachedGameWords[languageCode] = out;
  return out;
};
