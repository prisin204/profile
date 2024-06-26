$(document).ready(function(){
    function initSlider(container) {
        let currentImg = 0;
        const images = container.find('img');
        const totalImages = images.length;

        function updateSlider() {
            images.hide();
            images.eq(currentImg).show();
        }

        container.find('.pre').click(function(){
            currentImg = (currentImg > 0) ? currentImg - 1 : totalImages - 1;
            updateSlider();
        });

        container.find('.next').click(function(){
            currentImg = (currentImg < totalImages - 1) ? currentImg + 1 : 0;
            updateSlider();
        });

        updateSlider();
    }

    $('.childSlider').each(function(){
        initSlider($(this));
    });
});


var contentBox = document.querySelector('.fourthBox');
var btn = document.querySelectorAll('button-62');