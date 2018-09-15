$(document).ready(function() {
    var a = document.querySelector('.js-fixed-sroll'), b = null, P = 30;  // если ноль заменить на число, то блок будет прилипать до того, как верхний край окна браузера дойдёт до верхнего края элемента. Может быть отрицательным числом

    var mq = window.matchMedia('(min-width: 768px)');
    if (mq.matches) {
        window.addEventListener('scroll', Ascroll, false);
        document.body.addEventListener('scroll', Ascroll, false);
    }

    function Ascroll() {
        if (a == null) {
            return false;
        }
        if (b == null) {
            let Sa = getComputedStyle(a, ''), s = '';
            for (var i = 0; i < Sa.length; i++) {
                if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
                    s += Sa[i] + ': ' + Sa.getPropertyValue(Sa[i]) + '; '
                }
            }
            b = document.createElement('div');
            b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
            a.insertBefore(b, a.firstChild);
            var l = a.childNodes.length;
            for (var i = 1; i < l; i++) {
                b.appendChild(a.childNodes[1]);
            }
            a.style.height = b.getBoundingClientRect().height + 'px';
            a.style.padding = '0';
            a.style.border = '0';
            a.style.zIndex = '100';
        }

        let stopBlock = document.querySelector('.js-stop-aside-scroll');
        let bottomBorder = stopBlock.getBoundingClientRect().top;
        let Ra = a.getBoundingClientRect();
        let  R = Math.round(Ra.top + b.getBoundingClientRect().height - bottomBorder + 80);  // селектор блока, при достижении верхнего края которого нужно открепить прилипающий элемент;  Math.round() только для IE; если ноль заменить на число, то блок будет прилипать до того, как нижний край элемента дойдёт до футера
        let topMinusConst = Ra.top - P;

        if (topMinusConst <= 0) {

            if (topMinusConst <= R) {
                b.className = 'block-stop';
                b.style.top = -R + 'px';
            } else {
                b.className = 'block-fix';
                b.style.top = P + 'px';
            }
        } else {
            b.className = '';
            b.style.top = '';
        }
        window.addEventListener('resize', function() {
            a.children[0].style.width = getComputedStyle(a, '').width
        }, false);
    }

    let el = document.getElementById('top');

    $(window).on('scroll', function() {
        let rect = el.getBoundingClientRect().top;

        if (rect >= -3) {
            $('.b-header').removeClass('b-header--is-scroll')
            return
        }
        $('.b-header').addClass('b-header--is-scroll')

    });
});

