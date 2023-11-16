const list=document.querySelectorAll('.list-par');
const names=document.querySelectorAll('.list-name');
const dot=document.querySelectorAll('.dot');
console.log(names);
console.log(list);

let k=0;
list.forEach((element,idx) => {
    console.log(element.value);
    element.addEventListener('click',(e)=>{
        e.preventDefault();
        k=idx;
        help();
        console.log(element.value+"is clicked");
    })
});

const help=()=>{
    list.forEach((element,idx) => {
         if(k===idx){
         names[idx].style.color="#FD8900";
         dot[idx].style.backgroundColor="#FD8900";
        }
         else{
            names[idx].style.color="#C5C5C5";
            dot[idx].style.backgroundColor="#C5C5C5";
         }
    });
    console.log("change color of "+k);
}


document.addEventListener("DOMContentLoaded", function () {
    const listItems = document.querySelectorAll('.list-item');
    const secHolder = document.querySelector('.sec-holder');
   
    listItems.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSectionId = item.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetSectionId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});


const sections=document.querySelectorAll('.sec');
sections.forEach((element,idx)=>{
    element.addEventListener('mouseover',()=>{
        console.log("mouse over "+idx);
        k=idx;
        help();
    })
})
// console.log(sections);



