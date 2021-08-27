gsap.registerPlugin(ScrollTrigger, CSSRulePlugin, MotionPathPlugin);

//main
const grid = document.querySelector(".l-grid");

//nav elements
const navGrid = document.querySelector(".l-grid__nav");
const navTextJen = document.querySelector(".c-webtitle");
const navTextEn = document.querySelector(".c-webtitle__text-en");
const navVolBtn = document.querySelector(".c-volume-button");

//video element
const video = document.querySelector(".c-video");

// const tiktokVideos = [
//   "/media/tiktokvid1.mp4",
//   "/media/tiktokvid2.mp4",
//   "/media/tiktokvid3.mp4",
// ];

// var activeVid = 0;

//marquee elements
const marqueeContainer = document.querySelector(".c-marquee");
const marqueeText = gsap.utils.toArray(".c-marquee__text");

//header elements
const headerGrid = document.querySelector(".l-grid__header");
const headerText = document.querySelector(".c-header__text");
const subjectImage = document.querySelector(".c-subject__image");
const subjectImageShadow = document.querySelector(".c-subject__shadow");

//intro element
const introGrid = document.querySelector(".l-grid__intro");

//quote elements
const firstQuoteContainer = document.querySelector(".c-quote-1");
const firstQuoteImage = document.querySelector(".c-quote-1__image");
const firstQuoteImageShadow = document.querySelector(".c-quote-1__shadow");
const firstQuoteTextContainer = document.querySelector(
  ".c-quote-1__text-container"
);
const firstDoubleQuotesLeft = document.querySelector(
  ".c-quote-1__double-quotation-left"
);
const firstDoubleQuotesRight = document.querySelector(
  ".c-quote-1__double-quotation-right"
);
const firstQuoteText = document.querySelector(".c-quote-1__text");
const firstSubtext = document.querySelector(".c-quote-1__subtext");

const secondQuoteContainer = document.querySelector(".c-quote-2");
const secondQuoteImage = document.querySelector(".c-quote-2__image");
const secondQuoteImageShadow = document.querySelector(".c-quote-2__shadow");
const secondQuoteTextContainer = document.querySelector(
  ".c-quote-2__text-container"
);
const secondDoubleQuotesLeft = document.querySelector(
  ".c-quote-2__double-quotation-left"
);
const secondDoubleQuotesRight = document.querySelector(
  ".c-quote-2__double-quotation-right"
);
const secondQuoteText = document.querySelector(".c-quote-2__text");
const secondSubtext = document.querySelector(".c-quote-2__subtext");

//gallery elements
const galleryGrid = document.querySelector(".l-grid__gallery");
const galleryTextContainer = document.querySelector(".c-travel-text");
const galleryContainer = document.querySelector(".c-travel-gallery");
const galleryImgContainers = gsap.utils.toArray(
  ".c-travel-gallery__img-container"
);
const galleryImages = gsap.utils.toArray(".c-travel-gallery__image");
const galleryImagesOdd = gsap.utils.toArray(
  ".c-travel-gallery__image:nth-child(odd)"
);
const galleryImagesEven = gsap.utils.toArray(
  ".c-travel-gallery__image:nth-child(even)"
);

//end elements
const endGrid = document.querySelector(".l-grid__end");
const endHeader = document.querySelector(".c-end-header");

//button click
navVolBtn.addEventListener("click", () => {
  if (video.muted) {
    navVolBtn.textContent = "volume_off";
    video.muted = false;
  } else {
    navVolBtn.textContent = "volume_up";
    video.muted = true;
  }
});

//play videos
// video.addEventListener("ended", () => {
//   activeVid = ++activeVid % tiktokVideos.length;
//   video.src = tiktokVideos[activeVid];
//   video.play;
// });

//timelines
const navStTl = gsap.timeline({
  scrollTrigger: {
    trigger: introGrid,
    start: "top top",
    toggleActions: "play none none reverse",
  },
  defaults: {
    duration: 0.25,
    ease: "none",
  },
});

const marqueeScrubStTl = gsap.timeline({
  scrollTrigger: {
    trigger: grid,
    start: "top top",
    scrub: 1,
  },
  defaults: {
    ease: "none",
  },
});

