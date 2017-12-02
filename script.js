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