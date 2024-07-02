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
var targetElement = document.querySelector('.targetName');

function textSplitter(targetElement){
    
    var target = document.querySelector(targetElement);
    var tContent = target.textContent;
    var splitedText = tContent.split("");
    var clutter="";
    var classNum = "";
    var counter = 0;
    var lenth = splitedText.length;
    var half =  Math.floor(lenth/2);
    
    
    //loop to add span to each element of target ;
    splitedText.forEach(function (item) {
        if(counter < half){
            classNum = "a";
            counter++;
        }else{
            classNum ="b";
        }
        clutter +=`<span class=${classNum}>${item}</span>`;
    //to set the span added elements on the html page ;
    target.innerHTML= clutter;
    });
    }
    textSplitter(".targetName"); //put targeted element and get the splitted elements;
    
    //here we will going to add gasp on elements;
    
    gsap.from(".targetName .a",{
        y:100,  //set the span display inline block from css ,because the transform properties are not applicable for inline elements;
        opacity:0,
        duration:1,
        stagger:.2,
        delay:0.1,
        ease:"bounce",
    })
    gsap.from(".targetName .b",{
        y:100,  //set the span display inline block from css ,because the transform properties are not applicable for inline elements;
        opacity:0,
        duration:1,
        stagger:-0.2,
        delay:0.1,
        ease:"bounce"
    })

    //animation on photo

    gsap.from(".proPhoto",{
    duration: 1,
    opacity: 0,
    scale:.3,
    ease:"bounce",
    })