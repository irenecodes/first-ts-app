import {Sorter} from './Sorter';
import {NumbersCollection} from './NumbersCollection'
import {CharactersCollection} from './CharactersCollection'
import {LinkedList} from './LinkedList'

const numbersCollection = new NumbersCollection([10, 3, -5, 0, 10000]);
const numbersSorter = new Sorter(numbersCollection);
numbersSorter.sort();
console.log(numbersSorter.collection);

const charactersCollection = new CharactersCollection('hello')
const characterSorter = new Sorter(charactersCollection);
characterSorter.sort()
console.log(characterSorter.collection);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(20);

const linkedListSorter = new Sorter(linkedList);
linkedListSorter.sort()
linkedList.print()


