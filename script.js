const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const list = document.querySelector('#list');

btn.addEventListener('click',function(){
  const li = document.createElement('li');
  const deleteBtn = document.createElement('button');
  li.textContent = input.value;
  list.appendChild(li);
  deleteBtn.textContent = '削除';
  li.appendChild(deleteBtn);
  deleteBtn.addEventListener('click',function(){
    li.remove();
  });
});