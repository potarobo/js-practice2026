const input = document.querySelector('#input');
const list = document.querySelector('#list');
const btn = document.querySelector('#btn');

btn.addEventListener('click', function () {
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 　'削除';
  const li = document.createElement('li');
  li.textCon　tent = input.value;
  li.appendChild(deleteBtn);
  list.appendChild(li);

  deleteBtn.addEventListener('click', function () {
    li.remove();
  });
});
