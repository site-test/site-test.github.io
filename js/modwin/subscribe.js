document.write('<div class="mwcontent mwsubscribe hsep" id="dmwsubscribe"> \
	<a href="javascript:closemodwin(\'dmwsubscribe\');" class="mwcloser ico iclose" title="Закрыть"><span class="icotext">Закрыть</span></a> \
	<img src="img/subscribe.jpg" alt=""> \
	<h2>Узнавайте о самом интересном раньше других!</h2> \
	<p class="mwsubscribe-descr">Текст о том, какие мы прекрасные и как выгодно быть на нас подписанной, и вообще мы тут деньги дарим</p> \
	<div class="mwsubscribe-form"> \
		<div class="feedback fber" id="dmwsubscribefb" style="display: none;"><p>Человек с указанным именем уже подписан на рассылку!</p></div> \
		<input type=text size=20 placeholder="Ваше имя" title="Ваше имя"> \
		<input type=text size=20 placeholder="Ваш email" title="Ваш email"> \
		<button type=submit onclick="$(\'#dmwsubscribefb\').slideDown(200);">Подписаться</button> \
	</div> \
</div>');
