# Multilingual Game Words

Words for games like taboo/pictionary/charades/catchphrase/etc in many different languages.

Translations come from Wiktionary.

> Tiago Tresoldi, "Extracting translation data from the Wiktionary project," in Computer-Assisted Language Comparison in Practice, 11/06/2018, https://calc.hypotheses.org/?p=32.

## Installation

```
npm install --save multilingual-game-words
```

## Usage

```javascript
async function run() {
  const russianWords = await gameWords('ru');

  console.log(russianWords.getAllWords());
  /*
    [
    { word: 'слова́рь', en: 'dictionary' },
    { word: 'свобо́дный', en: 'free' },
    { word: 'сло́во', en: 'word' },
    { word: 'кни́га', en: 'book' },
    { word: 'пруд', en: 'pond' },
    { word: 'слон', en: 'elephant' },
    { word: 'кори́чневый', en: 'brown' },
    { word: 'ме́сяц', en: 'month' },
    { word: 'су́тки', en: 'day' },
    { word: 'диале́кт', en: 'dialect' },
    ...
    */
}
run();
```

## Categories

- **swadesh**: Words from the [Swadesh](https://en.wikipedia.org/wiki/Swadesh) list
- **catchphrase**: Words suitable for playing [Catchphrase](https://en.wikipedia.org/wiki/Catchphrase)
- **charades**: Words suitable for playing [Charades](https://en.wikipedia.org/wiki/Charades)
- **household**: Things around the house
- **objects**: Random objects
- **people**: Roles that people have (e.g. doctor, prisoner, astronaut, etc)
