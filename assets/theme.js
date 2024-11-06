var prevScrollpos = window.scrollY;
window.onscroll = function () {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("homeHeader").style.top = "0";
  } else {
    document.getElementById("homeHeader").style.top = "-5rem";
  }
  prevScrollpos = currentScrollPos;
};

function switchPage(shown, a, b, c) {
  document.getElementById(shown).style.display = "block";
  document.getElementById(a).style.display = "none";
  document.getElementById(b).style.display = "none";
  document.getElementById(c).style.display = "none";
  return false;
}

function showPage(shown, a, b, c) {
  document.getElementById(shown).style.display = "block";
  document.getElementById(a).style.display = "block";
  document.getElementById(b).style.display = "block";
  document.getElementById(c).style.display = "block";
  return false;
}

function scrollthere(x) {
  var element = document.querySelector(x);

  element.scrollIntoView();
}
