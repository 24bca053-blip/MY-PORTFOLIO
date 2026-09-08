/* =========================
   TYPING ANIMATION
========================= */

const words = [
  "Web Developer",
  "BCA Student",
  "Python Programmer",
  "UI Designer",
  "Software Developer"
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;

const typingElement =
  document.getElementById("typing");


function typeEffect() {

  const currentWord = words[wordIndex];


  if (!deleting) {

    typingElement.textContent =
      currentWord.substring(
        0,
        characterIndex
      );

    characterIndex++;


    if (
      characterIndex >
      currentWord.length
    ) {

      deleting = true;

      setTimeout(typeEffect, 1200);

      return;
    }

  } else {

    typingElement.textContent =
      currentWord.substring(
        0,
        characterIndex
      );

    characterIndex--;


    if (characterIndex < 0) {

      deleting = false;

      characterIndex = 0;

      wordIndex =
        (wordIndex + 1) % words.length;

    }

  }


  setTimeout(
    typeEffect,
    deleting ? 60 : 100
  );

}


typeEffect();



/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const revealElements =
  document.querySelectorAll(".reveal");


function revealOnScroll() {

  revealElements.forEach(element => {

    const elementTop =
      element.getBoundingClientRect().top;

    const windowHeight =
      window.innerHeight;


    if (
      elementTop <
      windowHeight - 100
    ) {

      element.classList.add("active");

    }

  });

}


window.addEventListener(
  "scroll",
  revealOnScroll
);


revealOnScroll();



/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
  document.querySelectorAll("section");

const navLinks =
  document.querySelectorAll("nav a");


window.addEventListener(
  "scroll",
  () => {

    let current = "";

    sections.forEach(section => {

      const sectionTop =
        section.offsetTop - 150;

      if (
        window.scrollY >= sectionTop
      ) {

        current =
          section.getAttribute("id");

      }

    });


    navLinks.forEach(link => {

      link.style.color = "white";

      if (
        link.getAttribute("href") ===
        "#" + current
      ) {

        link.style.color = "#00e5ff";

      }

    });

  }
);