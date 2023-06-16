// Global Variables

// Hide mobile navbar
const mobileNavbar = () => {
  let mobileNavbar = document.querySelector(".mobileNavbar");

  mobileNavbar.classList.toggle("hide");
};

// Change alumni logos
const alumni = () => {
  let imgOne = document.querySelector(".imgOne");
  let imgTwo = document.querySelector(".imgTwo");
  let imgThree = document.querySelector(".imgThree");
  let imgFour = document.querySelector(".imgFour");
  let imgFive = document.querySelector(".imgFive");

  imgOne.setAttribute(
    "src",
    "https://perscholas.org/wp-content/uploads/2023/05/Robert_Half_Talent_Solutions_13.png"
  );
  imgTwo.setAttribute(
    "src",
    "https://perscholas.org/wp-content/uploads/2023/05/Amazon_logo.svg-500x151.png"
  );
  imgThree.setAttribute(
    "src",
    "https://perscholas.org/wp-content/uploads/2023/05/infosys-logo-PNG-500x194.png"
  );
  imgFour.setAttribute(
    "src",
    "https://perscholas.org/wp-content/uploads/2023/05/Bank-of-America-Emblem-500x281.png"
  );
  imgFive.setAttribute(
    "src",
    "https://perscholas.org/wp-content/uploads/2023/05/barclays-logo-e1596463965665.jpg"
  );
};

// HIde scroll bar
const closeScroll = () => {
  let scrollbar = document.querySelector(".scrollbar");

  scrollbar.classList.toggle("hide");
};
