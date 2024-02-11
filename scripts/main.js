// Header part : 

let tl = gsap.timeline({paused: true, default : {duration : .03}})
let container = document.querySelector('.container')
let button = document.querySelector('button')
// tl.to(container, {clipPath: 'polygon(7% 7%, 93% 7%, 93% 93%, 7% 93%)'})
// tl.to(container,{clipPath: 'polygon(93% 7%, 93% 7%, 93% 93%, 93% 93%)'}, '+=1' )
tl.to(container,{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'} )
tl.to(container,{clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)'}, '+=4' )
tl.to('.container2',{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'},'-=.3' )
tl.to('.container2',{clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)'}, '+=4' )
tl.to('.container3',{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'},'-=.3' )
// tl.to('h1', {color : 'white'})
// tl.to(container,{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'}, '-=.3' )

container.addEventListener('mouseover', () => {
  tl.play()
})



// Title animation part :3
// SplitType pluggin part :
// let myText2 = new SplitType('#my-text-2')

// let myText = new SplitType('.reveal-type')

// // Gsap pluggin part :
// gsap.to('.reveal-type .char', {
//     y:0,
//     stagger: 0.05,
//     delay:0.2,
//     duration:0.1,
//     scrollTrigger: {
//       trigger: '.reveal-type.char',
//       start: 'top top',
//       // end: 'top 20%',
//       // scrub: true,
//       // markers: false,
//       // toggleActions: 'play play reverse reverse'
//   }
// })
const splitTypess = document.querySelectorAll('.reveal-type')
splitTypess.forEach((char,i) => {


  let titre = new SplitType(char, { types:'chars'})  

  gsap.to(titre.chars, 
      
      {
        y:0,
        stagger: 0.05,
        delay:0.2,
        duration:.1,
        ease: "power2.out",
        scrollTrigger: {
        trigger: char,
        start: 'top 70%',
        end: 'bottom 20%',
        scrub: false,
        markers: false,
        toggleActions: 'play play reverse reverse'
        }
      })
})  


// 2eme methode
gsap.registerPlugin(ScrollTrigger)
const splitTypes = document.querySelectorAll('.reveal-type2')

splitTypes.forEach((char,i) => {

    const bg = char.dataset.bgColor
    const fg = char.dataset.fgColor

    const text = new SplitType(char, { types: 'chars'})

    gsap.fromTo(text.chars, 
        {
            color: bg,
        },
        {
            color: fg,
            duration: 0.3,
            stagger: 0.02,
            scrollTrigger: {
                trigger: char,
                start: 'top 80%',
                end: 'top 60%',
                scrub: true,
                markers: false,
                toggleActions: 'play play reverse reverse'
            }
    })
})  

// Apparition photo

let options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
}
// Register IntersectionObserver
let io = new IntersectionObserver(function(entries) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      // if (entry.isIntersecting) {
      // Add 'active' class if observation target is inside viewport
      entry.target.classList.add("reveal");
    } else {
      // Remove 'active' class otherwise
      entry.target.classList.remove("reveal");
    }
  });
}, options);

// Declares what to observe, and observes its properties.
let element = document.querySelectorAll(".elementjs");
element.forEach((el) => {
  io.observe(el);
});
let elementright = document.querySelectorAll(".elementjsright");
elementright.forEach((elright) => {
  io.observe(elright); 
});
let elementleft = document.querySelectorAll(".elementjsleft");
elementleft.forEach((elleft) => {
  io.observe(elleft); 
});

// Lenis
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)



// Hamburger part :

let hamburger = document.querySelector(".hamburger")
let lineOne = document.querySelector('.line-one')
let lineTwo = document.querySelector('.line-two')
let lineThree = document.querySelector('.line-three')

TweenMax.from(hamburger, 2, {x:-100})

let lines = [lineOne, lineTwo, lineThree];
let toggleMenu = new TimelineMax ({paused : true, reversed : true})
let tlm = new TimelineMax ({});

hamburger.addEventListener('mouseenter', () => {   // tlm.to(lineOne, 0.25, {scaleX:1.5})
    // tlm.to(lineThree, 0.25, {scaleXreverse:1.5})
    // tlm.to(lineOne, 0.25, {scaleX:1})
    
    // tlm.to(lineThree, 0.25, {scaleX:1})
    if (hamburger.classList.contains('js-x')) {return;}
    tlm.staggerTo(lines, 0.25, {scaleX:1.5, repeat : 1, yoyo: true, ease: "power2.inOut", svgOrigin:"50 50"}, 0.125);
})
// To make a cross : 
// toggleMenu.to(lineTwo, .15, {scaleX:0})
// toggleMenu.to(lineOne, .15, {rotate:45, transformOrigin:"50% 50%", y:8, ease: "Power2.easeInOut"}, "cross")
// toggleMenu.to(lineThree, .15, {rotate:-45, transformOrigin:"50% 50%", y:-8, ease: "Power2.easeInOut"}, "cross")

// to make a fancy anim :
toggleMenu.to(lineTwo, .15, {scaleX:0, svgOrigin:"50 50"})
toggleMenu.to(lineOne, .25, {transformOrigin:"50% 50%", y:8, ease: "power2.inOut"}, "join")
toggleMenu.to(lineThree, .25, {transformOrigin:"50% 50%",   y:-8, ease: "power2.inOut"}, "join")
toggleMenu.to(hamburger, .5, {rotation : 360,ease: "power2.inOut"})
toggleMenu.to(lineOne, .25, {rotate:45, ease: "power2.inOut"}, "cross")
toggleMenu.to(lineThree, .25, {rotate:-45, ease: "power2.inOut"}, "cross")

hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('js-x');
    toggleMenu.reversed() ? toggleMenu.play() : toggleMenu.reverse();
})







// Smooth Gallery part :

const track = document.getElementById("image-track");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
  
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
  track.dataset.percentage = nextPercentage;
  
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });
  
  for(const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${100 +   nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
}

/* -- Had to add extra lines for touch events -- */

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);


// next-one : 

