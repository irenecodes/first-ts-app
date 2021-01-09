import {Sorter} from './Sorter';
import {NumbersCollection} from './NumbersCollection'
import {CharactersCollection} from './CharactersCollection'

const numbersCollection = new NumbersCollection([10, 3, -5, 0, 10000]);
const numbersSorter = new Sorter(numbersCollection);
numbersSorter.sort();
console.log(numbersSorter.collection);

const charactersCollection = new CharactersCollection('hello')
const characterSorter = new Sorter(charactersCollection);
characterSorter.sort()
console.log(characterSorter.collection);

