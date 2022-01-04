# Multilingual Game Words

Words for games like taboo/pictionary/charades/catchphrase/etc in many different languages.

## Installation

```
npm install --save multilingual-game-words
```

## Usage

```javascript
import { gameWords } from './index';

async function run() {
  const SpanishWords = await gameWords('es');
  const FrenchWords = await gameWords('ru');

  console.log(SpanishWords.getAllWords());
  /*
    [
    { word: 'hierro', en: 'iron' },
    { word: 'biblioteca', en: 'library' },
    { word: 'hermana', en: 'sister' },
    { word: 'cuaderno', en: 'notebook' },
    ...
    */
  console.log(FrenchWords.getByCategory('swadesh'));
  /*
    [
    { word: 'колено', en: 'knee' },
    { word: 'черный', en: 'black' },
    { word: 'спать', en: 'sleep' },
    { word: 'луна', en: 'moon' },
    { word: 'животное', en: 'animal' },
    { word: 'красный', en: 'red' },
    { word: 'рот', en: 'mouth' },
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
