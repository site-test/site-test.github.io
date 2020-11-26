document.write('<div class="mwcontent hsep" id="dmwpaymethod"> \
	<div class="loading"></div> \
	<a href="javascript:closemodwin(\'dmwpaymethod\');" class="mwcloser ico iclose" title="закрыть"><span class="icotext">Закрыть</span></a> \
	<h2>Выберите способ оплаты</h2> \
	<div class="mwframe textpage hsep"> \
		<table class="tab-choose"> \
		<tr id="dmwvarset5"> \
			<td width=1% class="tab-choose-ico">&nbsp;</td> \
			<td> \
				<input type=radio name="dmworpayment" value="dmworpayment_05" id="dmworpayment_05" onclick="tabChoose($(\'#dmwvarset5\'));"> \
				<b><label for="dmworpayment_05">Наличные</label></b><br> \
				<i>Оплата наличными курьеру при получении товара</i> \
			</td> \
		</tr> \
		<tr id="dmwvarset1"> \
			<td width=1% class="tab-choose-ico">&nbsp;</td> \
			<td> \
				<input type=radio name="dmworpayment" value="dmworpayment_01" id="dmworpayment_01" onclick="tabChoose($(\'#dmsvarset1\'));"> \
				<b><label for="dmworpayment_01">Оплата по квитанции</label></b><br> \
				<i>Оплата по квитанции в ближайшем отделении любого банка. Квитанция на оплату будет оформлена автоматически после оформления заказа.</i> \
			</td> \
		</tr> \
		<tr id="dmwvarset2"> \
			<td width=1% class="tab-choose-ico"><label for="dmworpayment_02"><img src="img/pix/logo_assist.png" width=80 height=80 alt=""></label></td> \
			<td> \
				<input type=radio name="dmworpayment" value="dmworpayment_02" id="dmworpayment_02" onclick="tabChoose($(\'#dmwvarset2\'));"> \
				<b><label for="dmworpayment_02">Кредитная карта (ASSIST)</label></b><br> \
				<i>Оплата онлайн кредитной картой любого банка через систему ASSIST</i> \
				<div class="cardlist"> \
					<img src="img/pix/logo_visa.png" alt="Visa"> \
					<img src="img/pix/logo_mastercard.png" alt="MasterCard"> \
					<img src="img/pix/logo_dinnersclub.png" alt="Dinners Club"> \
				</div> \
			</td> \
		</tr> \
		<tr id="dmwvarset3"> \
			<td width=1% class="tab-choose-ico"><label for="dmworpayment_03"><img src="img/pix/logo_sberbank.png" width=80 height=80 alt=""></label></td> \
			<td> \
				<input type=radio name="dmworpayment" value="dmworpayment_03" id="dmworpayment_03" onclick="tabChoose($(\'#dmwvarset3\'));"> \
				<b><label for="dmworpayment_03">Кредитная карта (Сбербанк)</label></b><br> \
				<i>Оплата онлайн кредитной картой любого банка через платежный терминал Сбербанка</i> \
				<div class="cardlist"> \
					<img src="img/pix/logo_visa.png" alt="Visa"> \
					<img src="img/pix/logo_mastercard.png" alt="MasterCard"> \
				</div> \
			</td> \
		</tr> \
		<tr id="dmwvarset4"> \
			<td width=1% class="tab-choose-ico"><label for="dmworpayment_04"><img src="img/pix/logo_assist.png" width=80 height=80 alt=""></label></td> \
			<td> \
				<input type=radio name="dmworpayment" value="dmworpayment_04" id="dmworpayment_04" onclick="tabChoose($(\'#dmwvarset4\'));"> \
				<b><label for="dmworpayment_04">Электронные деньги</label></b><br> \
				<i>Оплата электронными деньгами через систему ASSIST</i> \
				<div class="cardlist"> \
					<img src="img/pix/logo_webmoney.png" alt="WebMoney"> \
					<img src="img/pix/logo_yandex.png" alt="Яндекс.Деньги"> \
					<img src="img/pix/logo_qiwi.png" alt="Qiwi Кошелек"> \
				</div> \
			</td> \
		</tr> \
		</table> \
	</div> \
	<div class="buts rtext"> \
		<button type=submit class="lfloat" onclick="closemodwin(\'dmwpaymethod\');">Выбрать</button> \
		<button type=button class="bwhite" onclick="closemodwin(\'dmwpaymethod\');">Отменить</button> \
	</div> \
</div>');
