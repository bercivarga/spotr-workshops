class Todo {
  id = String(Math.random() * 10 + Date.now());
  name;
  author;

  constructor(name, author) {
    this.name = name;
    this.author = author;
  }
}

export default Todo;