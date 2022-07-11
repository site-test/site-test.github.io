document.write('<div class="mwcontent mwshort hsep" id="dmwoutofstock"> \
	<a href="javascript:closemodwin(\'dmwlogin_register\');" class="mwcloser ico iclose" title="Закрыть"><span class="icotext">Закрыть</span></a> \
	<h2>Узнать о поступлении</h2> \
	<div class="editform"> \
		<section> \
			<p>Подпишитесь и&nbsp;узнайте первыми, когда понравившаяся вам пара снова поступит в&nbsp;продажу</p> \
		</section> \
		<section> \
			<h4>Имя</h4> \
			<div class="feedback fber"><p></p></div> \
			<input type=text> \
		</section> \
		<section> \
			<h4>Е-mail</h4> \
			<div class="feedback fber"><p></p></div> \
			<input type=text> \
		</section> \
		<section> \
				<input type=checkbox id="doos_subscribe"> \
				<label for="doos_subscribe">Подписаться на новости</label> \
		</section> \
		<section> \
				<p class="comment">Нажимая на&nbsp;кнопку «Подписаться на размер», я&nbsp;соглашаюсь на&nbsp;обработку моих персональных данных, ознакомлен(а) и&nbsp;согласен(а) с&nbsp;условиями <a href="info_oferta.html" target="_blank">Публичной оферты</a></p> \
		</section> \
		<section> \
			<button type=submit class="bsubmit" onclick="$(this).closest(\'.editform\').hide().siblings(\'.textpage\').slideDown(200);">Подписаться на размер</button> \
		</section> \
	</div> \
	<div class="textpage" style="display: none;"> \
		<p>Мы сообщим вам, когда данный товар поступит в&nbsp;продажу</p> \
	</div> \
</div>');
