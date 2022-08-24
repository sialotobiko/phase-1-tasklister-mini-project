document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const form = document.getElementById('create-task-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    buildList(e.target.new_task.value);
    
    form.reset();
  })
})


const buildList = (todo) => {
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete);
  btn.textContent = 'X';
  p.textContent = `${todo}`;
  p.appendChild(btn);
  console.log(p);
  document.querySelector('#tasks').appendChild(p);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}
