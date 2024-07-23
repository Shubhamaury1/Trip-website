let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn =>{
    btn.onclick = () =>{
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .video-container .video').src = src;
    }
})


const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);



$(document).ready(function(){
  $('.customer-logos').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 1500,
  arrows: true,
  dots: false,
  pauseOnHover: false,
  prevArrow: '<i class="slick-prev fas fa-angle-left"></i>',
  nextArrow: '<i class="slick-next fas fa-angle-right"></i>',
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 520,
    settings: {
      slidesToShow: 2
    }
  }]
  });
});

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 100) {
    $("#toTop").fadeIn();
  } else {
    $("#toTop").fadeOut();
  }
});

$(document).on("click", "#toTop", function () {
  $("html, body").animate({ scrollTop: 0 }, 500);
});

let items = document.querySelectorAll(".item"),
	viewer = document.querySelector(".viewer img");
document.querySelector(".viewer .close").onclick = () => {
	document.querySelector("body").classList.toggle("overlayed");
};
items.forEach((item) => {
	item.onclick = () => {
		let content = item.querySelector(".img img");
		viewer.setAttribute("src", content.getAttribute("src"));
		document.querySelector(".viewer .alt").innerHTML = item.querySelector(
			".title"
		).innerHTML;
		document.querySelector("body").classList.toggle("overlayed");
	};
});

["load", "scroll"].forEach((eventName) => {
	window.addEventListener(eventName, (event) => {
		document.querySelectorAll(".fluid-container").forEach((item) => {
			if (isScrolledIntoView(item)) {
				item.classList.add("inScreen");
			} else {
				item.classList.remove("inScreen");
			}
		});
	});
});
function isScrolledIntoView(el) {
	let rect = el.getBoundingClientRect();
	let elemTop = rect.top;
	let elemBottom = rect.bottom;
	let isVisible = elemTop >= -300 && elemBottom <= screen.height + 300;
	return isVisible;
}

