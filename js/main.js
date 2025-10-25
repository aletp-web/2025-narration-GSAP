gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin, Draggable,MotionPathPlugin);


/*Media match - Responsive
let mm = gsap.matchMedia();

mm.add ({
  isMobile: "(max-width: 799px)",
  isDesktop: "(min-width)",

}, (context) => {
  let { isMobile, isDesktop } = context.conditions
});*/


//all tweens run in direct succession
let mm = gsap.matchMedia()

let tl = gsap.timeline({ /** Que l'animation se lance au scroll de la section 4 */
    scrollTrigger:{
        trigger: "#about", 
        //markers: true, 
        start: "top 50%", 
        end: "top 20%",
        id: "logoInsta",
        toggleActions:"play none reverse reset", 
        scrub: 1,
    }
    
},);
mm.add({
    isMobile:"(max-width:799px)", 
    isDesktop:"(min-width:800px)",
}, (context)=> {
    let {isMobile, isDesktop } = context.conditions;

    tl.from("#insta", {y: isMobile ? 30 : 900,duration: 2,})
    .from("#iara", {y: isMobile ? 30 : 900,duration: 2,})
    .from("#tiktok", {y: isMobile ? 30 : 900,duration: 2,})
} )





// Texte section 1 - anim 
gsap.to("#logo",{ /** Que l'animation se lance au scroll de la section 1 */
    scrollTrigger:{
        trigger: "#creations", 
        //markers: true, 
        start: "top 60%", 
        end: "top 40%",
        toggleActions:"play none reverse reset", 
        scrub: 1,
    },
    rotation: -90,
    duration: 2,
    x: "100vw",
    y: 0,


})

// Draggable sec 1  - anim 
gsap.to("#png",{ /** Que l'animation se lance au scroll de la section 1 */
    scrollTrigger:{
        trigger: "#creations", 
        //markers: true, 
        start: "top 60%", 
        end: "top 40%",
        toggleActions:"play none reverse reset", 
        scrub: 1,
    },
    rotation: -90,
    duration: 2,
    x: "100vw",
    y: 0,


})

gsap.from("#png",{ /** Que l'animation se lance au scroll de la section 1 */
    scrollTrigger:{
        trigger: "#creations", 
        //markers: true, 
        start: "top 80%", 
        end: "top 20%",
        toggleActions:"play none reverse reset", 
        scrub: 1,
    },
    rotation: 0,
    duration: 1,
    x: 0,
    y: 0,
})


  //Draggable Avatar section 5 - CONTACT
  Draggable.create("#draggable", {
    type: "x,y",
    bounds: "#contact",
    cursor: 'grab',

    onDrag: function(){
        document.getElementById('draggable')
    }
  })

  //Draggable Avatar section 1 - TITRE
  Draggable.create("#png", {
    type: "x,y",
    bounds: "#section1",
    cursor: 'grab',

    onDrag: function(){
        document.getElementById('png')
    }
  })

//Draggable Avatar section 3 - AVIS
  Draggable.create(".avis", {
    type: "rotation",
    bounds: "#retours",
    cursor: 'grab',

    onDrag: function(){
        document.getElementById('avis').style.width = ''
    }
  })



  //scrolltrigger img anim section 2 - CREATIONS
  /*gsap.utils.toArray(".photo").forEach((photo, i) => { /* Vu JB : Issue de chat car double scrub ne marchait pas. 
    gsap.from(photo, {
      x: 100 * (i + 1) + "vh", // ou autre logique
      scrollTrigger: {
        trigger: photo,
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
        //markers: true,
      }
    });
  }); */

  // Carroussel - remplacement pour anim du dessus
  let tlPhoto = gsap.timeline({
    scrollTrigger: {
        trigger: "#creations",
        start: "top80%",
        end: "bottom 20%",
        //scrub: true,
        //markers: true,
        toggleActions: 'play',
    },
    repeat: -1,
    yoyo: true
  });

  tlPhoto.to(".photo",{
    xPercent: -50,
    duration: 6,
  });
  
  //scrolltrigger img anim section 3 - LES AVIS
  gsap.utils.toArray(".avis").forEach((avis, i) => { /* Vu JB : Issue de chat car double scrub ne marchait pas. */
    gsap.from(avis, {
      x: -50 * (i + 1) + "vh", // ou autre logique
      scrollTrigger: {
        trigger: avis,
        start: "top 100%",
        end: "top 60%",
        scrub: 1,
        //markers: true,
      }
    });
  });

 // Anim pour que le formulaire parte a droite au scroll - SECTION 5
  gsap.from("#formulaire",{ /** Que l'animation se lance au scroll de la section 5 */
    scrollTrigger:{
        trigger: "#contact", 
        //markers: true, 
        start: "top 60%", 
        end: "top 40%",
        toggleActions:"play none reverse reset", 
        scrub: 1,
    },
    rotation: -90,
    duration: 2,
    x: "100vw",
    y: 0,


})