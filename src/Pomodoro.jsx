function Pomodoro () {
    let startTime = 0;
    let elapsedTime = 0;
    let timerInterval = null;

    function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTimer, 1000);
    }
    function stopTimer() {
        clearInterval(timerInterval);
        elapsedTime = Date.now() - startTime;
      }
      
      function resetTimer() {
        clearInterval(timerInterval);
        startTime = 0;
        elapsedTime = 0;
        document.getElementById("timer").innerHTML = "1:00";
      }
      
      function updateTimer() {
        elapsedTime = Date.now() - startTime;
        let seconds = 1500-Math.floor(elapsedTime / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        seconds = seconds % 60;
        minutes = minutes % 60;
        if (seconds == 0) {
          document.alert("Time UP")
        } else {}
        document.getElementById("timer").innerHTML =
          `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
      }
      
      function padZero(time) {
        return (time < 10 ? "0" : "") + time;
      }

      

    return (
        <div id="pomodoro"> 
            <h2>Pomodoro Based Timer</h2>

            <h1 id="timer">00:25:00</h1>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    );
}

export default Pomodoro