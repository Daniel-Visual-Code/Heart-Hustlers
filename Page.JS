'use strict';

const switcher = document.querySelector('.btn')

window.onscroll = function() {
  scrollFunctionUp();
};

function scrollFunctionUp() {
  var header = document.getElementById("Top");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}




window.onscroll = function() {
  scrollFunctionUp();
};

function scrollFunctionUp() {
  var header = document.getElementById("backround");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}













