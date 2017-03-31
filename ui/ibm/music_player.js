var audioObj = new Audio();

function start_music(type){
    var url = "audio/Take_Five.wav";
    if ( type == "ジャズ" ) {
       url = "audio/Take_Five.wav";
    }
    if ( type == "ロック" ) {
       url = "audio/Hotel_California.wav";
    }
    if ( type == "ポップス" ) {
       url = "audio/Dragon_Night.wav";
    }
    audioObj.pause();
    audioObj = new Audio(url);
    audioObj.play();
}

function stop_music(){
    audioObj.pause();
}

