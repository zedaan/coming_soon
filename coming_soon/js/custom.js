$(document).ready(function() {
    init();


});

function timer() {
    // alert("ready");
    $(".example").TimeCircles({
        start:true,
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

$(document).ready({})