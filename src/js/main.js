// Import our custom CSS
import '../scss/styles.scss'


// import heroImg from '../assets/images/hero.jpg'
const imagesPath = require.context('../assets/images', false, /\.(png|jpe?g|gif|svg)$/);

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import Alert from 'bootstrap/js/dist/alert'

// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from 'bootstrap'

import $ from "jquery";
import moment from "moment";
const api_key = "api_key=623353059db48f17ef551c106c4c2a4c";
const baseUrl = "https://api.themoviedb.org/3/";
const imgUrl = "https://image.tmdb.org/t/p/w500/";
const tmdbMovie = "https://www.themoviedb.org/movie/";
const formEl = document.querySelector(".card-body");
let page = 1;

function getImage(name)
{
  return imagesPath(`./${name}`).default;
}
const heroImg = getImage('hero.jpg');


// document.querySelector('.hero-img').innerHTML = `<img src="${heroImg}" alt="bkg" srcset="" width="400">`;
document.querySelector('.hero-img').src = heroImg;