const headerScrubStTl = gsap.timeline({
  scrollTrigger: {
    trigger: headerGrid,
    start: "top top",
    scrub: true,
  },
});

const firstQuoteScrubStTl = gsap.timeline({
  scrollTrigger: {
    trigger: firstQuoteContainer,
    start: "top bottom",
    scrub: true,
  },
});

const firstQuoteStTl = gsap.timeline({
  defaults: { duration: 1 },
  scrollTrigger: {
    trigger: firstQuoteTextContainer,
    // markers: true,
    start: "top 70%",
    end: "bottom top",
    toggleActions: "play none none reverse",
  },
});

const secondQuoteScrubStTl = gsap.timeline({
  scrollTrigger: {
    trigger: secondQuoteContainer,
    start: "top bottom",
    scrub: true,
  },
});

const secondQuoteStTl = gsap.timeline({
  defaults: { duration: 1 },
  scrollTrigger: {
    trigger: secondQuoteTextContainer,
    // markers: true,
    start: "top 70%",
    end: "bottom top",
    toggleActions: "play none none reverse",
  },
});

const travelGalleryScrubStTl = gsap.timeline({
  scrollTrigger: {
    trigger: galleryGrid,
    // markers: true,
    scrub: true,
    start: "top bottom",
  },
});

const travelGalleryStTl = gsap.timeline({
  scrollTrigger: {
    trigger: galleryContainer,
    // markers: true,
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

// timeline animations
navStTl.from(navTextEn, {
  width: 0,
  opacity: 0,
});

marqueeText.forEach((text) => {
  marqueeScrubStTl.to(
    text,
    {
      xPercent: -150,
    },
    0
  );
});

headerScrubStTl
  .from(
    subjectImage,
    {
      yPercent: 10,
    },
    0
  )
  .to(
    subjectImageShadow,
    {
      yPercent: 10,
    },
    0
  );

firstQuoteScrubStTl
  .from(
    firstQuoteImage,
    {
      yPercent: 20,
    },
    0
  )
  .to(
    firstQuoteImageShadow,
    {
      yPercent: 10,
    },
    0
  )
  .from(
    firstQuoteTextContainer,
    {
      yPercent: 70,
    },
    0
  );

firstQuoteStTl
  .from(
    firstDoubleQuotesLeft,
    {
      yPercent: -100,
      opacity: 0,
      ease: "slow",
    },
    0
  )
  .from(
    firstDoubleQuotesRight,
    {
      yPercent: 100,
      opacity: 0,
      ease: "slow",
    },
    0
  );

secondQuoteScrubStTl
  .from(
    secondQuoteImage,
    {
      yPercent: 20,
    },
    0
  )
  .to(
    secondQuoteImageShadow,
    {
      yPercent: 10,
    },
    0
  )
  .from(
    secondQuoteTextContainer,
    {
      yPercent: 70,
    },
    0
  );

secondQuoteStTl
  .from(
    secondDoubleQuotesLeft,
    {
      yPercent: -100,
      opacity: 0,
      ease: "slow",
    },
    0
  )
  .from(
    secondDoubleQuotesRight,
    {
      yPercent: 100,
      opacity: 0,
      ease: "slow",
    },
    0
  );

galleryImages.forEach((image) => {
  gsap.from(image, {
    scrollTrigger: {
      trigger: image,
      start: "top center",
      // markers: true,
      toggleActions: "play none none reverse",
    },
    boxShadow: "0px 0px 0px #5fbff9",
  });
});

galleryImagesOdd.forEach((image) => {
  gsap.from(image, {
    scrollTrigger: {
      trigger: image,
      start: "top center",
      // markers: true,
      toggleActions: "play none none reverse",
    },
    xPercent: 10,
    duration: 1,
    ease: "slow",
    opacity: 0,
  });
});

galleryImagesEven.forEach((image) => {
  gsap.from(image, {
    scrollTrigger: {
      trigger: image,
      start: "top center",
      // markers: true,
      toggleActions: "play none none reverse",
    },
    xPercent: -10,
    duration: 1,
    ease: "slow",
    opacity: 0,
  });
});

travelGalleryScrubStTl
  .from(
    galleryTextContainer,
    {
      yPercent: 30,
    },
    0
  )
  .from(
    galleryContainer,
    {
      yPercent: -3,
    },
    0
  );
