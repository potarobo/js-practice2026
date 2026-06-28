const input = document.querySelector('#input');
const list = document.querySelector('#list');
const btn = document.querySelector('#btn');

btn.addEventListener('click',function(){
  const li = document.createElement('li');
  const deleteBtn = document.createElement('button');
  li.textContent = input.value;
  deleteBtn.textContent = '削除';
  li.appendChild(　deleteBtn);
  list.appendChild(li);
  deleteBtn.addEventListener('click',function(){
    li.remove();
  })
});
list.addEventListener('click',function(e){
  if(e.target.tagName === 'LI'){
  console.log(e.target.textContent);
  }
})