 const container = document.querySelector('.fireworks')
 // const fireworks = new Fireworks.default(container)
 
   const fireworks = new Fireworks.Fireworks(container, {
  autoresize: true,
  opacity: 0.5,
  acceleration: 1.05,
  friction: 0.97,
  gravity: 1.5,
  particles: 50,
  traceLength: 3,
  traceSpeed: 10,
  explosion: 5,
  intensity: 30,
  flickering: 50,
  lineStyle: 'round',
  hue: {
    min: 0,
    max: 360
  },
  sound:{
  enabled: true,
  files: [
        './assets/audio/explosion0.mp3',
        './assets/audio/explosion1.mp3',
        './assets/audio/explosion2.mp3'
      ],
      volume: {
        min: 4,
        max: 8
      }
  },
  delay: {
    min: 30,
    max: 60
  },
  rocketsPoint: {
    min: 50,
    max: 50
  },
  lineWidth: {
    explosion: {
      min: 1,
      max: 3
    },
    trace: {
      min: 1,
      max: 2
    }
  },
  brightness: {
    min: 50,
    max: 80
  },
  decay: {
    min: 0.015,
    max: 0.03
  },
  mouse: {
    click: false,
    move: false,
    max: 1
  }
}) 

  function iniciar() {
    fireworks.start()

  }


  document.getElementById("iniciarBtn").addEventListener("click", iniciar)
