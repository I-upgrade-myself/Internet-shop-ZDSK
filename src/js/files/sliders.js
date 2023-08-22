/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Parallax, Autoplay, Thumbs } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
// import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

new Swiper('.image-slider', {
	modules: [Navigation, Thumbs,],

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	thumbs: {
		swiper: {
			el: '.image-mini-slider',
			slidesPerView: 7,
			breakpoints: {

				700: {
					slidesPerView: 7,	
				},
				590: {
					slidesPerView: 6.7,	
				},
				500: {
					slidesPerView: 6.5,	
				},
				400: {
					slidesPerView: 6.2,	
				},
				330: {
					slidesPerView: 6,	
				},
				320: {
					slidesPerView: 5.5,	
				},
			},
		},
	
	},
	speed: 80,
	watchOverflow: true, 
	slidesPerGroup: 1,
	initialSlide: 0,
	sliderPerColumn: 1,
	loop: false, 
	slidesPerView: 1,
	autoHeight: false,
	simulateTouch: true,
	touchAngle: 105,

});

