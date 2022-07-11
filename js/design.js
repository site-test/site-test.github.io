
$(function() {


	$(".search-toggler").on("click", function() {
		$(".search").addClass("opened");
	});

	var searchhoverDate = 0;
	$(".search").on("mouseleave", function() {
		var d = (new Date()).getTime(), $this = $(this);
		searchhoverDate = d;
		setTimeout(function() {
			if (searchhoverDate !== d)
			return;
			$this.removeClass("opened");
		}, 1000);
		}).on("mouseenter", function() {
		searchhoverDate = 0;
	});



	var menuhoverDate = 0;
	$(".mmenu-item").on("mouseenter", function() {
		var d = (new Date()).getTime(), $this = $(this);
		menuhoverDate = d;
		setTimeout(function() {
			if (menuhoverDate !== d)
			return;
			$this.addClass('hover');
		}, 1000);
		}).on("mouseleave", function() {
		menuhoverDate = 0;
		$(this).removeClass('hover');
	});



	$(".blocktitle").on("click", function() {
		$(this).toggleClass("opened");
		$(this).next().slideToggle(200);
	});



	$(".opfilter a").on("click", function() {
		var $this = $(this);
		if ($this.hasClass("dis")) {
			return;
		}
		if ($this.hasClass("act")) {
			$this.removeClass("act");
		} else {
			$this.addClass("act");
		}
	});

	$(".radio a").on("click", function() {
		var $this = $(this);
		$this.parent().siblings().find("a").removeClass("act");
		$this.addClass("act");
	});


	$(function() {
		$('.modwin').click( function (e) {
			if ( e.target == this )
				closemodwin();
			});
	});


});



// карточка товара

function chooseSize(x){
	x.closest('.prod-size').find('button').removeClass('act');
	x.closest('.prod-size').find('button').removeClass('js-act');
	x.closest('.prod-size').find('button').removeClass('js-act-oos');
	if (x.hasClass('prod-size-outofstock')) {
		x.addClass('js-act-oos');
		x.closest('.prod-order').find('.bcart').removeClass('act').html('Сообщить о поступлении');
	} else {
		x.addClass('js-act');
		x.closest('.prod-order').find('.bcart').removeClass('act').html('Добавить в корзину');
	}
	x.addClass('act');
	$('.prod-button .feedback').hide();
}


function addToCart(x){
	if (x.hasClass('act')) {
		location.href = 'cart.html';
	} else if (x.closest('.prod-order').find('.prod-size button').hasClass('js-act')) {
		x.siblings('.feedback').removeClass('fber').addClass('fbok').slideDown(200).find('p').html('Добавлено в корзину');
		x.addClass('act').html('Оформить заказ');
	} else if (x.closest('.prod-order').find('.prod-size button').hasClass('js-act-oos')) {
		openmodwin('dmwoutofstock');
	} else {
		x.siblings('.feedback').addClass('fber').slideDown(200).find('p').html('Выберите размер');
	}
}


function setFav(x){
	if (x.hasClass('act')) {
		x.removeClass('act');
		x.attr('title','Отложить');
		x.find('.icotext').html('Отложить');
	} else {
		x.addClass('act');
		x.attr('title','Отложено');
		x.find('.icotext').html('Отложено');
	}
}





// меню

function showMainMenu(){
	$('body').toggleClass('openmmenu');
	$('.mmenu-toggler').toggleClass('iclose');
}

function showSubMenu(){
	$('.smenu').toggleClass('act');
}

function showTextMenu(){
	$('.tmenu').toggleClass('act');
}




// фильтр каталога

function showFilter(){
	$('body').toggleClass('noscroll');
	$('.options-wrap').toggleClass('act');
}



// обратная связь

function feedbackTheme(){
	if (dmwfbtsel.options[dmwfbtsel.selectedIndex].value == '0'){
		$('#dmwmestheme_01').hide();
		$('#dmwmestheme_02').hide();
	}
	if (dmwfbtsel.options[dmwfbtsel.selectedIndex].value == '1'){
		$('#dmwmestheme_01').show();
		$('#dmwmestheme_02').hide();
	}
	if (dmwfbtsel.options[dmwfbtsel.selectedIndex].value == '2'){
		$('#dmwmestheme_01').hide();
		$('#dmwmestheme_02').show();
	}
}



