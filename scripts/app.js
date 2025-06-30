
//======================================//
//=========== HEADER CODE =============//
let headerCount = 1;
let headerImages = [
  'assets/images/header1.png',
  'assets/images/header2.png',
  'assets/images/header3.png',
  'assets/images/header4.png',
  'assets/images/header5.png',
  'assets/images/header6.png' 
]
let headerTimer = setInterval('setHeaderImage()', 8000);
let header = document.querySelector('header');
// gets a ref/copy to all the .thumb elements in the DOM
// AND is a collection/array!
let headerThumbnails = document.querySelectorAll('.thumb');

function setHeaderImage() {
  resetThumbs(); // resets thumbnails borders to white
  header.setAttribute('style', 
    'background: url(' + headerImages[headerCount] + 
    '); background-size: cover;');
  // sets the selected/timed thumbnail to red/active
  headerThumbnails[headerCount].setAttribute('class', 'thumb active');
  headerCount++; // adds 1 to the count
  if(headerCount > 5) { // check to see if we need to reset
    headerCount = 0;
  }
} // setHeaderImage()

function setImage(idx) {
  clearTimeout(headerTimer);  // resets/clears the timer
  headerTimer = setInterval('setHeaderImage()', 8000); // restarts timer
  headerCount = idx; // sets the headerCount to the selected index/thumbnail
  setHeaderImage(); // calls our setHeaderImage which changes the header image
} // setImage()

function resetThumbs() {
  // loops through all the thumbnails and resets the class
  // to thumb, making them all white or orig
  for(let i = 0; i < headerThumbnails.length; i++) {
    headerThumbnails[i].setAttribute('class', 'thumb');
  }
} // resetThumbs()



//=========================================//
//=========== LIGHTBOX CODE =============//
let lightboxOpen = false; // boolean
let lightBox = document.querySelector('#lightbox');
let lightboxImage = document.querySelector('#lightboxImage');

function toggleLightbox(imageSource, imageAltText) {
  if(!lightboxOpen) {
    lightbox.setAttribute('style', 'visibility: visible;');
    lightboxImage.setAttribute('src', imageSource);
    lightboxImage.setAttribute('alt', imageAltText);
  }
  else {
    lightbox.setAttribute('style', 'visibility: hidden');
  }
  lightboxOpen = !lightboxOpen;
} // toggleLightbox()



//============================//
//======= MENU CODE =========//
// boolean holds true or false
let menuOpen = false;

function toggleMenu(val) {
  if(val) {
    // do anything
    // called from the logo, false alarm
  }
  else {
    if(!menuOpen) { // open the menu
      $('#menu').animate({
        right: 0
      }, 420, 'swing');
    }
    else { // close the menu
      $('#menu').animate({
        right: -260
      }, 420, 'swing');
    }
    menuOpen = !menuOpen;
  }
} // toggleMenu()