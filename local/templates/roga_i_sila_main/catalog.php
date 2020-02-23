<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
?>
			<div class="clear"></div>
			<section class="content">
				<div class="work_area width_960">
					<nav class="nav_chain">
							<a href="/">Главная</a>
							<span class="nav_arrow inline-block"></span>
							<span>Легковые</span>
					</nav>
					<h1 class="push_right">Заголовок каталога</h1>
					<div class="filter pie">
						<div class="b-trans-type">
							<h3>Коробка:</h3>
							<div class="b-trans-type__wrapper">
								<input id="checkbox1" class="filter-type" type="checkbox">
								<label class="filter-type-label" for="checkbox1">АКПП</label>
							</div>
							<div class="b-trans-type__wrapper">
								<input id="checkbox2" class="filter-type" type="checkbox">
								<label class="filter-type-label" for="checkbox2">МКПП</label>
							</div>
						</div>
						<div class="b-slider">
							<h3>Цена:</h3>
							<div>
								<input type="text" id="price-start" placeholder="от 0 руб." class="pie"/>
								<input type="text" id="price-end" placeholder="до 10 000 000 руб." class="pie"/>
							</div>
							<div id="slider-range"></div>
						</div>
						<div class="b-color">
							<h3>Цвет:</h3>
							<div class="b-color__wrapper">
								<input id="color1" class="filter-type" type="checkbox">
								<label class="filter-type-label" for="color1">Красный</label>
							</div>
							<div class="b-color__wrapper">
								<input id="color2" class="filter-type" type="checkbox">
								<label class="filter-type-label" for="color2">Зелёный</label>
							</div>
							<div class="b-color__wrapper">
								<input id="color3" class="filter-type" type="checkbox">
								<label class="filter-type-label" for="color3">Зелёный</label>
							</div>
							<div class="b-color__wrapper">
								<input id="color4" class="filter-type" type="checkbox">
								<label class="filter-type-label" for="color4">Зелёный</label>
							</div>
						</div>
					</div>
					<section>
						<div id="catalog">
							<figure class="product_item">
								<div class="product_item_pict">
									<a href="#">
										<img src="../images/test_top_week_1.png" alt="BMW X3 2.0d" title="BMW X3 2.0d"/>
									</a>
								</div>
								<figcaption>
									<h3><a href="#">BMW X3 2.0d</a></h3>
									<span class="product_item_price dark_grey old_price">3 230 000 руб.</span>
									<p class="product_item_price dark_grey">2 230 000 руб.</p>
									<a class="buy_button inverse inline-block pie" href="#buy_popup" rel="modal:open">В корзину</a>
								</figcaption>
							</figure>
							<figure class="product_item">
								<div class="product_item_pict">
									<a href="#">
										<img src="../images/test_top_week_2.png" alt="AUDI A6 3.0 TFSI" title="AUDI A6 3.0 TFSI"/>
									</a>
								</div>
								<figcaption>
									<h3><a href="#">AUDI A6 3.0 TFSI</a></h3>
									<p class="product_item_price dark_grey">2 870 000 руб.</p>
									<a class="buy_button inverse inline-block pie" href="#buy_popup" rel="modal:open">В корзину</a>
								</figcaption>
							</figure>

							<figure class="product_item">
								<div class="product_item_pict">
									<a href="#">
										<img src="../images/test_top_week_3.png" alt="Mercedes-Benz A200" title="Mercedes-Benz A200"/>
									</a>
								</div>
								<figcaption>
									<h3><a href="#">Mercedes-Benz A200</a></h3>
									<p class="product_item_price dark_grey">1 310 000 руб.</p>
									<a class="buy_button inverse inline-block pie" href="#buy_popup" rel="modal:open">В корзину</a>
								</figcaption>
							</figure>
							<figure class="product_item">
								<div class="product_item_pict">
									<a href="#">
										<img src="../images/test_top_week_4.png" alt="BMW Z4 sDrive35i" title="BMW Z4 sDrive35i"/>
									</a>
								</div>
								<figcaption>
									<h3><a href="#">BMW Z4 sDrive35i</a></h3>
									<p class="product_item_price">3 532 000 руб.</p>
									<a class="buy_button inverse inline-block pie" href="#buy_popup" rel="modal:open">В корзину</a>
								</figcaption>
							</figure>

							<figure class="product_item">
								<div class="product_item_pict">
									<a href="#">
										<img src="../images/test_top_week_1.png" alt="BMW X3 2.0d" title="BMW X3 2.0d"/>
									</a>
								</div>
								<figcaption>
									<h3><a href="#">BMW X3 2.0d</a></h3>
									<p class="product_item_price dark_grey">2 230 000 руб.</p>
									<a class="buy_button inverse inline-block pie" href="#buy_popup" rel="modal:open">В корзину</a>
								</figcaption>
							</figure>
							<figure class="product_item">
								<div class="product_item_pict">
									<a href="#">
										<img src="../images/test_top_week_2.png" alt="AUDI A6 3.0 TFSI" title="AUDI A6 3.0 TFSI"/>
									</a>
								</div>
								<figcaption>
									<h3><a href="#">AUDI A6 3.0 TFSI</a></h3>
									<p class="product_item_price dark_grey">2 870 000 руб.</p>
									<a class="buy_button inverse inline-block pie" href="#buy_popup" rel="modal:open">В корзину</a>
								</figcaption>
							</figure>
							<figure class="product_item">
								<div class="product_item_pict">
									<a href="#">
										<img src="../images/test_top_week_3.png" alt="Mercedes-Benz A200" title="Mercedes-Benz A200"/>
									</a>
								</div>
								<figcaption>
									<h3><a href="#">Mercedes-Benz A200</a></h3>
									<p class="product_item_price dark_grey">1 310 000 руб.</p>
									<a class="buy_button inverse inline-block pie" href="#buy_popup" rel="modal:open">В корзину</a>
								</figcaption>
							</figure>
							<figure class="product_item">
								<div class="product_item_pict">
									<a href="#">
										<img src="../images/test_top_week_4.png" alt="BMW Z4 sDrive35i" title="BMW Z4 sDrive35i"/>
									</a>
								</div>
								<figcaption>
									<h3><a href="#">BMW Z4 sDrive35i</a></h3>
									<p class="product_item_price">3 532 000 руб.</p>
									<a class="buy_button inverse inline-block pie" href="#buy_popup" rel="modal:open">В корзину</a>
								</figcaption>
							</figure>

							<figure class="product_item">
								<div class="product_item_pict">
									<a href="#">
										<img src="../images/test_top_week_1.png" alt="BMW X3 2.0d" title="BMW X3 2.0d"/>
									</a>
								</div>
								<figcaption>
									<h3><a href="#">BMW X3 2.0d</a></h3>
									<p class="product_item_price dark_grey">2 230 000 руб.</p>
									<a class="buy_button inverse inline-block pie" href="#buy_popup" rel="modal:open">В корзину</a>
								</figcaption>
							</figure>
							<figure class="product_item">
								<div class="product_item_pict">
									<a href="#">
										<img src="../images/test_top_week_2.png" alt="AUDI A6 3.0 TFSI" title="AUDI A6 3.0 TFSI"/>
									</a>
								</div>
								<figcaption>
									<h3><a href="#">AUDI A6 3.0 TFSI</a></h3>
									<p class="product_item_price dark_grey">2 870 000 руб.</p>
									<a class="buy_button inverse inline-block pie" href="#buy_popup" rel="modal:open">В корзину</a>
								</figcaption>
							</figure>
							<figure class="product_item">
								<div class="product_item_pict">
									<a href="#">
										<img src="../images/test_top_week_3.png" alt="Mercedes-Benz A200" title="Mercedes-Benz A200"/>
									</a>
								</div>
								<figcaption>
									<h3><a href="#">Mercedes-Benz A200</a></h3>
									<p class="product_item_price dark_grey">1 310 000 руб.</p>
									<a class="buy_button inverse inline-block pie" href="#buy_popup" rel="modal:open">В корзину</a>
								</figcaption>
							</figure>
							<figure class="product_item">
								<div class="product_item_pict">
									<a href="#">
										<img src="../images/test_top_week_4.png" alt="BMW Z4 sDrive35i" title="BMW Z4 sDrive35i"/>
									</a>
								</div>
								<figcaption>
									<h3><a href="#">BMW Z4 sDrive35i</a></h3>
									<p class="product_item_price">3 532 000 руб.</p>
									<a class="buy_button inverse inline-block pie" href="#buy_popup" rel="modal:open">В корзину</a>
								</figcaption>
							</figure>

							<figure class="product_item last">
								<div class="product_item_pict">
									<a href="#">
										<img src="../images/test_top_week_3.png" alt="Mercedes-Benz A200" title="Mercedes-Benz A200"/>
									</a>
								</div>
								<figcaption>
									<h3><a href="#">Mercedes-Benz A200</a></h3>
									<p class="product_item_price dark_grey">1 310 000 руб.</p>
									<a class="buy_button inverse inline-block pie" href="#buy_popup" rel="modal:open">В корзину</a>
								</figcaption>
							</figure>
							<figure class="product_item last">
								<div class="product_item_pict">
									<a href="#">
										<img src="../images/test_top_week_4.png" alt="BMW Z4 sDrive35i" title="BMW Z4 sDrive35i"/>
									</a>
								</div>
								<figcaption>
									<h3><a href="#">BMW Z4 sDrive35i</a></h3>
									<p class="product_item_price">3 532 000 руб.</p>
									<a class="buy_button inverse inline-block pie" href="#buy_popup" rel="modal:open">В корзину</a>
								</figcaption>
							</figure>
							<figure class="product_item last">
								<div class="product_item_pict">
									<a href="#">
										<img src="../images/test_top_week_3.png" alt="Mercedes-Benz A200" title="Mercedes-Benz A200"/>
									</a>
								</div>
								<figcaption>
									<h3><a href="#">Mercedes-Benz A200</a></h3>
									<p class="product_item_price dark_grey">1 310 000 руб.</p>
									<a class="buy_button inverse inline-block pie" href="#buy_popup" rel="modal:open">В корзину</a>
								</figcaption>
							</figure>
							<figure class="product_item last">
								<div class="product_item_pict">
									<a href="#">
										<img src="../images/test_top_week_4.png" alt="BMW Z4 sDrive35i" title="BMW Z4 sDrive35i"/>
									</a>
								</div>
								<figcaption>
									<h3><a href="#">BMW Z4 sDrive35i</a></h3>
									<p class="product_item_price">3 532 000 руб.</p>
									<a class="buy_button inverse inline-block pie" href="#buy_popup" rel="modal:open">В корзину</a>
								</figcaption>
							</figure>
						</div>
						<div class="clear"></div>
						<div class="page_nav">
							<nav>
								<a href="#" class="prev"></a>
								<span class="current">1</span>
								<a href="#">2</a>
								<a href="#">3</a>
								<a href="#">4</a>
								<a href="#">5</a>
								<span>...</span>
								<a href="#">87</a>
								<a href="#" class="next"></a>
							</nav>
						</div>
					</section>
				</div>
			</section>
			<div class="d_footer width_960"></div>
			<div class="clear"></div>
		</div>
		<footer class="footer width_960">
			<section class="float_inner bottom_block">
				<section class="shops_block">
					<h2 class="inline-block">Наши салоны</h2>
					<span class="dark_grey all_list">&nbsp;/&nbsp;<a href="#" class="text_decor_none"><b>Все</b></a></span>
					<div>
						<figure class="shops_block_item">
							<a href=""><img src="../images/test_shop_1.png" alt="" title="" /></a>
							<figcaption class="shops_block_item_description">
								<h3 class="shops_block_item_name">Салон на братиславской</h3>
								<p class="dark_grey">Москва, ул. Братиславская, дом 23</p>
								<p class="black">+7 495 987 65 43</p>
								<p>Часы работы:<br/> c 9.00 до 21.00</p>
							</figcaption>
						</figure>
						<figure class="shops_block_item">
							<a href=""><img src="../images/test_shop_2.png" alt="" title="" /></a>
							<figcaption class="shops_block_item_description">
								<h3 class="shops_block_item_name">Салон на братиславской</h3>
								<p class="dark_grey">Москва, ул. Братиславская, дом 23</p>
								<p class="black">+7 495 987 65 43</p>
								<p>Часы работы:<br/> c 9.00 до 21.00</p>
							</figcaption>
						</figure>
					</div>
				</section>
				<section class="info_block left_block_shadow">
					<h2>Информация</h2>
					<nav class="menu_footer grey">
						<ul>
							<li><a href="#">О компании</a></li>
							<li><a href="#" class="selected">Контактная информация</a></li>
							<li><a href="#">Условия продаж</a></li>
							<li><a href="#">Финансовый отдел</a></li>
							<li><a href="#">Для клиентов</a></li>
						</ul>
					</nav>
				</section>
			</section>
			<div class="footer_inner">
				<a href="http://www.qsoft.ru" target="_blank" class="qsoft grey inline-block">Сделано в</a>
				<div class="copy">&copy; 2013 Рога &amp; Сила. Продажа автомобилей.</div>
			</div>
		</footer>
	</body>
</html>