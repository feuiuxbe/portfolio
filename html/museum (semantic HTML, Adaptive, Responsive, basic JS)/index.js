// buttons

const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
   button.addEventListener('click', function (e) {
      const circle = document.createElement('span')
      circle.classList.add('circle')
      this.appendChild(circle)

      const maxValue = Math.max(this.clientWidth, this.clientHeight);

      const rect = this.getBoundingClientRect();
      circle.style.left = e.clientX - rect.left - (maxValue / 2) + 'px';
      circle.style.top = e.clientY - rect.top - (maxValue / 2) + 'px';

      setTimeout(() => circle.remove(), 500)
   })
})

// burger-menu

const burgerMenu = document.querySelector('.nav-burger');
const welcomeHeader = document.querySelector('.welcome h2');
const buttonDiscover = document.querySelector('.discover-button');
const welcomeSubtitleHeader = document.querySelector('.welcome .section-subtitle');

if (burgerMenu) {
   const menuBody = document.querySelector('.header__nav-container');
   burgerMenu.addEventListener('click', function () {
      document.body.classList.toggle('active');
      burgerMenu.classList.toggle('active');
      menuBody.classList.toggle('active');
      buttonDiscover.classList.toggle('active');
      welcomeHeader.classList.toggle('active');
      welcomeSubtitleHeader.classList.toggle('active');
   })

   menuBody.addEventListener('click', function (ev) {
      if (ev.target.closest('a')) {
         burgerMenu.classList.remove('active');
         menuBody.classList.remove('active');
         document.body.classList.remove('active');
         buttonDiscover.classList.remove('active');
         welcomeHeader.classList.remove('active');
         welcomeSubtitleHeader.classList.remove('active');
      }
      if (!ev.target.closest('.nav__body')) {
         burgerMenu.classList.remove('active');
         menuBody.classList.remove('active');
         document.body.classList.remove('active');
         buttonDiscover.classList.remove('active');
         welcomeHeader.classList.remove('active');
         welcomeSubtitleHeader.classList.remove('active');
      }
   })
}

// gallery explore

const gallery = document.querySelector('.gallery');
const galleryResize = document.querySelector('.gallery__resize');

gallery.addEventListener('mousemove', (ev) => {
   let x = ev.offsetX;
   galleryResize.style.width = x + 'px';
   galleryResize.classList.remove('tr');
})

gallery.addEventListener('mouseleave', (ev) => {
   galleryResize.style.width = 440 + 'px';
   galleryResize.classList.add('tr');
})

// gallery random

let arr = [];
for (let i = 1; i < 16; i++) {
   arr.push(i)
}

function shuffle(arr) {
   arr.sort(() => Math.random() - 0.5);
}

shuffle(arr);

const column1 = document.querySelector('.column1')
const column2 = document.querySelector('.column2')
const column3 = document.querySelector('.column3')

arr.map((item, index) => {
   const img = document.createElement('img');
   if (index < 6) {
      img.classList.add('gallery-img');
      img.src = `assets/img/galery/galery${item}.jpg`;
      img.alt = `galery${item}`;
      column1.append(img);
   } else if (index < 11 && index > 5) {
      img.classList.add('gallery-img');
      img.src = `assets/img/galery/galery${item}.jpg`;
      img.alt = `galery${item}`;
      column2.append(img);
   } else if (index < 16 && index > 10) {
      img.classList.add('gallery-img');
      img.src = `assets/img/galery/galery${item}.jpg`;
      img.alt = `galery${item}`;
      column3.append(img);
   }


   // const img = document.createElement('img');
   // img.classList.add('gallery-img');
   // img.src = `assets/img/galery/galery${item}.jpg`;
   // img.alt = `galery${item}`;
   // pictureInnerContainer.append(img);
})

// modal form

const popupBtn = document.querySelector('.buy');
const body = document.querySelector('body');

const currentPopup = document.querySelector('.popup');
popupBtn.addEventListener('click', function () {
   currentPopup.classList.add('open');
   body.classList.add('open');
})

const popupClose = document.querySelector('.close-popup');
popupClose.addEventListener('click', function () {
   currentPopup.classList.remove('open');
   body.classList.remove('open');
})

currentPopup.addEventListener('click', function (e) {
   if (!e.target.closest('.popup__content')) {
      currentPopup.classList.remove('open');
      body.classList.remove('open');
   }
})

// video sliders

const progress = document.querySelectorAll('.video__progress');

for (let key of progress) {
      key.addEventListener('input', function () {
            const value = this.value;
            this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
      })
}

// video-player

let video = document.querySelector('#video-player');
const play = document.querySelector('#play');
const play2 = document.querySelector('#play2');
const pause = document.querySelector('#stop');
document.querySelector('#sound').oninput = volumeVideo;
let videoProgress = document.querySelector('.play');

const iconSoundYes = document.querySelector('#sound-yes');
const iconSoundNo = document.querySelector('#sound-none');
const soundThumb = document.querySelector('#sound');

function playVideo() {
   video.play();
   play.style.display = 'none';
   play2.style.display = 'none';
   pause.style.display = 'block';
}

function pauseVideo() {
   video.pause();
   play.style.display = 'block';
   play2.style.display = 'block';
   pause.style.display = 'none';
}

function volumeVideo() {
   let v = this.value;
   video.volume = v / 100;

   if (v == 0) {
      iconSoundYes.style.display = 'none';
      iconSoundNo.style.display = 'block';
   } else {
      iconSoundYes.style.display = 'block';
      iconSoundNo.style.display = 'none';
   }
}

iconSoundYes.addEventListener('click', function () {
   iconSoundYes.style.display = 'none';
   iconSoundNo.style.display = 'block';
   video.volume = 0;
   soundThumb.value = 0;
   soundThumb.style.background = `linear-gradient(to right, #710707 0%, #710707 ${0}%, #C4C4C4 ${0}%, #C4C4C4 100%)`;
})

function progressVideo() {
   let d = video.duration;
   let c = video.currentTime;
   let thumb = (100 * c) / d;

   videoProgress.style.background = `linear-gradient(to right, #710707 0%, #710707 ${thumb}%, #C4C4C4 ${thumb}%, #C4C4C4 100%)`;
   videoProgress.value = thumb;
}

function rewindVideo(event) {
   let w = this.offsetWidth;
   let o = event.offsetX;

   video.pause();
   video.currentTime = video.duration * o / w;
   video.play();
   play.style.display = 'none';
   play2.style.display = 'none';
   pause.style.display = 'block';
}

play.addEventListener('click', playVideo);
play2.addEventListener('click', playVideo);
pause.addEventListener('click', pauseVideo);
videoProgress.addEventListener('click', rewindVideo)
video.ontimeupdate = progressVideo;

const fullscreenBtn = document.querySelector('#fullscreen-open');
const fullscreen = document.querySelector('.fullscreen');
const fullscreenOpen = document.querySelector('.fullscreen-open');
const fullscreenClose = document.querySelector('.fullscreen-close');
const videoBlock = document.querySelector('.video__img-block');

function fullscreenVideo() {
   fullscreenOpen.classList.toggle('fullscreen-hidden');
   fullscreenClose.classList.toggle('fullscreen-hidden');
   video.classList.toggle('full');
   videoBlock.classList.toggle('full');

   if (document.fullscreenElement === null) {
      fullscreen.requestFullscreen();
   } else if (document.fullscreenEnabled) {
      document.exitFullscreen();
      video.classList.remove('full');
      videoBlock.classList.remove('full');
   }
}

fullscreenBtn.addEventListener('click', fullscreenVideo);