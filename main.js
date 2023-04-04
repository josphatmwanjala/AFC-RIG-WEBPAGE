const toggleBtns = document.querySelectorAll('.grey-rectangle');
const mainBackgrounds = document.querySelectorAll('.grey_valve2');
const valveBackgrounds = document.querySelectorAll('.valve_1');
const valveTxt = document.querySelectorAll('#greentxt');
const loadingAnimation = document.querySelector('#loader');


toggleBtns.forEach((toggleBtn, index) => {
  toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    mainBackgrounds[index].classList.toggle('active');
    valveBackgrounds[index].classList.toggle('active');
    valveTxt[index].classList.toggle('active');
    loadingAnimation[index].classList.toggle('active');
    
  });
});