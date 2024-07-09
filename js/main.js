/*=============================================MENU-ICON JS======================================================================== */

let menuIcon =document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/*=============================================SECTION ACTIVE JS======================================================================== */

let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>= offset && top < offset + height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
            });
            document.querySelector('header nav a[href*='+id+']').classList.add('active');
        }
    });

    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);


    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*=============================================SCROLL REVEAL JS======================================================================== */

ScrollReveal({
    distance:'80px',
    duration:2000,
    delay:200,
});

ScrollReveal().reveal('.home-container,heading',{origin:'top'});
ScrollReveal().reveal('.home-img,.skills-container,.projects-box,.contact form,.more-projects',{origin:'bottom'});
ScrollReveal().reveal('.home-contact h1,.about-img',{origin:'left'});
ScrollReveal().reveal('.home-contact p,.about-content',{origin:'right'});

/*=============================================TYPED JS======================================================================== */
const typed=new Typed('.multiple-text',{
    strings: ['Full Stack Developer','Problem Solver','Aspiring Software Engineer'],
    typeSpeed:70,
    backSpeed: 70,
    backDelay:1000,
    loop:true,
});


/*=============================================INPUT FOCUS JS======================================================================== */
let inputs=document.querySelectorAll('form .input-box input');

inputs.forEach(input=>{
    input.addEventListener("focus", (event) => {
        event.target.classList.add('focus');
    }),
    input.addEventListener("focusout",(event)=>{
        event.target.classList.remove('focus');
    })
});

document.querySelector('form textarea').addEventListener("focus",(event)=>{
    event.target.classList.add('focus');
});
document.querySelector('form textarea').addEventListener("focusout",(event)=>{
    event.target.classList.remove('focus');
});


/*====================================PORTFOLIO FORM============================================================================= */
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyrQ5ar1M-th9lqLbsreGSDRBBFnX2A662bSly3LBjdVKXX_flHXaHrcdJLXOu6mYBDHA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById('msg');

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.classList.remove('hide');
        setTimeout(()=>{
            msg.classList.add('hide');
        },5000);
        form.reset();
    })
      .catch(error => console.error('Error!', error.message))
  });

  /*======================================READ MORE=================================================================================== */
readBtn=document.querySelector('#read button');
aboutContent=document.querySelector('.more-about');

readBtn.addEventListener("click",()=>{
    if(readBtn.innerText==="Read More"){
        aboutContent.classList.add('show');
        readBtn.innerText="Read Less";
    }else{
        aboutContent.classList.remove('show');
        readBtn.innerText="Read More";
    }
});




