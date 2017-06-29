class Clock {
  constructor() {
    let date = new Date();
    this.h = date.getHours();
    this.m = date.getMinutes();
    this.s = date.getSeconds();
    this.printTime();
    setInterval(this._tick.bind(this), 1000);

  }

  printTime() {
    // let h = this.h;
    // let m = this.m;
    // let s = this.seconds;
    if (this.s === 60) {
      this.s = 0;
      this.m++;
      if (this.m === 60) {
        this.m = 0;
        this.h++;
      }
    }

    console.log(`${this.h}:${this.m}:${this.s}`);
  }

  _tick() {
    console.log(this);
    this.s++;
    return this.printTime();
  }
}

let time = new Clock();
