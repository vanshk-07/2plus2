const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');


const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();


yesBtn.addEventListener('click',()=>{
    question.innerHTML ="Gimme your hand then...";
});


noBtn.addEventListener('mouseover',()=>{
    const i = Math.floor(Math.random()*(wrapperRect.width - noBtnRect.width))+1;
    const j = Math.floor(Math.random()*(wrapperRect.height - noBtnRect.height))+1;

    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});

noBtn.addEventListener('click',()=>{
    question.innerHTML ="Apne lober ko dhokha do, hame bhi darling mauka do...";
});