gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin, Draggable,MotionPathPlugin);
 
 /** GSAP pour que le logo insta s'anime */

//all tweens run in direct succession
let tl = gsap.timeline({
    repeate : -1,
    yoyo: true,
});

tl.from("#insta", {x: 900,duration: 1,})
  .from("#iara", {y: 900,duration: 1,})
  .from("#tiktok", {y: -900,duration: 1,})



  /**Draggable section 5 */
  Draggable.create("#draggable", {
    type: "x,y",
    bounds: "#contact",
    cursor: 'grab',

    onDrag: function(){
        document.getElementById('draggable').style.width = '250px'
    }


    
  })