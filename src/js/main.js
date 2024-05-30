// Import our custom CSS
import '../scss/styles.scss'

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