// оформление заказа

function tabChoose(x){
	if (x.hasClass("act"))
	return;
	x.closest("table").find("tr.act").removeClass("act")
	x.addClass("act")
}



// магазины

function shopOnMap(){
  $('html, body').animate({'scrollTop': $('.shop-map').offset().top-20},500,'linear');
}

function shopOnMapMobile(){
	$('body').toggleClass('noscroll');
	$('.shop-map').toggleClass('act');
}





// модальные окна

function openmodwin(element) {
    var el = $("#" + element);
    if (!el.length) {
        if (typeof(console) === "object")
            console.log("modwin element does not exist");
    } else {
        $(".modwin").children(".mwcontent").hide();
        $(".modwin").show();
        var cs = getContentSize(), ps = getPageSize(), scr = getScreenSize();
        el.show();
        centralAlign(el, false);
    }
}

function closemodwin(element, hide) {
    if (element === undefined) {
        $(".modwin").children(".mwcontent").last(":visible").hide();
    } else {
        $("#" + element).hide();
    }
    $(".modwin").hide();
}

function centralAlign(el, fullscreen) {
    if (typeof(fullscreen) === "undefined")
        fullscreen = false;
    if (el.attr("id") === undefined) {
        if (typeof(console) === "object")
            console.log("central align on empty element");
        return false;
    }
    var page, scroll = getScrollValue();
    if (!fullscreen)
        page = getPageSize();
    var t = (fullscreen ? 0 : Math.round((page.height - el.height())/5)) + scroll.top;
    var l = (fullscreen ? 0 : Math.round((page.width - el.outerWidth(false))/2)) + scroll.left;
    t = (t > 0) ? t : 0;
    l = (l > 0) ? l : 0;
    el.css("top", t).css("left", l);
    if (fullscreen)
        $("body").attr("style", "overflow: hidden;");
    return true;
}

function getContentSize() {
    var scr = getScreenSize();
    var w1 = ((typeof(window.scrollMaxY) === "undefined") || (document.body.scrollWidth > window.scrollMaxY)) ? document.body.scrollWidth : window.scrollMaxY;
    var w2 = (document.body.scrollWidth > scr.width) ? document.body.scrollWidth : scr.width
    //var ps = getPageSize();
    //var w3 = ps.width + ((typeof(window.pageYOffset) === "undefined") ? document.body.scrollLeft : window.pageYOffset);
    return {
        "width": Math.max(w1, w2),
        "height": (document.body.scrollHeight > scr.height) ? document.body.scrollHeight : scr.height
    };
}

function getPageSize() {
    var scr = getScreenSize();
    var w = ((typeof(window.innerWidth) === "undefined") || (scr.width < window.innerWidth)) ? scr.width : window.innerWidth;
    if ((typeof(document.documentElement.offsetWidth) !== "undefined") && (document.documentElement.offsetWidth > 0))
        w = Math.min(w, document.documentElement.offsetWidth);
    var h = ((typeof(window.innerHeight) === "undefined") || (scr.height < window.innerHeight)) ? scr.height : window.innerHeight;
    if ((typeof(document.documentElement.offsetHeight) !== "undefined") && (document.documentElement.offsetHeight > 0))
        h = Math.min(h, document.documentElement.offsetHeight);
    if (h < scr.height)
        h = scr.height;
    return {
        "width": w,
        "height": h
    };
}

function getScreenSize() {
    if ((typeof(window.orientation) === "undefined")
        || !((window.orientation / 90) % 2)) {
        return {
            "width": screen.availWidth,
            "height": screen.availHeight
        }
    }
    //iPad nightmare
    return {
        "width": screen.availHeight,
        "height": screen.availWidth
    }
}

function getScrollValue() {
    return {
        "top": document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop,
        "left": document.body.scrollLeft ? document.body.scrollLeft : document.documentElement.scrollLeft
    };
}


function customerCardInput(){
	$('.customercard-placeholder').hide();
}
function customerCardBlur(){
	if (! $('#js-customercardinput').val() || $('#js-customercardinput').val() == ' '){
		$('.customercard-placeholder').show();
	}
}
