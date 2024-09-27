const text = "Lucas Figueiredo";
const typingSpeed = 250;       
let index = 0;
let hasAnimated = false;       

const elements = [document.getElementById("lucas"), document.getElementById("luca")]; 

function typeWriter(element, idx = 0) {
  if (idx < text.length) {
    element.innerHTML = text.substring(0, idx + 1); 
    setTimeout(() => typeWriter(element, idx + 1), typingSpeed);              
  }
}

function startTyping(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting && !hasAnimated) {
      elements.forEach(el => {
        if (el) {
          typeWriter(el);  
        }
      });
      hasAnimated = true;  
    }
  });
}

const observer = new IntersectionObserver(startTyping, {
  root: null,    
  threshold: 0.1
});

elements.forEach(el => {
  if (el) {
    observer.observe(el);
  }
});
