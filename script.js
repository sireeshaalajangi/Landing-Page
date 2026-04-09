
const text=["Developer", "Designer", "Freelancer"];
let index=0;
let charIndex= 0;
let currentText="";
let isDeleting="false";

function type(){
    if(index>= text.length) index=0;

    currentText=text[index];

    if(isDeleting){
        charIndex--;
    }else{
        charIndex++;
    }

    document.getElementById("typing").textContent=currentText.substring(0,charIndex);

    if(!isDeleting && charIndex === currentText.length){
        isDeleting=true;
        setTimeout(type,1000);
        return;
    }

    if(isDeleting && charIndex === 0){
        isDeleting=false;
        index++;
    }
    setTimeout(type,isDeleting ? 50:150);
}
type();

window.addEventListener("scroll", () => {
    let navbar = document.getElementById("navbar");

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }
});


const cards = document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{
    let trigger = window.innerHeight * 0.8;

    cards.forEach(card => {
        let top = card.getBoundingClientRect().top;
    
        if (top < trigger){
            card.classList.add("show");
        }
    })
});


document.getElementById("btn").addEventListener("click",() =>{
    alert("Thanks for visiting! 🚀😊😊")
});