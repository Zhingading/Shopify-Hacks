  function arms() {
      console.log('Arms');
      var page = Math.floor((Math.random() * 2) + 1); 
      if(page == 1)
      window.location.href = "arm1.html";
      else 
      window.location.href = "arm2.html";

  } 

  function legs() {
      console.log('Legs');
      var page = Math.floor((Math.random() * 2) + 1); 
      if(page == 1)
      window.location.href = "legs1.html";
      else 
      window.location.href = "legs2.html";
}


  function core() {
      console.log('Core');
      var page = Math.floor((Math.random() * 2) + 1); 
      if(page == 1)
      window.location.href = "core1.html";
      else 
      window.location.href = "core2.html";
  }

  var timeRemaing = 60;
  
  function startCountdown() {

    console.log("started");
    var interval = setInterval(function() {
      timeRemaing--;
      updateTime();
      if (timeRemaing == 0) {
        clearInterval(interval);
      }
    }, 1000);
  }
  
  function updateTime() {
    var minutes = Math.floor(timeRemaing/60);
    var seconds = timeRemaing % 60;
  
  
    var time = minutes.toString() + ":" + (seconds.toString().length == 1 ? '0' : '') + seconds.toString();
  
    document.getElementById('time-remaining').innerHTML = time;
  }