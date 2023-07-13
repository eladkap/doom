class LoadingScene extends Phaser.Scene {
  constructor() {
    super('LoadingScene');
  }

  init() {
    console.log('LoadingScene init');
  }

  preload() {
    console.log('LoadingScene preload');
    /* todo: Load assets (sound and image files) */
    this.load.image('background', 'assets/img/background/bg_dark2.png');
    this.load.image('marine', 'assets/img/sprites/marine/marine_right_tr.png');

  }

  create() {
    console.log('LoadingScene create');
    // this.add.text(20, 20, 'Loading scene...');
    this.scene.start('PlayScene');
  }

  update() {
    // console.log('LoadingScene update');
  }
}
