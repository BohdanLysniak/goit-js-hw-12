import { getImage } from "./js/pixabay-api"
import { renderImages } from "./js/render-functions";
import { card } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
export const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

export const preloader = document.querySelector(".loader");
const form = document.querySelector(".search-form");
const buttonLoadMore = document.querySelector(".btn-load-more")

function showLoader() {
  preloader.classList.remove("is-hidden")
};
export function hideLoader() {
  preloader.classList.add("is-hidden")
};

function showLoadMore() { 
  buttonLoadMore.classList.remove("is-hidden");
};
function hideLoadMore() {
  buttonLoadMore.classList.add("is-hidden")
};

let inputValue;
let currentPage = 1;
let maxPage = 0;
const perPage = 15;

form.addEventListener("submit", sendForm);

async function sendForm(event) {
  event.preventDefault();
  showLoader();
  card.innerHTML = "";
  currentPage = 1;
  const inputValue = event.target.elements.search.value.trim();
  if (inputValue !== "") {
    try {
    const data = await getImage(inputValue, currentPage);
    maxPage = Math.ceil(data.totalHits / perPage)
    renderImages(data.hits);
    } catch (error) {
      iziToast.error({
      message: 'Sorry, an error occurred while loading. Please try again!',
      theme: 'dark',
      progressBarColor: '#FFFFFF',
      color: '#EF4040',
      position: 'topRight',
    })
  }
  } else {
    iziToast.show({
      message: 'Please complete the field!',
      theme: 'dark',
      progressBarColor: '#FFFFFF',
      color: '#EF4040',
      position: 'topRight',
    });
  };
  hideLoader();
  form.reset();
  checkButtonStatus();
};

buttonLoadMore.addEventListener("click", onLoadMore);

async function onLoadMore() {
  currentPage += 1;
  showLoader();
  const data = await getImage(inputValue, currentPage);
  renderImages(data.hits);
  hideLoader();
  checkButtonStatus();
}

function checkButtonStatus() {
  if (currentPage >= maxPage) {
    hideLoadMore()
  } else {
  showLoadMore();
  }
};


