// ============================
// CURSOR FOLLOW
// ============================

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// ============================
// BUBBLE CLICK EFFECT
// ============================

document.addEventListener("click", function(e){

    const bubble = document.createElement("span");

    bubble.classList.add("bubble");

    bubble.style.left = e.pageX + "px";
    bubble.style.top = e.pageY + "px";

    const size = Math.random() * 40 + 10;

    bubble.style.width = size + "px";
    bubble.style.height = size + "px";

    document.body.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    },1000);

});

// ============================
// SCROLL ANIMATION
// ============================

const cards = document.querySelectorAll(
".card,.project-card,.about-card,.experience-card,.contact-box"
);

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:0.2});

cards.forEach(card=>{

card.classList.add("hidden");

observer.observe(card);

});

// ============================
// PROGRESS BAR ANIMATION
// ============================

const progress = document.querySelectorAll(".progress div");

window.addEventListener("load",()=>{

progress.forEach(bar=>{

const width = bar.style.width;

bar.style.width="0";

setTimeout(()=>{

bar.style.width=width;

bar.style.transition="2s";

},300);

});

});

// ============================
// CARD PRESS EFFECT
// ============================

document.querySelectorAll(".card,.project-card").forEach(card=>{

card.addEventListener("mousedown",()=>{

card.style.transform="scale(.96)";

});

card.addEventListener("mouseup",()=>{

card.style.transform="scale(1)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="scale(1)";

});

});

// ============================
// HEADER SHADOW
// ============================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.style.boxShadow="0 10px 30px rgba(0,0,0,.08)";
header.style.background="rgba(255,255,255,.75)";

}else{

header.style.boxShadow="none";
header.style.background="rgba(255,255,255,.45)";

}

});

// ============================
// TEXT TYPING EFFECT
// ============================

const text = "Software Engineering Student";
const target = document.querySelector(".hero-text h2");

let i = 0;

target.innerHTML = "";

function typing(){

if(i < text.length){

target.innerHTML += text.charAt(i);

i++;

setTimeout(typing,200);

}

}

typing();