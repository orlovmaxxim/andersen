<!DOCTYPE html>
<html>
	<head>
		<title>ЖК «Андерсен»
		</title>
		<meta content="" name="autor">
		<meta content="" name="description">
		<meta content="" name="keywords">
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<meta content="width=device-width, initial-scale=1" name="viewport">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<link rel="stylesheet" href="fonts/stylesheet.css">
		<link rel="stylesheet" href="css/style.css">
		<link rel="stylesheet" href="css/plugins.main.min.css">
		<script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script><!--[if lt IE 9]>
		<script src="http://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script><![endif]-->
		<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
		<link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32">
		<link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16">
		<link rel="manifest" href="/manifest.json">
		<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5b93d5">
		<meta name="msapplication-TileColor" content="#ffffff">
		<meta name="msapplication-TileImage" content="/mstile-144x144.png">
		<meta name="theme-color" content="#ffffff">
		<script>
(function(w, d, s, h, id) {
    w.roistatProjectId = id; w.roistatHost = h;
    var p = d.location.protocol == "https:" ? "https://" : "http://";
    var u = /^.*roistat_visit=[^;]+(.*)?$/.test(d.cookie) ? "/dist/module.js" : "/api/site/1.0/"+id+"/init";
    var js = d.createElement(s); js.async = 1; js.src = p+h+u; var js2 = d.getElementsByTagName(s)[0]; js2.parentNode.insertBefore(js, js2);
})(window, document, 'script', 'cloud.roistat.com', 'fc462447e52d7deadddc184c8a4e5865');
</script>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-85537243-40', 'auto');
  ga('require', 'linkid', 'linkid.js');   ga для Андерсена 
  ga('require', 'displayfeatures');
  ga('send', 'pageview');

