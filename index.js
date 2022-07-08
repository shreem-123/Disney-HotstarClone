let movies = [
  {
    name: "falcon and the winter soldier",
    des:
      "An action-packed montage is then shown, which showcases the action stuntwork and battles that will take place in the series. This includes Zemo fighting in his Marvel Comics mask. As Bucky points out, the two men are not friends; they're two guys who had a mutual friend (Steve Rogers) and now need to help one another.",
    image: "images/slider 2.png"
  },
  {
    name: "loki",
    des:
      " Loki, Prince of Asgard, Odinson, rightful heir of Jotunheim, and God of Mischief, is burdened with glorious purpose. His desire tobe a king drives him to sow chaos in Asgard. In his lust forpower, he extends his reach to Earth.",
    image: "images/slider 1.png"
  },
  {
    name: "wanda vision",
    des:
      "Marvel Studios presents WandaVision, a blend of classic television and the Marvel Cinematic Universe in which Wanda Maximoff (Elizabeth Olsen) and Vision (Paul Bettany) – two super-powered beings living idealized suburban lives – begin to suspect that everything is not as it seems.",
    image: "images/slider 3.png"
  },
  {
    name: "raya and the last dragon",
    des:
      "Raya and the Last Dragon was released to widespread critical acclaim, with praise directed towards its visuals, characters, world-building, and voice acting.",
    image: "images/slider 4.png"
  },
  {
    name: "Luca",
    des:
      "On the Italian Riviera, an unlikely but strong friendship grows between a human being and a sea monster disguised as a human.",
    image: "images/slider 5.png"
  }
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0; //track the current slide

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  //create DOM elements
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  //attaching elements
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  //setting up images
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  //setting elements classname
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

//video cards

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

//card sliders

let cardContainers = [...document.querySelectorAll(".card-container")];
let prebtns = [...document.querySelectorAll(".pre-btn")];
let nxtbtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((items, i) => {
  let containerDimensions = items.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtbtns[i].addEventListener("click", () => {
    items.scrollLeft += containerWidth - 200;
  });

  prebtns[i].addEventListener("click", () => {
    items.scrollLeft -= containerWidth + 200;
  });
});
