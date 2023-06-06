document.querySelector('.jumpUpBtn').addEventListener('click', jumpUpBtn);

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    document.getElementById('jumpUpBtn').style.display = 'flex';
  } else {
    document.getElementById('jumpUpBtn').style.display = 'none';
  }
}

export function jumpUpBtn() {
  document.body.scrollTo({ top: 0, behavior: 'smooth' });
  document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
}