</script>
	</head>
	<body>
	<?
	$class = 'roistat-phone';
	$phone = '8 800 2000 600';
	$utm = $_REQUEST['utm_source'];
	if($utm){
		if($utm == 'vk' || $utm == 'target_vk'){
			$phone = '8 (861) 205-68-62';
			$class = '';
		}
		elseif($utm == 'ok' || $utm == 'target_ok'){
			$phone = '8 (861) 205-68-63';
			$class = '';
		}
		elseif($utm == 'fb' || $utm == 'target_fb'){
			$phone = '8 (861) 205-68-64';
			$class = '';
		}
		elseif($utm == 'ig' || $utm == 'target_ig'){
			$phone = '8 (861) 205-68-65';
			$class = '';
		}
	}
	?>
		<div class="wrapper">
			<div class="maincontent">
				<header class="header">
					<div class="header__shader"></div>
					<div class="header__background"></div>
					<div class="container-main">
						<div class="header__desktop">
							<div class="header__left"><a class="logo" href="#"><img class="logo__img" alt="andersen logo" src="img/logo.png"></a>
								<nav class="navigation">
									<ul class="navigation__list">
										<li class="navigation__item"><a class="navigation__link" href="#fotogal">Фотогалерея</a></li>
										<li class="navigation__item"><a class="navigation__link" href="#prices">Планировки и цены</a></li>
										<li class="navigation__item"><a class="navigation__link" href="#buy">Способы покупки</a></li>
										<li class="navigation__item"><a class="navigation__link" href="#contacts">Контакты</a></li>
									</ul>
								</nav>
							</div>
							<div class="header__right">
								<div class="call">
									<div class="call__number <?=$class?>"><?=$phone?></div><a class="call__btn" href="#">
										<div class="call__view">Заказать звонок</div></a>
								</div>
							</div>
						</div>
						<div class="header__mobile">
							<div class="header__left">
								<div class="header__burg">
									<div class="burger"></div>
								</div><a class="logo logo_min" href="#"><img class="logo__img" alt="andersen logo" src="img/logo.png"></a>
							</div>
							<div class="header__right">
								<div class="call">
									<div class="call__number <?=$class?>"><?=$phone?></div><a class="call__btn" href="#">
										<div class="call__view">Заказать звонок</div></a>
								</div>
								<div class="mobile-call"></div>
							</div>
						</div>
						<nav class="mobile-navigation">
							<ul class="mobile-navigation__list">
								<li class="mobile-navigation__item"><a class="mobile-navigation__link" href="#fotogal">Фотогалерея</a></li>
								<li class="mobile-navigation__item"><a class="mobile-navigation__link" href="#prices">Планировки и цены</a></li>
								<li class="mobile-navigation__item"><a class="mobile-navigation__link" href="#buy">Способы покупки</a></li>
								<li class="mobile-navigation__item"><a class="mobile-navigation__link" href="#contacts">Контакты</a></li>
							</ul>
						</nav>
					</div>
				</header>
				<div class="container">
					<section class="picblock">
						<div class="picblock__bg"></div>
						<div class="picblock__advertise-container">
							<div class="container-main">
								<!--include ../_includes/_callform-->
								<div class="advertise-block">
									<div class="advertise-block__title">ЖК &laquoАндерсен&raquo</div>
									<div class="advertise-block__paragraph">Красивая архитектура, дубовая аллея, двор без машин и всего от</div>
									<div class="advertise-block__paragraph advertise-block__paragraph_fsize-big"><span>1 280</span> тыс. руб.</div>
								</div>
							</div>
						</div>
					</section>
					<section class="slider" id="fotogal">
						<div class="caption-block">
							<h2 class="caption-block__title">ЖК &laquoАндерсен&raquo не такой, как все дома в округе</h2>
						</div>
						<div class="swiper-container">
							<div class="swiper-wrapper">
								<div class="swiper-slide"><img class="swiper-lazy slide-pic" data-src="/img/dvor-1.jpg">
									<div class="swiper-lazy-preloader"></div>
								</div>
								<div class="swiper-slide"><img class="swiper-lazy slide-pic" data-src="/img/view-house.jpg">
									<div class="swiper-lazy-preloader"></div>
								</div>
								<div class="swiper-slide"><img class="swiper-lazy slide-pic" data-src="/img/night.jpg">
									<div class="swiper-lazy-preloader"></div>
								</div>
							</div>
							<div class="swiper-button-prev" id="swip-left"></div>
							<div class="swiper-button-next" id="swip-right"></div>
						</div>
					</section>
					<section class="picblock-secondary-zero">
						<div class="pickblock-view">
							<div class="caption-block">
								<h2 class="caption-block__title">Собственная дубовая аллея</h2>
							</div>
						</div>
					</section>
					<section class="picblock-secondary">
						<div class="infomore-block">
							<div class="infomore-block__title">
								<h2>Двухуровневые пентхаусы</h2>
							</div>
							<div class="infomore-block__desc">
								<p>с выходом на террасу и панорманым остеклением</p>
							</div>
							<div class="infomore-block__desc infomore-block__desc_fsize-big">
								<p>от <span>2 700 000</span> руб.</p>
							</div><a class="infomore-block__btn" href="#">Узнать подробнее</a>
						</div>
					</section>
				</div>
				<section class="infoblock">
					<div class="container-main">
						<h2 class="title title_color-blue">Поблизости расположены</h2>
						<div class="nearplaces">
							<ul class="nearplaces__list">
								<li class="nearplaces__item">
									<div class="nearplace">
										<div class="nearplace__pic"><img class="nearplace__img" src="/img/school.jpg" alt="near-pic-1"></div>
										<div class="nearplace__preview">
											<p>3 Школы</p><span>5 минут пешком</span>
										</div>
									</div>
								</li>
								<li class="nearplaces__item">
									<div class="nearplace">
										<div class="nearplace__pic"><img class="nearplace__img" src="/img/advantages/kindergarten.jpg" alt="near-pic-2"></div>
										<div class="nearplace__preview">
											<p>3 детских сада</p><span>7 минут пешком</span>
										</div>
									</div>
								</li>
								<li class="nearplaces__item">
									<div class="nearplace">
										<div class="nearplace__pic"><img class="nearplace__img" src="/img/advantages/bus.jpg" alt="near-pic-3"></div>
										<div class="nearplace__preview">
											<p>Остановка в 30 метрах</p><span>Маршруты в любую точку города</span>
										</div>
									</div>
								</li>
								<li class="nearplaces__item">
									<div class="nearplace">
										<div class="nearplace__pic"><img class="nearplace__img" src="/img/advantages/shops.jpg" alt="near-pic-4"></div>
										<div class="nearplace__preview">
											<p>Много магазинов</p><span>Ближайший во дворе</span>
										</div>
									</div>
								</li>
								<li class="nearplaces__item">
									<div class="nearplace">
										<div class="nearplace__pic"><img class="nearplace__img" src="/img/advantages/stadium.jpg" alt="near-pic-4"></div>
										<div class="nearplace__preview">
											<p>Стадион «Краснодар»</p>
										</div>
									</div>
								</li>
								<li class="nearplaces__item">
									<div class="nearplace">
										<div class="nearplace__pic"><img class="nearplace__img" src="/img/advantages/pool.jpg" alt="near-pic-4"></div>
										<div class="nearplace__preview">
											<p>Спорткомплекс с бассейном</p>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</section>
				<section class="infoblock">
					<div class="container-main">
						<h2 class="title title_color-blue">Во дворе жилого комплекса</h2>
						<div class="liquid-blocks">
							<div class="liq-block">
								<div class="liq-block__text">
									<h2>Нет машин</h2>
									<p>Парковочные места расположены по периметру - мест зватит всем</p>
								</div>
							</div>
							<div class="liq-block liq-block_size-small alcove">
								<div class="liq-block__text">
									<h2>Красивая зелёная зона с беседками</h2>
								</div>
							</div>
						</div>
						<div class="liquid-blocks">
							<div class="liq-block liq-block_size-small">
								<div class="liq-block__text">
									<h2>Арка с выходом в дубовую аллею</h2>
								</div>
							</div>
							<div class="liq-block">
								<div class="liq-block__text">
									<h2>Детские и спортивные площадки</h2>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class="infoblock">
					<div class="container-main">
						<h2 class="title title_color-blue">Планировки и цены квартир</h2>
						<div class="planing-block" id="prices">
							<div class="planing-block__nav">
								<div class="planing-block__list" id="filters">
									<!--button.planing-block__btn(data-filter="*") Все-->
									<!--button.planing-block__btn(data-filter=".one") 1 комнатные-->
									<!--button.planing-block__btn(data-filter=".two") 2 комнатные-->
									<!--button.planing-block__btn(data-filter=".three") 3 комнатные-->
									<!--button.planing-block__btn(data-filter=".four") 4 комнатные-->
									<!--button.planing-block__btn(data-filter=".penthaus") Пентхаусы-->
									<li class="planing-block__item">
										<div class="planing-block__btn" id="all" data-filter="*">Все</div>
									</li>
									<li class="planing-block__item">
										<div class="planing-block__btn" id="one" data-filter=".one">1 комнатные</div>
									</li>
									<li class="planing-block__item">
										<div class="planing-block__btn" id="two" data-filter=".two">2 комнатные</div>
									</li>
									<li class="planing-block__item">
										<div class="planing-block__btn" id="three" data-filter=".three">3 комнатные</div>
									</li>
									<li class="planing-block__item">
										<div class="planing-block__btn" id="four" data-filter=".four">4 комнатные</div>
									</li>
									<li class="planing-block__item">
										<div class="planing-block__btn" id="penthaus" data-filter=".penthaus">Пентхаусы</div>
									</li>
								</div>
							</div>
							<div class="planing-view wp-project-wrapper">
								<ul class="planing-view__list grid">
									<li class="wp-project planing-view__item disp one" data-category="one">
										<div class="view">
											<h2 class="view__title">Однокомнатная квартира</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 2, 2-8 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/oneroom/30-03.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 30,03 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 10,31 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
									<li class="wp-project planing-view__item disp one" data-category="one">
										<div class="view">
											<h2 class="view__title">Однокомнатная квартира</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 1, 2-8 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/oneroom/30-45.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 30,45 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 11,48 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
									<li class="wp-project planing-view__item disp one" data-category="one">
										<div class="view">
											<h2 class="view__title">Однокомнатная квартира</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 2, 2-8 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/oneroom/30-98.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 30,98 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 8,65 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
									<li class="wp-project planing-view__item disp one" data-category="one">
										<div class="view">
											<h2 class="view__title">Однокомнатная квартира</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 2, 2-8 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/oneroom/30-98-2.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 30,98 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 8,65 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
									<li class="wp-project planing-view__item disp one" data-category="one">
										<div class="view">
											<h2 class="view__title">Однокомнатная квартира</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 1, 2-8 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/oneroom/31-27.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 31,27 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 12,01 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
									<li class="wp-project planing-view__item disp one" data-category="one">
										<div class="view">
											<h2 class="view__title">Однокомнатная квартира</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 1, 2-8 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/oneroom/32-65.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 32,65 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 13,11 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
									<li class="wp-project planing-view__item disp one" data-category="one">
										<div class="view">
											<h2 class="view__title">Однокомнатная квартира</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 1, 2-8 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/oneroom/33-33.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 33,33 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 9,44 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
									<li class="wp-project planing-view__item disp one" data-category="one">
										<div class="view">
											<h2 class="view__title">Однокомнатная квартира</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 1, 2-8 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/oneroom/34-94.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 34,94 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 13,11 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
									<li class="wp-project planing-view__item disp one" data-category="one">
										<div class="view">
											<h2 class="view__title">Однокомнатная квартира</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 1, 2-8 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/oneroom/34-98.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 34,98 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 11,55 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
									<li class="wp-project planing-view__item disp one" data-category="one">
										<div class="view">
											<h2 class="view__title">Однокомнатная квартира</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 2, 2-8 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/oneroom/37-27.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 37,27 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 15,29 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
									<li class="wp-project planing-view__item disp one" data-category="one">
										<div class="view">
											<h2 class="view__title">Однокомнатная квартира</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 2, 2-8 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/oneroom/38-70.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 38,70 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 14,28 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
									<li class="wp-project planing-view__item disp one" data-category="one">
										<div class="view">
											<h2 class="view__title">Однокомнатная квартира</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 2, 2-8 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/oneroom/40-17.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 40,17 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 12,20 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
									<li class="wp-project planing-view__item disp two" data-category="two">
										<div class="view">
											<h2 class="view__title">Двухкомнатная квартира</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 1, 2-8 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/tworoom/49-89.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 49,89 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 21,96 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
									<li class="wp-project planing-view__item disp two" data-category="two">
										<div class="view">
											<h2 class="view__title">Двухкомнатная квартира</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 4, 2-8 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/tworoom/50-10.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 50,10 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 21,66 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
									<li class="wp-project planing-view__item disp two" data-category="two">
										<div class="view">
											<h2 class="view__title">Двухкомнатная квартира</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 2, 2-8 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/tworoom/52-00.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 52,00 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 26,71 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
									<li class="wp-project planing-view__item disp two" data-category="two">
										<div class="view">
											<h2 class="view__title">Двухкомнатная квартира</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 2, 2-8 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/tworoom/55-73.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 55,73 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 26,91 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
									<li class="wp-project planing-view__item disp two" data-category="two">
										<div class="view">
											<h2 class="view__title">Двухкомнатная квартира</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 2, 2-8 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/tworoom/55-73-2.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 55,73 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 26,91 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
									<li class="wp-project planing-view__item disp two" data-category="two">
										<div class="view">
											<h2 class="view__title">Двухкомнатная квартира</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 2, 9-10 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/tworoom/65-32.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 65,32 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 25,72 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
									<li class="wp-project planing-view__item disp three" data-category="three">
										<div class="view">
											<h2 class="view__title">Трёхкомнатная квартира</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 2, 9-10 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/threeroom/56-50.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 56,50 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 25,49 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
									<li class="wp-project planing-view__item disp three" data-category="three">
										<div class="view">
											<h2 class="view__title">Трёхкомнатная квартира</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 4, 9-10 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/threeroom/56-80.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 56,80 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 29,18 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
									<li class="wp-project planing-view__item disp three" data-category="three">
										<div class="view">
											<h2 class="view__title">Трёхкомнатная квартира</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 4, 9-10 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/threeroom/57-34.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 57,34 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 29,21 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
									<li class="wp-project planing-view__item disp three" data-category="three">
										<div class="view">
											<h2 class="view__title">Трёхкомнатная квартира</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 1, 9-10 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/threeroom/60-74.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 60,74 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 34,07 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
									<li class="wp-project planing-view__item disp three" data-category="three">
										<div class="view">
											<h2 class="view__title">Трёхкомнатная квартира</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 1, 9-10 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/threeroom/61-61.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 61,61 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 34,21 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
									<li class="wp-project planing-view__item disp three" data-category="three">
										<div class="view">
											<h2 class="view__title">Трёхкомнатная квартира</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 1, 9-10 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/threeroom/64-77.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 64,77 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 38,39 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
									<li class="wp-project planing-view__item disp three" data-category="three">
										<div class="view">
											<h2 class="view__title">Трёхкомнатная квартира</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 1, 9-10 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/threeroom/75-20.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 75,20 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 39,77 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
									<li class="wp-project planing-view__item disp three" data-category="three">
										<div class="view">
											<h2 class="view__title">Трёхкомнатная квартира</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 3, 9-10 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/threeroom/75-93.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 75,93 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 37,82 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
									<li class="wp-project planing-view__item disp three" data-category="three">
										<div class="view">
											<h2 class="view__title">Трёхкомнатная квартира</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 3, 9-10 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/threeroom/76-21.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 76,21 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 36,88 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
									<li class="wp-project planing-view__item disp three" data-category="three">
										<div class="view">
											<h2 class="view__title">Трёхкомнатная квартира</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 3, 9-10 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/threeroom/84-05.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 84,05 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 40,14 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
									<li class="wp-project planing-view__item disp three" data-category="three">
										<div class="view">
											<h2 class="view__title">Трёхкомнатная квартира</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 1, 9-10 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/threeroom/87-12.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 87,12 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 35,26 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
									<li class="wp-project planing-view__item disp three" data-category="three">
										<div class="view">
											<h2 class="view__title">Трёхкомнатная квартира</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 3, 9-10 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/threeroom/100-68.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 100,68 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 41,48 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
									<li class="wp-project planing-view__item disp four" data-category="four">
										<div class="view">
											<h2 class="view__title">Четырёхкомнатная квартира</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 2, 9-10 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/fourroom/77-10.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 77,10 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 46,26 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
									<li class="wp-project planing-view__item disp four" data-category="four">
										<div class="view">
											<h2 class="view__title">Четырёхкомнатная квартира</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 3, 9-10 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/fourroom/92-88.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 92,88 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 43,43 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
									<li class="wp-project planing-view__item disp four" data-category="four">
										<div class="view">
											<h2 class="view__title">Четырёхкомнатная квартира</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 2, 9-10 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/fourroom/77-10-2.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 77,10 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 46,26 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
									<li class="wp-project planing-view__item disp penthaus" data-category="penthaus">
										<div class="view">
											<h2 class="view__title">Пентхаус</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 2, 9-10 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/penthaus/56-50.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 56,50 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 25,49 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
									<li class="wp-project planing-view__item disp penthaus" data-category="penthaus">
										<div class="view">
											<h2 class="view__title">Пентхаус</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 1, 9-10 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/penthaus/60-74.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 60,74 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 34,07 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
									<li class="wp-project planing-view__item disp penthaus" data-category="penthaus">
										<div class="view">
											<h2 class="view__title">Пентхаус</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 1, 9-10 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/penthaus/61-61.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 61,61 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 34,21 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
									<li class="wp-project planing-view__item disp penthaus" data-category="penthaus">
										<div class="view">
											<h2 class="view__title">Пентхаус</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 1, 9-10 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/penthaus/64-77.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 64,77 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 38,93 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
									<li class="wp-project planing-view__item disp penthaus two" data-category="penthaus two">
										<div class="view">
											<h2 class="view__title">Пентхаус</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 2, 9-10 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/penthaus/65-32.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 65,32 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 25,72 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
									<li class="wp-project planing-view__item disp penthaus" data-category="penthaus">
										<div class="view">
											<h2 class="view__title">Пентхаус</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 1, 9-10 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/penthaus/75-20.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 75,20 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 39,77 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
									<li class="wp-project planing-view__item disp penthaus" data-category="penthaus">
										<div class="view">
											<h2 class="view__title">Пентхаус</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 3, 9-10 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/penthaus/75-93.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 75,93 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 37,82 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
									<li class="wp-project planing-view__item disp penthaus" data-category="penthaus">
										<div class="view">
											<h2 class="view__title">Пентхаус</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 3, 9-10 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/penthaus/76-21.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 76,21 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 36,88 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
									<li class="wp-project planing-view__item disp penthaus" data-category="penthaus">
										<div class="view">
											<h2 class="view__title">Пентхаус</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 2, 9-10 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/penthaus/77-10.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 77,10 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 46,26 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
									<li class="wp-project planing-view__item disp penthaus" data-category="penthaus">
										<div class="view">
											<h2 class="view__title">Пентхаус</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 3, 9-10 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/penthaus/84-05.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 84,05 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 40,14 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
									<li class="wp-project planing-view__item disp penthaus" data-category="penthaus">
										<div class="view">
											<h2 class="view__title">Пентхаус</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 1, 9-10 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/penthaus/87-12.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 87,12 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 35,26 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
									<li class="wp-project planing-view__item disp penthaus" data-category="penthaus">
										<div class="view">
											<h2 class="view__title">Пентхаус</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 3, 9-10 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/penthaus/92-88.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 92,88 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 43,43 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
									<li class="wp-project planing-view__item disp penthaus" data-category="penthaus">
										<div class="view">
											<h2 class="view__title">Пентхаус</h2>
											<h3 class="view__title_hidden" hidden="true">Подъезд 3, 9-10 этаж</h3>
											<div class="view__pic"><img class="view__img" src="/img/apartments/penthaus/100-68.png" id="chromeimg"></div>
											<div class="view__info">
												<p class="view__parag view__parag_all">Общая площадь: 100,68 м2</p>
											</div>
											<div class="view__info">
												<p class="view__parag view__parag_live">Жилая площадь: 41,48 м2</p>
											</div><a class="view__btn" href="#">Узнать стоимость</a>
										</div>
									</li>
								</ul>
							</div>
							<div class="moreContainer"><a class="moreBtn" href="#">Показать больше планировок</a></div>
						</div>
					</div>
				</section>
				<div class="allwidth-block allwidth-block_bg solid">
					<div class="container-main">
						<h2 class="title">Получите подборку свободных квартир с ценами и планировками</h2>
						<h3 class="subtitle">Высылаем в течение 5 минут</h3>
						<div class="freeform-wrap">
							<form class="freeform" id="free-form" role="form" action="email.php" method="post">
								<div class="suc-alert"></div>
								<div class="error-alert"></div>
								<div class="freeform-cont">
									<div class="freeform__block-change">
										<ul class="checkboxs__list">
											<li class="checkboxs__item">
												<input class="checkbox" type="checkbox" id="checkbox-ten" name="floorselect[]" data-name="10" value="10">
												<label for="checkbox-ten">10</label>
											</li>
											<li class="checkboxs__item">
												<input class="checkbox" type="checkbox" id="checkbox-nine" name="floorselect[]" data-name="9" value="9">
												<label for="checkbox-nine">9</label>
											</li>
											<li class="checkboxs__item">
												<input class="checkbox" type="checkbox" id="checkbox-eight" name="floorselect[]" data-name="8" value="8">
												<label for="checkbox-eight">8</label>
											</li>
											<li class="checkboxs__item">
												<input class="checkbox" type="checkbox" id="checkbox-seven" name="floorselect[]" data-name="7" value="7">
												<label for="checkbox-seven">7</label>
											</li>
											<li class="checkboxs__item">
												<input class="checkbox" type="checkbox" id="checkbox-six" name="floorselect[]" data-name="6" value="6">
												<label for="checkbox-six">6</label>
											</li>
											<li class="checkboxs__item">
												<input class="checkbox" type="checkbox" id="checkbox-five" name="floorselect[]" data-name="5" value="5">
												<label for="checkbox-five">5</label>
											</li>
											<li class="checkboxs__item">
												<input class="checkbox" type="checkbox" id="checkbox-four" name="floorselect[]" data-name="4" value="4">
												<label for="checkbox-four">4</label>
											</li>
											<li class="checkboxs__item">
												<input class="checkbox" type="checkbox" id="checkbox-three" name="floorselect[]" data-name="3" value="3">
												<label for="checkbox-three">3</label>
											</li>
											<li class="checkboxs__item">
												<input class="checkbox" type="checkbox" id="checkbox-two" name="floorselect[]" data-name="2" value="2">
												<label for="checkbox-two">2</label>
											</li>
											<li class="checkboxs__item">
												<input class="checkbox" type="checkbox" id="checkbox-one" name="floorselect[]" data-name="1" value="1">
												<label for="checkbox-one">1</label>
											</li>
										</ul>
										<div class="freeform__view"><img class="freeform__pic" src="img/plan/andersen.jpg"><img class="freeform__overlay freeform__overlay-ten" id="10" src="img/plan/floor-10.png"><img class="freeform__overlay freeform__overlay-nine" id="9" src="img/plan/floor-9.png"><img class="freeform__overlay freeform__overlay-eight" id="8" src="img/plan/floor-8.png"><img class="freeform__overlay freeform__overlay-seven" id="7" src="img/plan/floor-7.png"><img class="freeform__overlay freeform__overlay-six" id="6" src="img/plan/floor-6.png"><img class="freeform__overlay freeform__overlay-five" id="5" src="img/plan/floor-5.png"><img class="freeform__overlay freeform__overlay-four" id="4" src="img/plan/floor-4.png"><img class="freeform__overlay freeform__overlay-three" id="3" src="img/plan/floor-3.png"><img class="freeform__overlay freeform__overlay-two" id="2" src="img/plan/floor-2.png"><img class="freeform__overlay freeform__overlay-one" id="1" src="img/plan/floor-1.png"></div>
									</div>
									<div class="freeform__block-question">
										<select class="freeform__select custom-select select2-hidden-accessible dop-info" data="Количество комнат" id="entity-rooms" name="rooms" aria-hidden="true" tabindex="-1" style="width: 100%">
											<option value="hide">Выберите количество комнат</option>
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
											<option value="4">4</option>
										</select>
										<input class="freeform__input name" req="y" name="name" placeholder="Ваше имя" type="text">
										<!--span.fileupload-form__errname-->
										<input class="freeform__input phone" req="y" name="tel" placeholder="Ваш телефон" type="tel">
										<!--span.fileupload-form__errname-->
										<input class="freeform__input email" req="y" name="email" placeholder="Ваш e-mail" type="email">
										<input type="hidden" name="utm_source" value="<?=$_REQUEST['utm_source']?>">
										<!--span.fileupload-form__errname-->
										<input class="freeform__btn lead-btn" celtype="getPodbor" name="" data="Получить подборку квартир" value="Получить подборку квартир" placeholder="Получить подборку квартир" type="submit">
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				<section class="infoblock">
					<div class="container-main">
						<h2 class="title title_color-blue">А ещё вас порадует:</h2>
						<div class="prizes">
							<ul class="prizes__list">
								<li class="prizes__item">
									<div class="prize">
										<div class="prize__pic"><img class="prize__img" src="/img/prize1.jpg" alt="near-pic-1"></div>
										<div class="prize__preview">
											<p>Предчистовая отделка</p><span>Строго о СНИПАМ. Вы сэкономите на ремонте до 80 000 рублей</span>
										</div>
									</div>
								</li>
								<li class="prizes__item">
									<div class="prize">
										<div class="prize__pic"><img class="prize__img" src="/img/prize2.jpg" alt="near-pic-1"></div>
										<div class="prize__preview">
											<p>Большая кухня</p>
										</div>
									</div>
								</li>
								<li class="prizes__item">
									<div class="prize">
										<div class="prize__pic"><img class="prize__img" src="/img/prize3.jpg" alt="near-pic-1"></div>
										<div class="prize__preview">
											<p>Широкий балкон</p><span>Как отдельная комната</span>
										</div>
									</div>
								</li>
								<li class="prizes__item">
									<div class="prize">
										<div class="prize__pic"><img class="prize__img" src="/img/prize4.jpg" alt="near-pic-1"></div>
										<div class="prize__preview">
											<p>Кладовые помещения</p><span>от 3 до 9 м</span>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</section>
				<div class="allwidth-block" id="buy">
					<div class="container-main">
						<h2 class="title">Способы покупки квартир</h2>
						<div class="methods-block">
							<ul class="buy-method-tabs">
								<li class="buy-method-tabs__item buy-method-tabs__item_active"><a class="buy-method-tabs__tab" href="#">Ипотека</a></li>
								<li class="buy-method-tabs__item"><a class="buy-method-tabs__tab" href="#">Рассрочка</a></li>
								<li class="buy-method-tabs__item buy-method-tabs__item_color-dark"><a class="buy-method-tabs__tab" href="#">Материнский капитал</a></li>
							</ul>
							<div class="buy-method-blocks">
								<div class="mortgage active">
									<h2 class="methods-block__title methods-block__title_border">Получите рассчёт ежемесячного платежа во всех банках-партнёрах по ипотеке</h2>
									<div class="brands">
										<ul class="brands__list">
											<li class="brands__item"><img class="brands__img" src="/img/sberbank@1x.png"></li>
											<li class="brands__item"><img class="brands__img" src="/img/vtb@1x.png"></li>
											<li class="brands__item"><img class="brands__img" src="/img/mosbank@1x.png"></li>
											<li class="brands__item"><img class="brands__img" src="/img/centrinvest@1x.png"></li>
											<li class="brands__item"><img class="brands__img" src="/img/vozrozhdenie@1x.png"></li>
											<li class="brands__item"><img class="brands__img" src="/img/akbars@1x.png"></li>
											<li class="brands__item"><img class="brands__img" src="/img/rosselhoz@1x.png"></li>
											<li class="brands__item"><img class="brands__img" src="/img/uralsib@1x.png"></li>
										</ul>
									</div>
									<form class="everymonth-pay" id="ipoteka" action="email.php" role="form" method="post">
										<div class="suc-alert"></div>
										<div class="error-alert"></div>
										<div class="everymonth-pay__inputs">
											<select class="everymonth-pay__select custom-select select2-hidden-accessible dop-info" data="Первоначальный взнос" id="start-pay" name="startpay" aria-hidden="true" tabindex="-1" style="width: 20%">
												<option value="hide">Первоначальный взнос</option>
												<option value="200 000">200 000</option>
												<option value="300 000">300 000</option>
												<option value="400 000">400 000</option>
												<option value="500 000">500 000</option>
												<option value="600 000">600 000</option>
												<option value="700 000">700 000</option>
												<option value="800 000">800 000</option>
												<option value="1000 000">1000 000</option>
												<option value="1200 000">1200 000</option>
												<option value="1500 000">1500 000</option>
											</select>
											<select class="everymonth-pay__select custom-select select2-hidden-accessible dop-info" data="Тип квартиры" id="type-home" name="typehome" aria-hidden="true" tabindex="-1" style="width: 20%">
												<option value="hide">Тип квартиры</option>
												<option value="1 комнатная">1 комнатная</option>
												<option value="2 комнатная">2 комнатная</option>
												<option value="3 комнатная">3 комнатная</option>
												<option value="4 комнатная">4 комнатная</option>
												<option value="пентхаус">пентхаус</option>
											</select>
											<select class="everymonth-pay__select custom-select select2-hidden-accessible dop-info" data="На срок" id="time-limit" name="timelimit" aria-hidden="true" tabindex="-1" style="width: 20%">
												<option value="hide">На срок</option>
												<option value="5 лет">5 лет</option>
												<option value="6 лет">6 лет</option>
												<option value="7 лет">7 лет</option>
												<option value="8 лет">8 лет</option>
												<option value="9 лет">9 лет</option>
												<option value="10 лет">10 лет</option>
												<option value="15 лет">15 лет</option>
												<option value="20 лет">20 лет</option>
												<option value="25 лет">25 лет</option>
												<option value="30 лет">30 лет</option>
											</select>
											<input class="everymonth-pay__input name" req='y' name="name" placeholder="Ваше имя" type="text">
											<input class="everymonth-pay__input phone" req='y' name="tel" placeholder="Ваш телефон" type="tel">
											<input type="hidden" name="utm_source" value="<?=$_REQUEST['utm_source']?>">
											<input type="hidden" name="info" value="Ипотека">
										</div>
										<input class="everymonth-pay__btn lead-btn" data="Ипотека" celtype="getIpot" name="" value="Узнать ежемесячный платёж" type="submit">
									</form>
								</div>
								<div class="mortgage">
									<h2 class="methods-block__title">Получите рассчёт ежемесячного платежа по рассрочке</h2>
									<form class="everymonth-pay" id="rass" action="email.php" role="form" method="post">
										<div class="suc-alert"></div>
										<div class="error-alert"></div>
										<div class="everymonth-pay__inputs">
											<select class="everymonth-pay__select custom-select select2-hidden-accessible dop-info" data="Первоначальный взнос" id="start-pay" name="startpay" aria-hidden="true" tabindex="-1" style="width: 20%">
												<option value="hide">Первоначальный взнос</option>
												<option value="200 000">200 000</option>
												<option value="300 000">300 000</option>
												<option value="400 000">400 000</option>
												<option value="500 000">500 000</option>
												<option value="600 000">600 000</option>
												<option value="700 000">700 000</option>
												<option value="800 000">800 000</option>
												<option value="1000 000">1000 000</option>
												<option value="1200 000">1200 000</option>
												<option value="1500 000">1500 000</option>
											</select>
											<select class="everymonth-pay__select custom-select select2-hidden-accessible dop-info" data="Тип квартиры" id="type-home" name="typehome" aria-hidden="true" tabindex="-1" style="width: 20%">
												<option value="hide">Тип квартиры</option>
												<option value="1 комнатная">1 комнатная</option>
												<option value="2 комнатная">2 комнатная</option>
												<option value="3 комнатная">3 комнатная</option>
												<option value="4 комнатная">4 комнатная</option>
												<option value="пентхаус">пентхаус</option>
											</select>
											<select class="everymonth-pay__select custom-select select2-hidden-accessible dop-info" data="На срок" id="time-limit" name="timelimit" aria-hidden="true" tabindex="-1" style="width: 20%">
												<option value="hide">На срок</option>
												<option value="6 мес.">6 мес.</option>
												<option value="9 мес.">9 мес.</option>
												<option value="12 мес.">12 мес.</option>
												<option value="15 мес.">15 мес.</option>
												<option value="18 мес.">18 мес.</option>
												<option value="21 мес.">21 мес.</option>
												<option value="24 мес.">24 мес.</option>
											</select>
											<input class="everymonth-pay__input name" req='y' name="name" placeholder="Ваше имя" type="text">
											<input class="everymonth-pay__input phone" req='y' name="tel" placeholder="Ваш телефон" type="text">
											<input type="hidden" name="info" value="Рассрочка">
										</div>
										<input class="everymonth-pay__btn lead-btn" data="Рассрочка" celtype="getRassr" name="" value="Узнать ежемесячный платёж" type="submit">
									</form>
								</div>
								<div class="mortgage">
									<h2 class="methods-block__title">Узнайте, как воспользоваться материнским капиталом</h2>
									<form class="everymonth-pay" id="mat-kap" action="email.php" role="form" method="post">
										<div class="suc-alert"></div>
										<div class="error-alert"></div>
										<div class="everymonth-pay__inputs">
											<input class="everymonth-pay__input name" req='y' name="name" placeholder="Ваше имя" type="text">
											<input class="everymonth-pay__input phone" req='y' name="tel" placeholder="Ваш телефон" type="text">
											<input type="hidden" name="utm_source" value="<?=$_REQUEST['utm_source']?>">
											<input type="hidden" name="info" value="Материнский капитал">
										</div>
										<input class="everymonth-pay__btn lead-btn" celtype="getKapital" name="" data="Материнский капитал" value="Получить консультацию" type="submit">
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<section class="infoblock">
					<div class="container-main">
						<div class="documents-block">
							<h2 class="subtitle">Документация</h2>
							<div class="contacts-block__container">
								<ul class="documents-block__list">
									<li class="documents-block__item"><a class="documents-block__link" href="/static/building_permission.pdf" target="_blank">Разрешение на строительство</a></li>
									<li class="documents-block__item"><a class="documents-block__link" href="/static/project_declaration.pdf" target="_blank">Проектная декларация</a></li>
								</ul>
							</div>
						</div>
						<div class="contacts-block" id="contacts">
							<h2 class="subtitle">Контакты</h2>
							<div class="contacts-block__container">
								<div class="contacts-block__adress">
									<p>г. Краснодар,</p>
									<p>ул. Героев-Разведчиков, д. 48</p>
								</div>
								<div class="contacts-block__tel  <?=$class?>"><?=$phone?></div>
							</div>
						</div>
					</div>
				</section>
				<div class="allwidth-slider">
					<div class="container">
						<div class="container-main">
							<h2 class="allwidth-slider__title">Выберите себе менеджера</h2>
							<div class="slick-container-manager">
								<div class="slick-slide">
									<div class="manager">
										<div class="manager__foto"><img class="manager__img" src="/img/manager/kupchinskaya_irina.jpg"></div>
										<div class="manager__name">Ирина</div><a class="consult-link firstManager" href="#">Получить консультацию</a>
									</div>
								</div>
								<div class="slick-slide">
									<div class="manager secondManager">
										<div class="manager__foto"><img class="manager__img" src="/img/manager/bocharnikov_andrey.jpg"></div>
										<div class="manager__name">Андрей</div><a class="consult-link secondManager" href="#">Получить консультацию</a>
									</div>
								</div>
								<div class="slick-slide">
									<div class="manager">
										<div class="manager__foto"><img class="manager__img" src="/img/manager/dikopoltseva_svetlana.jpg"></div>
										<div class="manager__name">Светлана</div><a class="consult-link thirdManager" href="#">Получить консультацию</a>
									</div>
								</div>
								<div class="slick-slide">
									<div class="manager">
										<div class="manager__foto"><img class="manager__img" src="/img/manager/stanislav_shipilov.jpg"></div>
										<div class="manager__name">Станислав</div><a class="consult-link fourthManager" href="#">Получить консультацию</a>
									</div>
								</div>
								<div class="slick-slide">
									<div class="manager">
										<div class="manager__foto"><img class="manager__img" src="/img/manager/titarenko_anastasiya.jpg"></div>
										<div class="manager__name">Анастасия</div><a class="consult-link fifthManager" href="#">Получить консультацию</a>
									</div>
								</div>
								<div class="slick-slide">
									<div class="manager">
										<div class="manager__foto"><img class="manager__img" src="/img/manager/titova_svetlana.jpg"></div>
										<div class="manager__name">Светлана</div><a class="consult-link sixthManager" href="#">Получить консультацию</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="container">
					<section class="mapblock">
						<div id="map"></div>
					</section>
					<section class="questions">
						<div class="questions__title">
							<h2>Остались вопросы?</h2>
						</div>
						<div class="questions__desc">
							<p>Задайте их менеджеру</p>
						</div><a class="questions__btn" href="#">Задать вопрос</a>
					</section>
				</div>
				<!--include ../_includes/_planing-->
			</div>
		</div>
		<footer class="footer">
			<div class="container-main">
				<div class="footer__copyright">
					<p>&copy; 2016 ЖК Андерсен</p>
					<p>Все права защищены</p>
				</div>
				<div class="footer__tel"><span class="<?=$class?>"><?=$phone?></span></div>
			</div>
		</footer>
		<div class="question-form" id="question-form">
			<div class="question-form__wrap">
				<header class="popup-header">
					<div class="popup-header__close">&#10006;</div>
					<h2 class="popup-header__title">Задайте вопрос менеджеру</h2>
				</header>
				<form class="question-manager-form" id="question-manager-form" role="form" action="email.php" method="post">
					<div class="suc-alert"></div>
					<div class="error-alert"></div>
					<div class="question-manager-form__inner">
						<div class="question-manager-form__left">
							<textarea class="question-manager-form__input dop-info" data="Текст" name="message" rows="8" placeholder="Ваш вопрос"></textarea>
						</div>
						<div class="question-manager-form__right">
							<input class="question-manager-form__input name" req="y" name="name" placeholder="Ваше имя" type="text">
							<input class="question-manager-form__input email" req="y" name="email" placeholder="Ваш e-mail" type="email">
							<input class="question-manager-form__input phone" req="y" name="tel" placeholder="Ваш телефон" type="tel">
							<input type="hidden" name="utm_source" value="<?=$_REQUEST['utm_source']?>">
							<input type="hidden" name="info" value="Задать вопрос">
							<input class="question-manager-form__btn lead-btn" celtype="getQuest" name="" value="Задать вопрос" data="Задать вопрос" type="submit">
						</div>
					</div>
				</form>
			</div>
		</div>
		<div class="question-form" id="consult-form">
			<div class="question-form__wrap">
				<header class="popup-header">
					<div class="popup-header__close">&#10006;</div>
					<h2 class="popup-header__title">Получите консультацию <span></span></h2>
				</header>
				<form class="manager-consult-form" id="manager-consult-form" role="form" action="email.php" method="post">
					<div class="suc-alert"></div>
					<div class="error-alert"></div>
					<div class="manager-consult-form__inner">
						<div class="manager-consult-form__left">
							<div class="manager">
								<div class="manager__foto"><img class="manager__img" src="/img/manager/kupchinskaya_irina.jpg"></div>
							</div>
							<div class="manager-consult-form__about">
								<p class="manager-consult-form__parag">О себе:</p>
								<p class="manager-consult-form__parag"><span></span></p>
							</div>
						</div>
						<div class="manager-consult-form__right">
							<h2 class="manager-consult-form__title"></h2>
							<input class="manager-consult-form__input name" req="y" name="name" placeholder="Ваше имя" type="text">
							<!--span.fileupload-form__errname-->
							<input class="manager-consult-form__input phone" req="y" name="tel" placeholder="Ваш телефон" type="tel">
							<!--span.fileupload-form__errname-->
							<input class="manager-choose-form__input" name="manager" placeholder="Менеджер" type="hidden">
							<input type="hidden" name="info">
							<input class="manager-consult-form__btn lead-btn" celtype="getConsult" data="Получить консультацию" name="" value="Получить консультацию" type="submit">
						</div>
					</div>
				</form>
			</div>
		</div>
		<div class="question-form" id="addition-form">
			<div class="question-form__wrap">
				<header class="popup-header">
					<div class="popup-header__close">&#10006;</div>
					<h2 class="popup-header__title">Таких квартир осталось немного</h2>
				</header>
				<form class="addition-manager-form" id="addition-manager-form" role="form" action="email.php" method="post">
					<div class="suc-alert"></div>
					<div class="error-alert"></div>
					<div class="addition-manager-form__inner">
						<div class="addition-manager-form__content">
							<h2 class="addition-manager-form__title">Узнайте подробности у менеджера по телефону <span class="<?=$class?>"><?=$phone?></span> или оставьте заявку - мы перезвоним</h2>
							<div class="addition-manager-form__inputs">
								<input class="addition-manager-form__input name" name="name" req="y" placeholder="Ваше имя" type="text">
								<input class="addition-manager-form__input phone" name="tel" req="y" placeholder="Ваш телефон" type="tel">
								<input type="hidden" name="utm_source" value="<?=$_REQUEST['utm_source']?>">
								<input type="hidden" name="info" value="Двухуровневые пентхаусы">
								<input class="addition-manager-form__btn lead-btn" celtype="getPodr" name="" value="Узнать подробнее" data="Двухуровневые пентхаусы" type="submit">
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
		<div class="question-form" id="call-form">
			<div class="question-form__wrap">
				<header class="popup-header">
					<div class="popup-header__close">&#10006;</div>
					<h2 class="popup-header__title">Закажите звонок</h2>
				</header>
				<form class="callform" action="email.php" role="form" method="post">
					<div class="suc-alert"></div>
					<div class="error-alert"></div>
					<div class="callform__inner">
						<input class="callform__input name" name="name" req="y" placeholder="Ваше имя" type="text">
						<!--span.fileupload-form__errname-->
						<input class="callform__input phone" name="tel" req="y" placeholder="Ваш телефон" type="tel">
						<!--span.fileupload-form__errname-->
						<input type="hidden" name="utm_source" value="<?=$_REQUEST['utm_source']?>">
						<input type="hidden" name="info" value="заказать звонок">
						<input class="callform__btn lead-btn" celtype="getCall" value="Заказать звонок" data="Заказать звонок" type="submit">
					</div>
				</form>
			</div>
		</div>
		<div class="question-form" id="planing-form">
			<div class="question-form__wrap">
				<header class="popup-header">
					<div class="popup-header__close close-plan">&#10006;</div>
					<h2 class="popup-header__title">Двухкомнатная квартира</h2>
				</header>
				<form class="planing-choose-form" id="planing-choose-form" role="form" action="email.php" method="post">
					<input type="hidden" name="utm_source" value="<?=$_REQUEST['utm_source']?>">
					<div class="suc-alert"></div>
					<div class="error-alert"></div>
					<div class="planing-choose-form__inner">
						<div class="planing-choose-form__left">
							<div class="plan">
								<div class="plan__foto"><img class="plan__img" src="/img/8.png"></div>
							</div>
						</div>
						<div class="planing-choose-form__right">
							<div class="planing-choose-form__about">
								<h2 class="planing-choose-form__title">Подъезд 1, этаж 3</h2>
								<div class="planing-choose-form__line">
									<p class="planing-choose-form__parag allsq"><span></span></p>
									<p class="planing-choose-form__parag livesq"><span></span></p>
								</div>
								<!--.planing-choose-form__line-->
								<!--  p.planing-choose-form__parag Общая комната-->
								<!--  p.planing-choose-form__parag Спальня-->
								<!--  p.planing-choose-form__parag Кухня-->
							</div>
							<h2 class="planing-choose-form__main-title">Узнайте стоимость данной квартиры на сегодняшний день</h2>
							<input class="planing-choose-form__input name" req="y" name="name" placeholder="Ваше имя" type="text">
							<!--span.fileupload-form__errname-->
							<input class="planing-choose-form__input phone" req="y" name="tel" placeholder="Ваш телефон" type="tel">
							<!--span.fileupload-form__errname-->
							<input class="planing-choose-form__input" name="plan" placeholder="Ваш телефон" type="hidden">
							<input type="hidden" name="info" id="flat_info">
							<input class="planing-choose-form__btn lead-btn" celtype="getCost" name="" value="Узнать стоимость" data="Узнать стоимость" type="submit">
						</div>
					</div>
				</form>
			</div>
		</div>
		<div class="question-form" id="offer-form">
			<div class="question-form__wrap wide">
				<header class="popup-header--background">
					<div class="popup-header__close">&#10006;</div>
					<h2 class="popup-header__title background accent">Супер акция</h2>
					<h3 class="popup-header__title background subtitle">
						ДО 1 ОКТЯБРЯ <br />
						кладовка в подарок<br />
						(подробности у менеджера)
					</h3>
				</header>
				<form class="callform" action="email.php" role="form" method="post">
					<div class="suc-alert"></div>
					<div class="error-alert"></div>
					<div class="callform__inner">
						<input class="callform__input" name="name" placeholder="Ваше имя" type="text">
						<!--span.fileupload-form__errname-->
						<input class="callform__input" name="tel" placeholder="Ваш телефон" type="tel">
						<input type="hidden" name="utm_source" value="<?=$_REQUEST['utm_source']?>">
						<!--span.fileupload-form__errname-->
						<input class="callform__btn" name="" value="Узнать подробнее" type="submit">
					</div>
				</form>
			</div>
		</div>
		<?php @include 'lrcnt.php';?>
<?php /*данные для лога действий с форм*/?>
<div style="display: none;">
    <input type="hidden" id="send_data" value="<?php echo $send_data?>" />    
</div>
		<script src="js/plugins.main.min.js"></script>
		<script src="js/main.min.js"></script>
		<script src="js/main.js"></script>

<!-- Yandex.Metrika counter -->
<script src="https://mc.yandex.ru/metrika/watch.js" type="text/javascript"></script>
<script type="text/javascript">
try {
    var yaCounter40200589 = new Ya.Metrika({
        id:40200589,
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
    });
} catch(e) { }
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/40200589" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
		
	</body>
</html>