import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {
    const todo = response.data as Todo;
    const id = todo.id;
    const title = todo.title;
    const finished = todo.completed;
    // console.log(`
    //     ${id}, ${title}, ${finished}
    // `);'

    logToDo(id, title, finished);
})

const logToDo = (id: number, title: string, completed: boolean) => {
     console.log(`
        ${id}, ${title}, ${completed}
    `);
}