$(document).ready(function () {
    fakeloadercustom();
    typed();

});

 function fakeloadercustom() {

    $("#fakeloader").fakeLoader({
        timeToHide: 2000, //Time in milliseconds for fakeLoader disappear
        zIndex: "999", //Default zIndex
        spinner: "spinner7", //Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7'
        bgColor: "#212529", //Hex, RGB or RGBA colors
        // imagePath:"yourPath/customizedImage.gif" //If you want can you insert your custom image
    });

}


function typed() {
    let typed = new Typed(".typed", {
        strings: ['Coming Soon Variant ', 'We Are Creative ', 'We Are Unique '],
        typeSpeed: 80,
        backSpeed: 30,
        fadeOut: true,
        loop: true
    });

}