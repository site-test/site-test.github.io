document.write('<nav> \
<ul class="mmenu"> \
<li class="mmenu-item"> \
	<span> \
		<a href="catalog.html" class="mmenu-link');
if (mmenuitem == 'catalog'){
	document.write(' act');
}
document.write('">Женщинам</a>  \
		<ul class="dropmenu"> \
		<li class="dropmenu-title"><a href="catalog.html">Женская обувь</a></li> \
		<li><a href="catalog.html">Босоножки</a></li> \
		<li><a href="catalog.html">Шлепанцы</a></li> \
		<li><a href="catalog.html">Сабо</a></li> \
		<li><a href="catalog.html">Туфли</a></li> \
		<li><a href="catalog.html">Ботинки</a></li> \
		<li><a href="catalog.html">Сапоги</a></li> \
		<li><a href="catalog.html">Кеды</a></li> \
		<li><a href="catalog.html">Ботфорты</a></li> \
		<li><a href="catalog.html">Эспадрильи</a></li> \
		<li><a href="catalog.html">Полуботинки</a></li> \
		<li><a href="catalog.html">Ботильоны</a></li> \
		<li><a href="catalog.html">Сандалии</a></li> \
		<li><a href="catalog.html">Балетки</a></li> \
		<li><a href="catalog.html">Кроссовки</a></li> \
		<li><a href="catalog.html">Слипоны</a></li> \
		<li><a href="catalog.html">Полусапоги</a></li> \
		<li class="dropmenu-title"><a href="catalog.html">Женские сумки</a></li> \
		</ul> \
	</span> \
</li> \
<li class="mmenu-item"> \
	<span> \
		<a href="catalog.html" class="mmenu-link">Мужчинам</a> \
		<ul class="dropmenu"> \
		<li class="dropmenu-title"><a href="catalog.html">Мужская обувь</a></li> \
		<li><a href="catalog.html">Кроссовки</a></li> \
		<li><a href="catalog.html">Кеды</a></li> \
		</ul> \
	</span> \
</li> \
<!-- <li class="mmenu-item"><a href="catalog_sale.html" class="mmenu-link');
if (mmenuitem == 'sale'){
document.write(' act');
}
document.write('">Sale</a></li> --> \
<li class="mmenu-item"><a href="shops.html" class="mmenu-link');
if (mmenuitem == 'shop'){
document.write(' act');
}
document.write('">Магазины</a></li> \
<li class="mmenu-item"><a href="partner.html" class="mmenu-link');
if (mmenuitem == 'partner'){
document.write(' act');
}
document.write('">Партнерам</a></li> \
<li class="mmenu-item"><a href="landing_ashgirls.html" class="mmenu-link');
if (mmenuitem == 'ashgirls'){
document.write(' act');
}
document.write('">#ASHclub</a></li> \
<li class="mmenu-item"><a href="landing_reash.html" class="mmenu-link');
if (mmenuitem == 'reash'){
document.write(' act');
}
document.write('">reAsh</a></li> \
<li class="mmenu-item mobshow"><a href="info_feedback.html" class="mmenu-link">Написать нам</a></li> \
<li class="mmenu-item mobshow"><a href="javascript:openmodwin(\'dmwlogin_register\');" class="mmenu-link">Регистрация</a></li> \
<li class="mmenu-item mobshow"><a href="javascript:openmodwin(\'dmwlogin\');" class="mmenu-link">Вход</a></li> \
</ul> \
<div class="mmenu-toggler ico imenu" onclick="showMainMenu();"></div>');
if (mmenuitem == 'catalog'){
document.write('<ul class="smenu"> \
<li><a href="catalog.html" class="act">Обувь</a></li> \
<li><a href="catalog.html">Одежда</a></li> \
<li><a href="catalog.html">Аксессуары</a></li> \
<div class="smenu-toggler" onclick="showSubMenu();"></div> \
</ul>');
}
if (mmenuitem == 'sale'){
document.write('<ul class="smenu"> \
<li><a href="catalog_sale.html" class="act">SALE30</a></li> \
<li><a href="catalog_sale.html">SALE50</a></li> \
<li><a href="catalog_sale.html">SALE70</a></li> \
<div class="smenu-toggler" onclick="showSubMenu();"></div> \
</ul>');
}
document.write('</nav>');
