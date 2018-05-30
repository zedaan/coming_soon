$('document').ready(function () {

    vegas();
    timer();

});

/*vegas start*/
function vegas() {
    $('.vegas').vegas({
        slides: [
                        
                { src: 'img/bg/bg7.jpg'},
                {src: 'img/bg/bg1.jpg'},
                {src: 'img/bg/bg10.jpg'},
                {src: 'img/bg/bg6.jpg'},

        ],

        delay: 5000,
        timer: false,
        shuffle: false,
        firstTransitionDuration: 2000,
        transition: ['slideleft', 'zoomOut', 'swirlLeft'],
        animation: ['kenburnsUp', 'kenburnsDown', 'kenburnsLeft'],
        transitionDuration: 2000,
        overlay: 'frameworks/vegas/overlays/08.png',
    });

}

//Timer
function timer() {
    // alert("ready");
    $(".example").TimeCircles({
        start: true,
        refresh_interval: 1,
        count_past_zero: false,
        circle_bg_color: "#ddd",
        use_background: true,
        fg_width: 0.02,
        bg_width: 0.2,
        time: {
            Days: {
                color: "#fff"
            },
            Hours: {
                color: "#fff"
            },
            Minutes: {
                color: "#fff"
            },
            Seconds: {
                color: "#fff"
            }
        }
    });

}