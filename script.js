const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const list = document.querySelector('#list');

btn.addEventListener('click',function(){
  const li = document.createElement('li');
  li.textContent = input.value;
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '削除';
  li.appendChild(deleteBtn);
  list.appendChild(li);
  deleteBtn.addEventListener('click',function(){
    li.remove();
  });
});
