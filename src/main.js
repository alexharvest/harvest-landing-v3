import observeImg from './modules/observe'
import lottie from "lottie-web"
import './styles/indexStyles.css'
import './public/social-card.png'
import "./public/homepageAnimation.json"

const lazyImgs = document.getElementsByClassName('lazyImg');
[...lazyImgs].forEach(img => {
    observeImg(
        img,
        () => {
            img.src = img.attributes['data-src'].value;
        }
    );
});

const animationElement = document.getElementById("animation");

lottie.loadAnimation({
    container: animationElement, // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './public/homepageAnimation.json' // the path to the animation json
  });