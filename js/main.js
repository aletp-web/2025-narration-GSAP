gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin, Draggable,MotionPathPlugin);
 
 /** GSAP pour que le logo insta s'anime */

//all tweens run in direct succession
let tl = gsap.timeline({
    scrollTrigger:{
        trigger: "#about", 
        markers: true, 
        start: "top 40%", 
        end: "top 20%",
        id: "logoInsta",
        toggleActions:"play none reverse reset", 
        scrub: 1,
    }
});

tl.from("#insta", {x: 900,duration: 2,})
  .from("#iara", {y: 900,duration: 2,})
  .from("#tiktok", {y: -900,duration: 2,})


  /** Que l'animation se lance au scroll de la section 4 */

    

  /**Draggable section 5 */
  Draggable.create("#draggable", {
    type: "x,y",
    bounds: "#contact",
    cursor: 'grab',

    onDrag: function(){
        document.getElementById('draggable').style.width = '100px'
    }
  })