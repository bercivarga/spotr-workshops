import Todo from '../helpers/Todo';

const store = {
  user: {
    name: "Berci",
    avatar: "https://avatars.githubusercontent.com/u/65171545?v=4",
    id: 1
  },
  todos: [
    new Todo("Feed cat", 'Berci'),
    new Todo("Eat", 'Berci'),
    new Todo("Go to toilet", 'Berci'),
  ]
}

export default store;
