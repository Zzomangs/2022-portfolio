let horizontalBar = document.getElementById("horizontal-underline");
let horizontalMenus = document.querySelectorAll("nav:first-child a");
let introduce = document.getElementById('introduce');
let profile = document.getElementById('profile');
let profileBody = document.getElementById('profile-body');



function horizontalIndicator(e) {
  horizontalBar.style.left = e.offsetLeft + "px";
  horizontalBar.style.width = e.offsetWidth + "px";
  horizontalBar.style.top = e.offsetTop + e.offsetHeight + "px";
}

horizontalMenus.forEach((menu) =>
  menu.addEventListener("click", (e) =>
    horizontalIndicator(e.currentTarget)
  )
);

profile.addEventListener('click', function() {
  introduce.classList.remove('show');
  profileBody.classList.add('show');
});