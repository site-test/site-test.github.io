document.write('<div class="mwcontent hsep" id="dmwproduct"> \
	<div class="loading"></div> \
	<a href="javascript:closemodwin(\'dmwproduct\');" class="mwcloser ico iclose" title="Закрыть"><span class="icotext">Закрыть</span></a> \
	<div class="product hsep"> \
		<div class="prodpix hsep"> \
			<div class="mainpic"> \
				<div class="loading"></div> \
				<div class="zoom" onmouseover="$(this).siblings(\'.zoompic\').show();" onmouseout="$(this).siblings(\'.zoompic\').hide();"> \
					<div class="zoomzone" style="top: 40%; left: 25%;"></div> \
				</div> \
				<img src="img/pix/product_01.jpg" alt="" class="mainpic-img"> \
				<div class="zoompic"> \
					<img src="img/pix/product_01_enl.jpg" alt="" class="zoompic-img" style="top: -80%; left: -50%;"> \
				</div> \
				<div class="mainpic-ico prod-snowflake"><img src="img/snowflake.svg" alt=""></div> \
			</div> \
			<div class="thumbs"> \
				<a href="javascript:void(0);" class="thumb-nav thumb-up"></a> \
				<div class="thumb-wrap"> \
					<ul class="thumb-content" style="top: 0;"> \
					<li class="act"><img src="img/pix/product_01_sml1.jpg" alt=""></li> \
					<li><img src="img/pix/product_01_sml2.jpg" alt="" onclick="$(this).closest(\'.prodpix\').find(\'.loading\').toggle();"></li> \
					<li><img src="img/pix/product_01_sml3.jpg" alt=""></li> \
					<li><img src="img/pix/product_01_sml4.jpg" alt=""></li> \
					<li><img src="img/pix/product_01_sml5.jpg" alt=""></li> \
					</ul> \
				</div> \
				<a href="javascript:void(0);" class="thumb-nav thumb-down"></a> \
			</div> \
		</div> \
		<div class="proddescr"> \
			<h1>Ботинки Nico</h1> \
			<p class="prod-articul">Код товара: 49713</p> \
			<p class="prod-price"><span class="nowrap sale">10 090 р.</span> <s class="nowrap">12 590 р.</s> <span class="discount">-30%</span></p> \
			<div class="prod-price-discount"><span>-5% при оплате онлайн</span></div> \
			<div class="prod-order"> \
				<h4>Российский размер</h4> \
				<ul class="prod-size"> \
				<li><button type=button onclick="chooseSize($(this));">36</button></li> \
				<li><button type=button onclick="chooseSize($(this));">37</button></li> \
				<li><button type=button onclick="chooseSize($(this));">38</button></li> \
				<li><button type=button onclick="chooseSize($(this));">39</button></li> \
				<li><button type=button onclick="chooseSize($(this));">40</button></li> \
				<li><a href="javascript:openmodwin(\'dmwsize_m\');" class="prod-size-help">определить размер</a> \
				</ul> \
				<div class="prod-button"> \
					<div class="feedback" style="display: none;"><p></p></div> \
					<button type=button class="bcart" onclick="addToCart($(this));">Добавить в корзину</button> \
					<a href="javascript:void(0);" class="ico iwish" title="Отложить" onclick="setFav($(this));"><span class="icotext">Отложить</span></a> \
				</div> \
			</div> \
			<h4 class="blocktitle opened">Детали</h4> \
			<div class="prod-detail" style="display:block;"> \
				<ul> \
				<li>Материал верха: кожа</li> \
				<li>Подошва: резина</li> \
				<li>Материл подкладки: текстиль</li> \
				</ul> \
			</div> \
		</div> \
	</div> \
</div>');
