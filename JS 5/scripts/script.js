const firstCat = document.getElementById('cat1');
const secondCat = document.getElementById('cat2');
const thirdCat = document.getElementById('cat3');
const talkCat = document.querySelector('.cloud');
const secondTalkCat = document.querySelector('.cloud2');
const catContainer = document.querySelector('.container');
const firstCatSize = document.querySelector('#cat1-size');
const secondCatSize = document.querySelector('#cat2-size');
const thirdCatSize = document.querySelector('#cat3-size');
let deg = 0;

function kek() {
  setTimeout(() => {
    talkCat.classList.add('disable');
  }, 1000);
  talkCat.classList.remove('disable');
}

function dblkek() {
  setTimeout(() => {
    secondTalkCat.classList.add('disable');
  }, 500);
  secondTalkCat.classList.remove('disable');
}

function changeColor(event) {
  if (event.target.classList.contains('container')) {
    event.target.style.background = '#DDA0DD';
  } else if (event.target.parentNode.classList.contains('container')) {
    event.target.parentNode.style.background = '#DDA0DD';
  } else if (event.target.parentNode.parentNode.classList.contains('container')) {
    event.target.parentNode.parentNode.style.background = '#DDA0DD';
  }
}

function changeColorBack(event) {
  if (event.target.classList.contains('container')) {
    event.target.style.background = 'aquamarine';
  } else if (event.target.parentNode.classList.contains('container')) {
    event.target.parentNode.style.background = 'aquamarine';
  } else if (event.target.parentNode.parentNode.classList.contains('container')) {
    event.target.parentNode.parentNode.style.background = 'aquamarine';
  }
}

function changeSizeFirst() {
  const catContainer = document.querySelector('#cat1');
  catContainer.style.width = firstCatSize.value+'px';
}

function changeSizeSecond() {
  const catContainer = document.querySelector('#cat2');
  catContainer.style.width = secondCatSize.value+'px';
  catContainer.style.height = secondCatSize.value+'px';
}

function changeSizeThird() {
  const catContainer = document.querySelector('#cat3');
  catContainer.style.width = thirdCatSize.value+'px';
}

function rollCat() {
  secondCat.style.transform = 'rotate(' + deg + 'deg)';
  deg += 5;
}

window.addEventListener('load', () => {
  alert('Тут на первого кота можно тыкать, второй крутится, третий остался для красоты');
});

document.addEventListener('wheel', rollCat);

firstCatSize.addEventListener('input', changeSizeFirst);
secondCatSize.addEventListener('input', changeSizeSecond);
thirdCatSize.addEventListener('input', changeSizeThird);

firstCat.addEventListener('click', kek);
firstCat.addEventListener('dblclick', dblkek);

catContainer.addEventListener('mouseover', changeColor);
catContainer.addEventListener('mouseout', changeColorBack);

