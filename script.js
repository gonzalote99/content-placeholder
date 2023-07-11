const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
  header.innerHTML = 
  '<img src="https://source.unsplash.com/random/300X300" alt="" />'
  title.innerHTML = 'Headline'
  excerpt.innerHTML = 'lorem ipsum'
   profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/4.jpg" alt="" />'
   name.innerHTML = 'Harry Potter';
   date.innerHTML = "feb 05, 2020"

   animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
   animated_bg_texts.forEach((bg) => bg.classList.remove('animatd-bg-text'))
}