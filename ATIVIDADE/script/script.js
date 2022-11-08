var hide = false;

document.querySelector(".hamburguer").addEventListener("click", () => {
    document.querySelector(".container-menu").classList.toggle("show-menu");
    var sidebar =  document.querySelector(".sidebar");
    if(hide == false){
    sidebar.style.right = "0rem";
    hide = true;
   }else{
    sidebar.style.right = "-20rem";
    hide = false;
   }
});