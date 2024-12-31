///Navbar///

const iconMenu = document.querySelector(".menu-icon");
const menuBody = document.querySelector(".menu-body");

if (iconMenu) {
  iconMenu.addEventListener("click", function() {
    iconMenu.classList.toggle("active");
    menuBody.classList.toggle("active");

    menuBody.querySelectorAll(".menu-link").forEach((link) => {
      link.addEventListener("click", () => {
        iconMenu.classList.remove("active");
        menuBody.classList.remove("active");
      });
    });
  });
}




  // Блок Начало ///


  // gsap.fromTo (".par1", { opacity: 0, scale:0}, {duration:2, delay:2, opacity:1, scale:2})
  // gsap.to (".par1", {x:100, duration: 1.5, delay: 4.5, scale:-1, rotation: 220, opacity: 0})
  // gsap.fromTo (".par2", { opacity: 0, scale:0}, {duration:2, delay:5.5, opacity:1, scale:2})
  // gsap.to (".par2", {x:100, duration: 1.5, delay: 7.5, scale:-1, rotation: 220, opacity: 0})
  // gsap.fromTo (".par3", { opacity: 0, scale:0}, {duration:2, delay:9.5, opacity:1, scale:2})
  // gsap.to (".par3", {x:100, duration: 1.5, delay: 11.5, scale:-1, rotation: 220, opacity: 0})
  

  gsap.to (".par4", {
    // text:"Hello, I'm Marina and I'm a web developer",
    text:"Привет, я Марина и я веб-разработчик",
    duration:4, 
       ease: "power1.in",
    yoyo: true,
    delay:1.5,
    repeat:2
    })


 // Навыки//
    
    
  const myTags = [
    "JavaScript",
    "CSS3",
    "HTML5",
    "Bootstrap5",
    "Github",
    "Figma",
    "GSAP",
    "API",
    "Flexbox",
    "SASS",
    "ReactHooks",
    "React",
    "Redux",
    "Redux Toolkit",
    "MongoDB",
    "CMS WordPress",
  ];
  
const tagCloud = TagCloud(".skills", myTags, {
    radius: 230,
  
    maxSpeed: "slow",
    initSpeed: "fast",
  
    direction: 135,
  
    keep: true,
  });


  // Анкета//

  window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
      form.reset();
    }
  };


  gsap.from (".button-3", {y:50, duration:2, delay: 3, opacity: 0, stagger:4})


/// Анимация кнопки в разделе footer///

  gsap.to (".footer-h3", {
    text:"web developer",
    duration:3, 
    repeat:-1,
    repeatDelay:0.7,
    ease: "power1.in",
    yoyo: true
    })