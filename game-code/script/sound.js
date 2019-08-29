class Sound {
    constructor () {
      this.sounds = {};
    }
  
    loadSounds (sounds) {
      for (let name in sounds) {
        const url = sounds[name];
        this.sounds[name] = new Audio(url);
      }
    }
  
    play (name, options) {
      const sound = this.sounds[name];
      sound.loop = options && options.loop || false;
      sound.volume = options && options.volume || 0.05;
      sound.play();
      // return sound;
    }

    stop (name) {
      const sound = this.sounds[name];
      sound.pause();
      sound.currentTime = 0;
    }
  }