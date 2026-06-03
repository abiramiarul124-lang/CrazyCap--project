const checkbox = document.getElementById("menu-toggle");
const menu = document.querySelector(".navbar1");
const menuIcon = document.querySelector(".menu-icon");

document.addEventListener("click", function(e){
    console.log(checkbox.checked &&
        !menu.contains(e.target) &&
        !menuIcon.contains(e.target)    )
    if(
        checkbox.checked &&
        !menu.contains(e.target) &&
        !menuIcon.contains(e.target)
    ){
        checkbox.checked = false;
    }

});
document.querySelectorAll(".navbar1 span").forEach(item => {
    item.addEventListener("click", () => {
        document.getElementById("menu-toggle").checked = false;
    });
});