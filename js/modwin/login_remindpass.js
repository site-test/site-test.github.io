document.write('<div class="mwcontent mwshort hsep" id="dmwlogin_remindpass"> \
	<a href="javascript:closemodwin(\'dmwlogin_remindpass\');" class="mwcloser ico iclose" title="Закрыть"><span class="icotext">Закрыть</span></a> \
	<h2>Напомнить пароль</h2> \
	<div class="editform"> \
		<section> \
			<h4>Ваш e-mail</h4> \
			<div class="feedback fber"><p></p></div> \
			<input type=text> \
		</section> \
		<section class="captcha"> \
			<h4>Введите надпись с рисунка</h4> \
			<div class="feedback fber"><p></p></div> \
			<img src="img/pix/captcha.png" alt=""> \
			<a href="javascript:void(0);">сменить</a> \
			<input type=text> \
		</section> \
		<section> \
			<button type=submit class="bsubmit" onclick="$(this).closest(\'.editform\').hide().siblings(\'.textpage\').slideDown(200);">Напомнить</button> \
		</section> \
	</div> \
	<div class="textpage" style="display: none;"> \
		<p>На указанный Вами адрес электронной почты выслано письмо с дальнейшими иструкциями.</p> \
	</div> \
</div>');
