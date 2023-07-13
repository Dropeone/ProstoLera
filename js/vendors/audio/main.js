    $(".sound1-btn").on('click', function() {
        $(".audio-player").removeClass("active");
        $(".sound1").addClass("active");
    });

    $(".sound2-btn").on('click', function() {
        $(".audio-player").removeClass("active");
        $(".sound2").addClass("active");
    });

    $(".sound3-btn").on('click', function() {
        $(".audio-player").removeClass("active");
        $(".sound3").addClass("active");
    });

    $(".sound4-btn").on('click', function() {
        $(".audio-player").removeClass("active");
        $(".sound4").addClass("active");
    });

    $(".sound5-btn").on('click', function() {
        $(".audio-player").removeClass("active");
        $(".sound5").addClass("active");
    });

    $(".sound6-btn").on('click', function() {
        $(".audio-player").removeClass("active");
        $(".sound6").addClass("active");
    });

    $(".sound7-btn").on('click', function() {
        $(".audio-player").removeClass("active");
        $(".sound7").addClass("active");
    });

    $(".sound8-btn").on('click', function() {
        $(".audio-player").removeClass("active");
        $(".sound8").addClass("active");
    });

    $(".sound9-btn").on('click', function() {
        $(".audio-player").removeClass("active");
        $(".sound9").addClass("active");
    });


    $(function() {
        $('.audioplayer').mediaelementplayer({
            alwaysShowControls: true,
            features: ['playpause', 'progress', 'volume'],
            audioVolume: 'horizontal',
            audioWidth: 450,
            audioHeight: 70,
            iPadUseNativeControls: true,
            iPhoneUseNativeControls: true,
            AndroidUseNativeControls: true
        });
    });

    $(".audio-close").on('click', function() {
        $(".audio-player").removeClass("active");
        audio1.pause();
        audio2.pause();
        audio3.pause();
        audio4.pause();
        audio5.pause();
        audio6.pause();
        audio7.pause();
        audio8.pause();
        audio9.pause();
    });

    var audio1 = document.getElementById('sound1');
    var audio2 = document.getElementById('sound2');
    var audio3 = document.getElementById('sound3');
    var audio4 = document.getElementById('sound4');
    var audio5 = document.getElementById('sound5');
    var audio6 = document.getElementById('sound6');
    var audio7 = document.getElementById('sound7');
    var audio8 = document.getElementById('sound8');
    var audio9 = document.getElementById('sound9');

    function playSound1() {
        if (audio2.paused !== true) {
            audio2.pause();
            audio3.pause();
            audio4.pause();
            audio5.pause();
            audio6.pause();
            audio7.pause();
            audio8.pause();
            audio9.pause();
            audio1.play();
        } else {
            audio1.play();
        }
    }

    function playSound2() {
        if (audio1.paused !== true) {
            audio1.pause();
            audio3.pause();
            audio4.pause();
            audio5.pause();
            audio6.pause();
            audio7.pause();
            audio8.pause();
            audio9.pause();
            audio2.play();
        } else {
            audio2.play();
        }
    }

    function playSound3() {
        if (audio1.paused !== true) {
            audio1.pause();
            audio2.pause();
            audio4.pause();
            audio5.pause();
            audio6.pause();
            audio7.pause();
            audio8.pause();
            audio9.pause();
            audio3.play();
        } else {
            audio3.play();
        }
    }

    function playSound4() {
        if (audio1.paused !== true) {
            audio1.pause();
            audio2.pause();
            audio3.pause();
            audio5.pause();
            audio6.pause();
            audio7.pause();
            audio8.pause();
            audio9.pause();
            audio4.play();
        } else {
            audio4.play();
        }
    }

    function playSound5() {
        if (audio1.paused !== true) {
            audio1.pause();
            audio2.pause();
            audio3.pause();
            audio4.pause();
            audio6.pause();
            audio7.pause();
            audio8.pause();
            audio9.pause();
            audio5.play();
        } else {
            audio5.play();
        }
    }

    function playSound6() {
        if (audio1.paused !== true) {
            audio1.pause();
            audio2.pause();
            audio3.pause();
            audio4.pause();
            audio5.pause();
            audio7.pause();
            audio8.pause();
            audio9.pause();
            audio6.play();
        } else {
            audio6.play();
        }
    }


    function playSound7() {
        if (audio1.paused !== true) {
            audio1.pause();
            audio2.pause();
            audio3.pause();
            audio4.pause();
            audio5.pause();
            audio6.pause();
            audio8.pause();
            audio9.pause();
            audio7.play();
        } else {
            audio7.play();
        }
    }

    function playSound8() {
        if (audio1.paused !== true) {
            audio1.pause();
            audio2.pause();
            audio3.pause();
            audio4.pause();
            audio5.pause();
            audio6.pause();
            audio7.pause();
            audio9.pause();
            audio8.play();
        } else {
            audio8.play();
        }
    }

    function playSound9() {
        if (audio1.paused !== true) {
            audio1.pause();
            audio2.pause();
            audio3.pause();
            audio4.pause();
            audio5.pause();
            audio6.pause();
            audio8.pause();
            audio7.pause();
            audio9.play();
        } else {
            audio9.play();
        }
    }