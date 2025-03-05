gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

function custom_cursor(){
let cursor=document.querySelector('.cursor')
let page1=document.querySelector('.page1')
let page4=document.querySelector('.page4')
let page5=document.querySelector('.page5')
let cursor2=document.querySelector('.cursor2')
let cursor3=document.querySelector('.cursor3')

const cursorWidth = cursor.offsetWidth;
const cursorHeight = cursor.offsetHeight;




page1.addEventListener("mousemove",function(dets){

    cursor.innerHTML = "play reel!";
    cursor.style.fontWeight='900'

    cursor.style.display = 'flex';
    cursor.style.alignItems = 'center';
    cursor.style.justifyContent = 'center';

    gsap.to(cursor,{
        x:dets.x-cursorWidth/2,
        y:dets.y-cursorHeight/2,
        duration:0.8
        

    })
})
page1.addEventListener('mouseenter',function(){
    gsap.to(cursor,{
        opacity:1,
        scale:1
    })
})
page1.addEventListener('mouseleave',function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})
page4.addEventListener('mousemove',function(dets){
  gsap.to(cursor2,{
    x:dets.x-cursorWidth/2,
    y:dets.y-cursorHeight/2,
    duration:0.8
  })
})
page4.addEventListener('mouseenter',function(){
  gsap.to(cursor2,{
    opacity:0.6,
    scale:1,

  })


  
})
page4.addEventListener('mouseleave',function(){
  gsap.to(cursor2,{
    opacity:0,
    scale:0,

  })


  
})

page5.addEventListener('mousemove',function(dets){
  gsap.to(cursor3,{
    x:dets.x-cursorWidth/2,
    y:dets.y-cursorHeight/2,
    duration:0.8
  })
})
page5.addEventListener('mouseenter',function(){
  gsap.to(cursor3,{
    opacity:1,
    scale:1,

  })
  
})
page5.addEventListener('mouseleave',function(){
  gsap.to(cursor3,{
    opacity:0,
    scale:0,


  })

  
})


}
custom_cursor()

function loader(){
  let tl=gsap.timeline()
tl.from('.loader h5',{
  x:200,
  opacity:0,
  stagger:0.1,
  duration:1
})
tl.to('.loader h5',{
  opacity:0,
  x:-200,
  stagger:0.1,
  duration:1


})
tl.to('.loader',{
  opacity:0,
  display:'none',
  duration:2
})
}
loader()

function rejoice(){
  let rejoice=document.querySelectorAll('.fwg8ygfw span')
  let end=document.querySelector('.urgfuy8wga8hw h1 span')

  gsap.from(rejoice,{
    y:70,
    stagger:0.5,
    opacity:0,
    duration:0.7,
    delay:0.8,

  })
  gsap.from(end,{
    y:70,
    stagger:0.2,
    opacity:0,
    duration:0.7,
    delay:0.8,

  })
}
rejoice()

let text=document.querySelectorAll('.page2 hdthdy h1')
gsap.from(text,{
  y:120,
  stagger:0.3,
  duration:1,
  ScrollTrigger:{
    trigger:'.page2',
    scroller:'body',
    start:"top 47%",
    end:'top 46%',
    scrub:2
  }
})