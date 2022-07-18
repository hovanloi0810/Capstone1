function changeIcon() {
    var icon = document.getElementById("myBtn");
    icon.classList.toggle('gg-sun');
    icon.classList.toggle('gg-moon');
}

document.getElementById("btn-icon").onclick = function () {
    var bar = document.getElementById("icon-respon");
    bar.classList.toggle('fa-bars');
    bar.classList.toggle('fa-xmark');
}