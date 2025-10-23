import slider1 from "../assets/imgs/slider1.jpeg";
import slider1Small from "../assets/imgs/slider1-small.jpeg";
import slider2 from "../assets/imgs/slider2.jpeg";
import slider2Small from "../assets/imgs/slider2-small.jpeg";
import slider3 from "../assets/imgs/slider3.jpeg";
import slider3Small from "../assets/imgs/slider3-small.jpeg";
import slider4 from "../assets/imgs/slider4.jpeg";
import slider4Small from "../assets/imgs/slider4-small.jpeg";
import slider5 from "../assets/imgs/slider5.jpeg";
import slider5Small from "../assets/imgs/slider5-small.jpeg";
import videoSrc from "../assets/videos/IMG_4941.MP4";
import video2Src from "../assets/videos/video2.mp4";

export const galleryOptions = [
  { img: slider1, smallImg: slider1Small },
  { img: slider2, smallImg: slider2Small },
  { img: slider3, smallImg: slider3Small },
  { img: slider4, smallImg: slider4Small },
  { img: slider5, smallImg: slider5Small },
  {
    type: "video",
    src: videoSrc,
  },
  {
    type: "video",
    src: video2Src,
  },
];

export const gallarySliderOption = {
  type: "loop",
  autoplay: true,
  interval: 2000,
  perPage: 4,
  gap: "1rem",
  breakpoints: {
    1000: {
      perPage: 3,
    },
    800: {
      perPage: 2,
    },
    600: {
      perPage: 1,
    },
  },
};
