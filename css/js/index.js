
// document.querySelector('.burger').addEventListener('click', function(){
//     document.querySelector('.burger span').classList.toggle('active');
//   })

  let iconMenu = document.querySelector('.burger');
let menuBody = document.querySelector('.menu');

if (iconMenu){
    iconMenu.addEventListener('click', function (e){
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active')
    });    
}