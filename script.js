// show aside in small screens
const aside = document.getElementById("aside");
const icon = document.getElementById("show-aside");
const cl = document.getElementById("close-aside");

icon.addEventListener("click", () => {
    aside.style.display = "block";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
});
cl.addEventListener("click", () => {
    aside.style.display = "none";
    document.body.style.position = "initial";
    document.body.style.width = "auto";
});

