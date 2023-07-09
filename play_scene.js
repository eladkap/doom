class PlayScene extends Phaser.Scene {
  constructor() {
    super('PlayScene');
  }

  init() {
    console.log('PlayScene init');
  }

  preload() {
    console.log('PlayScene preload');
  }

  create() {
    console.log('PlayScene create');
    this.background = this.add.image(0, 0, 'background');
    this.background.setOrigin(0, 0);

    this.add.text(20, 20, 'Playing game', {
      font: '25px Arial',
      fill: 'yellow',
    });
  }

  update() {
    // console.log('PlayScene update');
  }
}
