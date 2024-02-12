document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const body = document.querySelector("body");
const sliderCircle = document.querySelector(".slider .circle ");
const slider = document.querySelector("input[type='checkbox']");

slider.addEventListener('change', choseTheme)

const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
if (systemSettingDark.matches) darkTheme();

/* Theme switch functions */
function choseTheme() {
    if (slider.checked) {
        darkTheme();
    } else {
        lightTheme();
    }
}
function lightTheme() { 
        slider.checked = false;
        document.body.classList.remove("dark");
}
function darkTheme() {
        slider.checked = true;
        document.body.classList.add("dark");
}