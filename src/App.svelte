<script>
  import Box from './Box.svelte';
  import Widget from './Widget.svelte';
  
  let time = new Date();
  let theme;
  let hour = time.getHours();
  let message;

  if (hour > 17 || hour < 6) {
    theme = "dark";
  } else {
    theme = "light";
  }

  if (hour >= 6 && hour < 12) {
    message = "Good morning!"
  } else if (hour >= 12 && hour < 6) {
    message = "Good afternoon!"
  } else {
    message = "Good evening!"
  }

  document.documentElement.setAttribute("theme", theme)
  
  const boxes = [
  { name: "qBittorent", c: "#EAAC8B", loc: "http://192.168.1.2:8080"},
  { name: "Radarr", c: "#E56B6F", loc: "http://192.168.1.2:7878" },
  { name: "Home Assistant", c: "#B56576", loc: "http://192.168.1.2:8123" },
  { name: "Jellyfin", c: "#8C61A8", loc: "http://192.168.1.2:8096" },
  { name: "PiHole", c: "#5387C4", loc: "http://192.168.1.2/admin" },
  { name: "Files", c: "#8DAA91" }
  ]

  onkeydown = (e) => {
    switch (e.key.toLowerCase()) {
      case "q": // special case for qbittorent because some privacy feature
        var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);  
        if (isSafari) {
          let clicker = document.createElement("a");
          clicker["href"] = boxes[0].loc;
          clicker["rel"] = "noopener noreferrer";
          clicker.click();
        } else {
          window.open(boxes[0].loc, '_self', 'noopener noreferrer')
        }
        
        break;
      case "r":
        window.open(boxes[1].loc, '_self');
        break;
      case "h":
        window.open(boxes[2].loc, '_self');
        break;
      case "j":
        window.open(boxes[3].loc, '_self');
        break;
      case "p":
        window.open(boxes[4].loc, '_self');
        break;
      case "f":
        window.open(boxes[5].loc, '_self');
        break;
    } 
  }
</script>

<main>
  <div class="title-bar">
    <h1>{message}</h1>
    
    <Widget/>
    <!-- <p>time</p> -->
  </div>
  
  <div class="grid">
    {#each boxes as box}
    <Box box={box}/>
    {/each}
  </div>
</main>

