import 'isomorphic-fetch';

const supportedLangs = [
  'en',
  'ab',
  'ady',
  'af',
  'sq',
  'am',
  'ar',
  'an',
  'hy',
  'ast',
  'av',
  'ay',
  'az',
  'ba',
  'eu',
  'be',
  'bn',
  'br',
  'bg',
  'my',
  'bua',
  'ca',
  'ce',
  'chr',
  'yue',
  'dng',
  'zh-CN',
  'zh-TW',
  'cv',
  'kw',
  'crh',
  'cs',
  'da',
  'dv',
  'nl',
  'chm',
  'eo',
  'et',
  'fo',
  'fi',
  'fr',
  'gag',
  'gl',
  'ka',
  'de',
  'el',
  'grc',
  'kl',
  'gu',
  'ht',
  'ha',
  'haw',
  'he',
  'hil',
  'hi',
  'hu',
  'is',
  'io',
  'id',
  'inh',
  'ia',
  'ie',
  'iu',
  'ga',
  'it',
  'ja',
  'jv',
  'kbd',
  'xal',
  'kn',
  'krc',
  'csb',
  'kk',
  'kjh',
  'km',
  'koi',
  'ko',
  'kum',
  'ku',
  'ckb',
  'ky',
  'lo',
  'ltg',
  'la',
  'lv',
  'lez',
  'lij',
  'li',
  'lt',
  'luy',
  'lb',
  'mk',
  'mg',
  'ms',
  'ml',
  'mt',
  'gv',
  'mi',
  'mr',
  'mdf',
  'mn',
  'nah',
  'nv',
  'ne',
  'nog',
  'se',
  'nn',
  'nov',
  'oci',
  'oj',
  'or',
  'os',
  'ps',
  'fa',
  'pl',
  'pt',
  'pa',
  'qu',
  'ro',
  'rm',
  'ru',
  'rue',
  'sgs',
  'sa',
  'srd',
  'sco',
  'gd',
  'sr',
  'sn',
  'cjs',
  'scn',
  'sd',
  'si',
  'sms',
  'sk',
  'sl',
  'so',
  'dsb',
  'hsb',
  'sot',
  'alt',
  'es',
  'sw',
  'sv',
  'tl',
  'tg',
  'ta',
  'tt',
  'te',
  'th',
  'bo',
  'ti',
  'tpi',
  'tr',
  'tk',
  'tyv',
  'udm',
  'ukr',
  'ur',
  'ug',
  'uz',
  'vep',
  'vi',
  'vo',
  'wa',
  'cy',
  'fy',
  'wo',
  'xh',
  'yi',
  'yo',
  'zza',
  'za',
  'zu',
  'arz',
  'fur',
  'got',
  'sga',
  'ist',
  'ang',
  'acw',
  'arc',
  'ovd',
  'ilo',
  'lld',
  'lad',
  'khb',
  'frr',
  'cu',
  'orv',
  'non',
  'sm',
  'su',
  'vec',
  'ain',
  'ary',
  'hak',
  'cdo',
  'nan',
  'wuu',
  'syc',
  'cop',
  'co',
  'dlm',
  'gsw',
  'gn',
  'ln',
  'mnc',
  'mwl',
  'ota',
  'rom',
  'stq',
  'sva',
  'syl',
  'wym',
  'yai',
  'yua',
  'rup',
  'nb',
  'mel',
  'ny',
  'fro',
  'zdj',
  'fj',
  'bal',
  'ewe',
  'ccc',
  'ceb',
  'twf',
  'esu',
  'war',
] as const;

const supportedSet = new Set<string>(supportedLangs);

export function verifySupportedLang(lang: string): SupportedLang {
  if (!supportedSet.has(lang)) {
    throw new Error(`Language ${lang} is not supported.`);
  }
  return lang as SupportedLang;
}

type SupportedLang = typeof supportedLangs[number];

export type WordData = Record<number, { form: string; transliteration?: string; concept: string }>;

export async function getWordData(lang: SupportedLang): Promise<WordData> {
  return await fetch(`https://s3.us-east-2.amazonaws.com/data.languagegam.es/words/${lang}.json`).then((x) => x.json());
}
