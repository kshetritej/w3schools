const menuIcon = document.querySelector(".ri-menu-3-fill");
const leftNavIcons = document.querySelector(".left-navitems ul");
const closeBtn = document.querySelector(".ri-close-fill");


menuIcon.addEventListener("click",() =>{
    leftNavIcons.style.cssText = `
    display: flex;
    padding:1rem 0.5rem;
    flex-direction: column;
    background-color: #000;
    color: black;
    position: absolute;
    top: 90px;
    right: 0px;
    `
    menuIcon.style.display = "none";
    closeBtn.style.display = "block";
})

closeBtn.addEventListener("click",() =>{
    leftNavIcons.style.display = "none";
    closeBtn.style.display = "none";
    menuIcon.style.display = "block";
})
