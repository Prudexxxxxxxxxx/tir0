let audio = document.querySelector('audio');
document.addEventListener('click', function(e){
    let x = e.pageX;
    let y = e.pageY;

    let div = document.createElement('div');
    div.classList.add('bullet');
    div.style.left = `${x}px`
    div.style.top = `${y}px`

    document.body.append(div)
    audio.pause();
    audio.currentTime = 0;
    audio.play();

})
