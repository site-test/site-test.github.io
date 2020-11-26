document.write('<header> \
<ul class="topcontact"> \
<li class="top-phone"> \
	<a href="tel:88005007682" title="Позвоните нам - звонок бесплатный!">8 (800) 500-76-82</a><br> \
	<a href="tel:84956498313">8 (495) 649-83-13</a> \
</li> \
<li><a href="info_feedback.html">Написать нам</a></li> \
</ul> \
<ul class="usermenu"> \
<div class="usermenu-login" id="dheaderlinks_unlogged"> \
<li><a href="javascript:openmodwin(\'dmwlogin\');">Вход</a></li> \
<li><a href="javascript:openmodwin(\'dmwlogin_register\');">Регистрация</a></li> \
</div> \
<div class="usermenu-login" id="dheaderlinks_logged" style="display: none;"> \
<li><a href="account.html">Ваш кабинет</a></li> \
<li><a href="!_index.html">Выход</a></li> \
</div> \
<!-- если корзина пуста, добавлять класс empty --> \
<li><a href="cart.html" class="ico icart" title="Ваша корзина"><span class="icotext">Ваша корзина: </span><span class="icart-num">3</span></a></li> \
<li><a href="wishlist.html" class="ico iwish" title="Отложенные товары"><span class="icotext">Отложенные товары</span></a></li> \
<li> \
	<div class="search"> \
		<div class="search-toggler ico isearch" title="Поиск по артикулу"><span class="icotext">Поиск по артикулу</span></div> \
		<div class="searchform"> \
			<form> \
				<div class="inputwrap"> \
					<input type=search size=20 placeholder="поиск по артикулу"> \
					<button type=button onclick="location.href = \'search.html\';">Поиск</button> \
				</div> \
			</form> \
		</div> \
	</div> \
</li> \
</ul> \
<a href="!_index.html"><img src="img/logo.svg" class="logo" alt="Итальянская обувь ASH"></a> \
</header>');
