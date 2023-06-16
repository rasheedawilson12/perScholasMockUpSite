// Hide mobile navbar
const mobileNavbar = () => {
  let mobileNavbar = document.querySelector(".mobileNavbar");

  mobileNavbar.classList.toggle("hide");
};

// Change alumni logos
const alumniRight = () => {
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

// Change logos back
const alumniLeft = () => {
  let imgOne = document.querySelector(".imgOne");
  let imgTwo = document.querySelector(".imgTwo");
  let imgThree = document.querySelector(".imgThree");
  let imgFour = document.querySelector(".imgFour");
  let imgFive = document.querySelector(".imgFive");

  imgOne.setAttribute(
    "src",
    "https://perscholas.org/wp-content/uploads/2023/05/logo-tek-500x135.png"
  );
  imgTwo.setAttribute(
    "src",
    "https://perscholas.org/wp-content/uploads/2023/05/Nagarro_logo_new.svg-500x125.png"
  );
  imgThree.setAttribute(
    "src",
    "https://perscholas.org/wp-content/uploads/2023/05/wells_fargo_logo_horiz-500x147.png"
  );
  imgFour.setAttribute(
    "src",
    "https://perscholas.org/wp-content/uploads/2023/05/download-1.png"
  );
  imgFive.setAttribute(
    "src",
    "https://perscholas.org/wp-content/uploads/2023/05/ppl_logo-500x56.png"
  );
};

// HIde scroll bar
const closeScroll = () => {
  let scrollbar = document.querySelector(".scrollbar");

  scrollbar.classList.add("closeScrollbar");
};
