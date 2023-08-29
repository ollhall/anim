 // Инициализация первой анимации
 const animationContainer1 = document.getElementById('animation-container1');
 const animData1 = {
   container: animationContainer1,
   renderer: 'svg',
   loop: true,
   autoplay: true,
   path: 'js/bankAnimationv2.json'
 };
 const anim1 = lottie.loadAnimation(animData1);

 // Инициализация второй анимации
 const animationContainer2 = document.getElementById('animation-container2');
 const animData2 = {
   container: animationContainer2,
   renderer: 'svg',
   loop: true,
   autoplay: true,
   path: 'js/neoBankv2.json'
 };
 const anim2 = lottie.loadAnimation(animData2);