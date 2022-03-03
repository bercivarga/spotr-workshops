import Todo from '../helpers/Todo'
import View from './views/View'
import TodoListView from './views/TodoListView'
import model from './model'

export function init() {
  View.render(model.user.name, function() {
    console.log('hello')
    model.todos.push(new Todo('Finish class', 'Berci'))
    TodoListView.parentEl.innerHTML = ''
    TodoListView.render(model.todos)
  });
  TodoListView.render(model.todos);
}