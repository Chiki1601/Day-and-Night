const labelBtn = document.querySelector('#checkbox');
const btn = document.querySelector('.btn');
const birds = document.querySelectorAll('.bird');
const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const cloud = document.querySelector('.cloud');
const boat = document.querySelector('.boat');

const stars = document.querySelector('.stars');


const isChecked = function(){
  if(!labelBtn.checked){
    // DAY
    document.body.style.backgroundColor = "#c0dfef";
    btn.innerHTML = 'NIGHT';
    sun.classList.remove('night');
    moon.classList.remove('night');
    stars.classList.remove('night');
    boat.classList.remove('night');
    birds.forEach(bird => bird.classList.remove('night'));
    
    return;
  }
  // NIGHT
   document.body.style.backgroundColor = "#194a63";
  btn.innerHTML = 'DAY';
  birds.forEach(bird => bird.classList.add('night'));
  sun.classList.add('night');
  moon.classList.add('night');
  stars.classList.add('night');
  boat.classList.add('night');
}


labelBtn.addEventListener('click', isChecked);