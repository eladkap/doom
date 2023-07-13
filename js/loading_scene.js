class LoadingScene extends Phaser.Scene {
  constructor() {
    super('LoadingScene');
  }

  init() {
    console.log('LoadingScene init');
  }

  preload() {
    console.log('LoadingScene preload');
    this.add.text(config.width / 2, config.height / 2, 'Loading ...', {'fontSize': 32});

    /* todo: Load assets (sound and image files) */
    this.load.image('background-day', 'assets/img/background/bg_mars_day.jpg');
    this.load.image('background-night', 'assets/img/background/bg_mars_night.jpg');
    // this.load.image('marine', 'assets/img/sprites/marine/marine_right_tr.png');
    this.load.spritesheet('marine', 'assets/img/sprites/marine/marine_sprite_sheet_right.png', {
      frameWidth: 112,
      frameHeight: 375/3
    });
    this.load.spritesheet('marine', 'assets/img/sprites/marine/marine_sprite_sheet_left.png', {
      frameWidth: 112,
      frameHeight: 375/3
    });

  }

  create() {
    console.log('LoadingScene create');
    this.scene.start('PlayScene');
  }

  update() {
    // console.log('LoadingScene update');
  }
}
