const body = document.body;

const element = document.createElement('div');

const p1 = document.createElement('p');
const t1 = document.createTextNode('Hello there,');
p1.appendChild(t1);

const p2 = document.createElement('p');
const t2 = document.createTextNode('I am a llama, hear my sirens roar:');
p2.appendChild(t2);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');
const b1 = document.createTextNode('The');
const b2 = document.createTextNode('Duck');
const b3 = document.createTextNode('Lemonade');
const b4 = document.createTextNode('Stand');

li1.appendChild(b1);
li2.appendChild(b2);
li3.appendChild(b3);
li4.appendChild(b4);

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);

element.appendChild(p1);
element.appendChild(p2);
element.appendChild(ul);

body.appendChild(element);