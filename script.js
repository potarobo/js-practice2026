const input = document.querySelector('#input');
const list = document.querySelector('#list');
const btn = document.querySelector('#btn');

btn.addEventListener('click',function(){
  const li = document.createElement('li');
  li.textContent = input.value;
  list.appendChild(li);
  li.addEventListener('click',function(){
    li.classList.toggle('active');
  })
})