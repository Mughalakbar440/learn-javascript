// const div = document.querySelector('div')

// div.addEventListener('mouseover',(Event)=>{
//     Event.target.style.background = 'purple';
// })
// div.addEventListener('mouseout',(Event)=>{
//     Event.target.style.background = 'bisque';
// })

// const btn1 = document.querySelector('#btn1');
// btn1.onclick = (e) =>{
//     e.target.innerHTML = '<i>hide div</i>';
//     div.style.visibility = 'visible';

// }
// function handler() {
//     console.log('button clicked 3');

// }
// btn.addEventListener("click",(e)=>{
//    console.log('button clicked 1');
// })
// btn.addEventListener("click",(e)=>{
//    console.log('button clicked 2');
// })
// btn.addEventListener("click",handler)

// btn.addEventListener("click",(e)=>{
//    console.log('button clicked 4');
// })
// btn.removeEventListener("click",handler)

const modebtn = document.querySelector('#modebtn');
let curmode = 'light'
const addclass = document.querySelector('body');
modebtn.addEventListener('click',(e)=>{
    let makeclass = addclass.classList;

    if (curmode === 'light') {
        curmode = 'darkmode';
        makeclass.add("darkmode") 
        makeclass.remove("body") 
    }else{
        curmode = 'light';
        makeclass.remove("darkmode") 
    }
    console.log(curmode);
    
})