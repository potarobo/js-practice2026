const btn = document.querySelector('#btn');
const list = document.querySelector('#list');
let count = 0;

btn.addEventListener('click',function(){
	count++;
	const li = document.createElement('li');
	list.appendChild(li);
	li.textContent= 'アイテム'+ count;
	li.addEventListener('click',function(){
		li.classList.toggle('active');
	})
});