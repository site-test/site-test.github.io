let magnificPopup = require('magnific-popup');

$(document).ready(function () {
    function getSelectedText(){
        let text = "";
        if (window.getSelection) {
            text = window.getSelection();
        }else if (document.getSelection) {
            text = document.getSelection();
        }else if (document.selection) {
            text = document.selection.createRange().text;
        }
        return text;
    }
    let isCtrl = false;
    $(document).keyup(function (e) {
        if(e.which === 17) isCtrl = false;
    }).keydown(function (e) {
        if(e.which === 17) isCtrl=true;
        if(e.which === 13 && isCtrl === true) {


            let text = getSelectedText().baseNode.data;
            let selectWord = getSelectedText().toString();
            let wheresWaldo = text.indexOf(selectWord);
            let prev = wheresWaldo - 50;
            let next = wheresWaldo + 50;

            if (prev <= 0) {
                prev = 0
            }
            let newString = text.slice(prev, next);
            let activeWord = `<span>${selectWord}</span>`;
            let repl = newString.replace(selectWord, activeWord);
            let complete = '...'+repl+'...';

            const instance = $.magnificPopup.instance;

            instance.open({
                callbacks: {
                    open: function() {
                        $('.b-popup__error').html(complete)
                    },
                },
                items: {
                    src:  '#popup',
                    type: 'inline'
                }
            });

        }
    });

});
