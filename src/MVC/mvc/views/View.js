export class View {
  parentEl = document.getElementById('app');

  render(name, callback) {
    this.parentEl.innerHTML = `
      <div>
        <h2>Hi ${name}!</h2>
      </div>
    `
    const btn = document.createElement('button')
    btn.addEventListener('click', function() {
      callback();
    })
    btn.innerText = 'Add'
    this.parentEl.append(btn)
  }
}

export default new View();
