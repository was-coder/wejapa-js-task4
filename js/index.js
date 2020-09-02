/*Start of JS for button toggling*/
const collapseBtn = document.querySelector('.collapse-btn');
const hamburger = document.querySelector('.collapse-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');

let showMenu = false;

collapseBtn.addEventListener('click', toggleMenu);

function toggleMenu () {
    if (!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));
        showMenu = true;
    }
    else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));
        showMenu = false;
    }
};
/*End of JS for button toggling*/


shortenBtn = document.getElementById("shortenBtn");
shorten = document.getElementById("shorten");
link = document.getElementById("link-holder");
error = document.getElementById("error");
copy = document.getElementById("copy");

shortenBtn.addEventListener("click", (e) => {
    e.preventDefault();
    var url = shorten.value;
    
    axios.post("https://rel.ink/api/links/", {
        url: url
    }).then(function(e) {
        const hashId = e.data.hashid;
        const shortUrl = "https://rel.ink/" + hashId;
        $('.display-link').prepend('<div class="short-section" id="section"><p class="short-section-url mt-2">' + shortUrl + '</p><button id="btnCopy" class="active square text-capitalize">copy</button></div><br>');
                $("#btnCopy").on("click", function () {
                    navigator.clipboard.writeText(shortUrl); //Copy text to clipboard using chrome API
                    $("#btnCopy").addClass("copy");
                    $("#btnCopy").removeClass("active");
                    $("#btnCopy").text("Copied!");
                });
        shorten.focus();

    }).catch(function(err) {
        error.innerHTML = "Input a link starting with https://";
    });
})