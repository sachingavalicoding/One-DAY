let main = document.querySelector('main');
let ul = document.querySelector('ul');
/* let ul = document.createElement('ul');
main.appendChild(ul); */



let button = document.createElement('button');
button.innerText = 'Show List ';
let buttons = document.querySelector('.buttons');
buttons.appendChild(button);


let li = document.createElement('li');
li.innerText = 'BBA';
let li2 = document.createElement('li');
li2.innerText = 'BCA';
let li3 = document.createElement('li');
li3.innerText = 'BCS';
let li4 = document.createElement('li');
li4.innerText = 'BSC';
let li5 = document.createElement('li');
li5.innerText = 'BCOm';
ul.appendChild(li);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
ul.appendChild(li5);
button.addEventListener('click', ()=> {
ul.classList.toggle('hide');
ul.classList.contains('hide') ? button.innerText = 'Show' : button.innerText = 'Hide';
})