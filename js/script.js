let start = false;
let resSt, resAu;
const engine = new Audio('./audio/engine.mp3');
const run = new Audio('./audio/run.mp3');
const engineStart = new Audio('./audio/engine-start.mp3');
const pedal = document.querySelector('.treadle');
    engine.loop = true;
let text = document.querySelector('.engine-start');


document.querySelector('.start').addEventListener('click', () => {
    if (start === false){
        start = true;
        text.innerHTML = 'STOP';
        t1 = setTimeout(()=>{
            document.querySelector('.taho-line').style.width = '250px';
        }, 4500 ) ;
        t2 = setTimeout(()=>{
            document.querySelector('.taho-line').style.width = '100px';
        }, 6500 ) ;
        t3 = setTimeout(()=>{
            engine.play();
        }, 8100 ) ;
        engineStart.play();
        pedal.addEventListener('click', pushTreadle);
    } else {
        start = false;
        t1 = clearTimeout(t1);
        t2 = clearTimeout(t2);
        t3 = clearTimeout(t3);
        engine.currentTime = 0;
        engineStart.currentTime = 0;
        text.innerHTML = 'START';
        engine.pause();
        engineStart.pause();
        pedal.removeEventListener('click', pushTreadle);
        document.querySelector('.taho-line').style.width = '0px';
        pedal.classList.remove('push-treadle');
    }
})

function pushTreadle() {
    resSt = clearTimeout(resSt);
    resAu = clearTimeout(resAu);
    pedal.classList.add('push-treadle');
    document.querySelector('.taho-line').style.width = '400px';
    run.play();
    stopTreadle();
}

function stopTreadle() {
    resSt = setTimeout(()=>{
        pedal.classList.remove('push-treadle');
        document.querySelector('.taho-line').style.width = '100px';
    }, 2000);
    resAu = setTimeout(()=>{
        run.pause();
        run.currentTime = 0;
    }, 2500);
}


