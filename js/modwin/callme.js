document.write('<div class="mwcontent mwshort hsep" id="dmwcallme"> \
	<a href="javascript:closemodwin(\'dmwcallme\');" class="mwcloser ico iclose" title="Закрыть"><span class="icotext">Закрыть</span></a> \
	<h2>Быстрый заказ</h2> \
	<div class="editform"> \
		<p class="comment">Оператор свяжется с Вами для уточнения данных заказа</p> \
		<section> \
			<h4>Ваше имя</h4> \
			<div class="feedback fber"><p></p></div> \
			<input type=text> \
		</section> \
		<section> \
			<h4>Телефон</h4> \
			<div class="feedback fber"><p></p></div> \
			<input type=text> \
		</section> \
		<section> \
			<h4>Е-mail</h4> \
			<div class="feedback fber"><p></p></div> \
			<input type=text> \
		</section> \
		<section> \
			<button type=submit class="bsubmit" onclick="$(this).closest(\'.editform\').hide().siblings(\'.textpage\').slideDown(200);">Отправить</button> \
		</section> \
	</div> \
	<div class="textpage" style="display: none;"> \
		<p>Ваш заявка отправлена.</p> \
		<p>Оператор свяжется с Вами для уточнения данных заказа.</p> \
	</div> \
</div>');
