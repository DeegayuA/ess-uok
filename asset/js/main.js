
/*=====  hero section blob animation =====*/
const blob = document.getElementById("blob");

document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    blob.animate({
        left:  `${clientX}px`,
        top: `${clientY}px`
    }, { duration: 3000, fill: "forwards"});
};
/*===== Word =====*/
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector('h1','h3').onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
};

/*===== Banner ANIMATION =====*/

const subtitle = document.getElementsByClassName("banner-subtitle")[0];

const createWord = (text, index) => {
  const word = document.createElement("span");
  
  word.innerHTML = `${text} `;
  
  word.classList.add("banner-subtitle-word");
  
  word.style.transitionDelay = `${index * 40}ms`;
  
  return word;
}

const addWord = (text, index) => subtitle.appendChild(createWord(text, index));

const createSubtitle = text => text.split(" ").map(addWord);

createSubtitle("Click here to see all the activities");



/*===== SHOW SCROLL TOP =====*/
function scrollTop() {
  const scrollTop = document.getElementById('scroll-top')
  if (this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollTop);
