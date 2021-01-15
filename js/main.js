
let open = document.getElementById('menu');
let burger = document.getElementById('toggle');

burger.onclick = function() {
  open.classList.toggle('open');
};

//////////////////////////////////


/*let onee = document.getElementById('product');
let twoo = document.getElementById('formInfo');

onee.onclick = function() {
  twoo.classList.add('active');
};*/


$('.shop-products-item').click(function(){
  $('.open-info').addClass('active');
})
$('.close').click(function(){
  $('.open-info').removeClass('active');
})

$('.header-nav-btn').click(function(){
  $('.popup').toggleClass('active-popup');
})
$('.main').click(function(){
  $('.popup').removeClass('active-popup');
})

