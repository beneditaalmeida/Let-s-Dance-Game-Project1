class Control {
    constructor (callbacks) {
      this.callbacks = callbacks;
    }
  
    setKeyBindings () {
      window.addEventListener('keydown', event => {
        const key = event.keyCode;
        if ([32, 37, 38, 39, 40].includes(key)) {
          event.preventDefault();
          switch (key) {
            case 32:
              this.callbacks.middle();
              break;
            case 38:
              this.callbacks.up();
              break;
            case 37:
              this.callbacks.left();
              break;
            case 39:
              this.callbacks.right();
              break;
            case 40:
              this.callbacks.down();
            break;
          }
        }
      });
    }
}