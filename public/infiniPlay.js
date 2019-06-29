function infiniPlay() {
    let selection = floor(random(0, songList.length));
    if (played.length > 0) {
        for (i = 0; i < played.length; i++) {
            if (songlist[selection] == played[i]) {
                selection = floor(random(0, songList.length));
            } 
        }
    } else {
        songList[selection].play();
        played.push(songList[selection]);
    }

}