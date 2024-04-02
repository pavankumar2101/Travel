// function onclick () {
//     width: 300px;
//     height: 50px;
//     transform: scale(1.5);
// }
// onclick();
  
function navSlide(){
    const nav = document.querySelector(".navbar");
    const menu = document.querySelector(".nav-links2");
    const burger = document.querySelector(".burger");

    burger.addEventListener("click",()=>{

        menu.classList.toggle("nav-active");

    burger.classList.toggle("toggle")    

    })

}

navSlide();


// function change1()
// {
//     document.getElementById('img1').src="assets/image (8).png";
// }
// function change2()
// {
//     document.getElementById('img1').src="assets/image (9).png";
// }
// function change3()
// {
//     document.getElementById('img1').src="assets/image (10).png";
// }

// function change(){
//     const article = document.querySelector(".img1");
//     article.addEventListener("click",()=>{
//         menu.classList.toggle(".img1");
//         menu.classList.toggle("toggle")
//     })
// }
// change();

//onClick image

function change(element){
    element.classList.toggle("fullsize");

}