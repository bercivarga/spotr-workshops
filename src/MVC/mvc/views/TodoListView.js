import {View as ViewClass} from './View'

class TodoListView extends ViewClass {
  render(todoList) {
    const ul = document.createElement('ul');
    for (const todo of todoList) {
      const todoLi = document.createElement('li');
      todoLi.innerText = todo.name
      ul.append(todoLi)
    }
    this.parentEl.append(ul);
  }
}

export default new TodoListView();