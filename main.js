'use strict';
{
    const timer = document.getElementById('timer');
    const start = document.getElementById('start');
    const stop = document.getElementById('stop');
    const reset = document.getElementById('reset');
    
    let startTime;
    let timeoutId;
    let elapsedTime = 0; //경과시간
    
    function countUp(){
        // console.log(Date.now() - startTime);
        const d = new Date(Date.now() - startTime + elapsedTime);
        const m = String(d.getMinutes()).padStart(2, '0');
        const s = String(d.getSeconds()).padStart(2, '0');
        const ms = String(d.getMilliseconds()).padStart(3, '0');
        timer.textContent = `${m}:${s}.${ms}`;
        timeoutId = setTimeout(()=> {
            countUp();
        }, 10);
    }
    start.addEventListener('click', ()=> {
        startTime = Date.now();
        countUp();
    });

    stop.addEventListener('click', ()=> {
        clearTimeout(timeoutId);
        elapsedTime += Date.now() - startTime;
    });

    reset.addEventListener('click', ()=> {
        timer.textContent = '00:00.000';
        elapsedTime = 0;
    });
}
