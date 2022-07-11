document.write('<div class="mwcontent mwshort hsep" id="dmwlogin"> \
	<a href="javascript:closemodwin(\'dmwlogin\');" class="mwcloser ico iclose" title="Закрыть"><span class="icotext">Закрыть</span></a> \
	<h2>Вход на сайт</h2> \
	<div class="editform"> \
		<section> \
			<h4>Войти через соцсети</h4> \
			<ul class="soclinks"> \
			<li><a href="javascript:void(0);" title="Facebook"><img src="img/ico_facebook.png" alt="Facebook"></a></li> \
			<li><a href="javascript:void(0);" title="ВКонтакте"><img src="img/ico_vk.png" alt="ВКонтакте"></a></li> \
			<li><a href="javascript:void(0);" title="Twitter"><img src="img/ico_twitter.png" alt="Twitter"></a></li> \
			<li><a href="javascript:void(0);" title="Одноклассники"><img src="img/ico_ok.png" alt="Одноклассники"></a></li> \
			<li><a href="javascript:void(0);" title="Мой мир"><img src="img/ico_mailru.png" alt="Мой мир"></a></li> \
			</ul> \
		</section> \
		<div class="login-sep"><span>или</span></div> \
		<section> \
			<h4>Е-mail</h4> \
			<div class="feedback fber"><p></p></div> \
			<input type=text> \
		</section> \
		<section> \
			<h4>Пароль</h4> \
			<div class="feedback fber"><p></p></div> \
			<input type=password> \
		</section> \
		<p class="comment"><a href="javascript:openmodwin(\'dmwlogin_remindpass\');">Забыли пароль?</a></p> \
		<section> \
			<! -- при регистрации и авторизации нужно ссылки "вход" и "регистрация" менять на "ваш кабинет" и "выход" в двух местах - в шапке сайта и в основном меню --> \
			<!-- замена одного дива на другой в скрипте ниже сделана исключительно для примера в дизайне --> \
			<button type=submit class="bsubmit" onclick="closemodwin(\'dmwlogin_register\'); $(\'#dheaderlinks_unlogged\').hide(); $(\'#dheaderlinks_logged\').show();">Войти</button> \
		</section> \
	</div> \
</div>');
