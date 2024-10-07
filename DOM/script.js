// document.getElementById('root').innerText = '4859adfds';
// console.dir(document.body.childNodes[1])
// let classdir = document.getElementsByClassName('heading-class');
// console.dir(classdir);
// let elements = document.querySelector('.p')//define class
// let elements1 = document.querySelector('p')//define tag name
// let firstel = document.querySelector('.container')//define tag name

// console.dir(firstel);
// console.dir(firstel.lastChild);

// let heading = document.querySelector("h1");
// console.dir(div.innerText)
// let change =  document.querySelector("i");
// console.log(change.innerText);

// change.innerText = change.innerText+" this is append class";

// let firstdivpositin = document.querySelectorAll(".box");

// let index = 1
// for ( div of firstdivpositin) {
//     console.log(index);
//    div.innerText = `new uniqe values ${index}`;
//    index++
// }

// let div = document.querySelector('div');
// console.log(div);

// let attribute = div.getAttribute('name');
// console.log(attribute);


//  div.setAttribute('id','husain');
// function colordata(div, style3, value) {
//     div.style[style3] = value;
// }

// // Example usage:
// const myDiv = document.querySelector("div");  
// colordata(myDiv, "backgroundColor", "purple");  
// colordata(myDiv, "color", "white");  
// colordata(myDiv, "fontSize", "20px");  
// myDiv.innerText = 'this is change from the innertext property'

// let newButton = document.createElement("button");
// newButton.innerText = 'click me ';
// myDiv.prepend(newButton)
// console.log(newButton);

// let heading = document.createElement("h1");
// heading.innerHTML  = "<i>This is append child that will creat using append method in dom</i>";
// myDiv.before(heading)

// let p  = document.querySelector('p')
// p.remove()
// heading  .remove()

// let button = document.createElement('button');
// let body = document.querySelector('body');
// button.innerHTML = '<i>click me</i>';
// button.style.background = 'red'
// button.style.color = 'white'

// body.prepend(button)

let para = document.querySelector('.content')
let classattribut = para.getAttribute('class');
const list =    para.classList;
list.add('newClass');

