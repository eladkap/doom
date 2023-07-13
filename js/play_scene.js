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
    
    this.setBackground();
    
    this.createMarine();

    this.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    this.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    this.cursors = this.input.keyboard.createCursorKeys();

    // this.background.setOrigin(0, 0);

    // this.add.text(20, 20, 'Playing game', {
    //   font: '25px Arial',
    //   fill: 'yellow',
    // });
  }

  update() {
    if (this.cursors.right.isDown) {
      this.moveMarineRight();
    }
    if (this.cursors.left.isDown) {
      this.moveMarineLeft();
    }
  }

  setBackground() {
    console.log('setBackground');
    // this.background = this.add.image(config.width / 2, config.height / 2, 'background');
    const graphics = this.add.graphics();
    // graphics.fillGradientStyle(0x8B0000, 0x8B0000, 0xC04000, 0xC04000);
    graphics.fillGradientStyle(0x444444, 0x444444, 0x11111, 0x11111);
    graphics.fillRect(0, 0, Settings.SCREEN_WIDTH, Settings.SCREEN_HEIGHT);
  }

  createMarine() {
    this.marine = this.add.image(Settings.MARINE_POS_X, Settings.MARINE_POS_Y, 'marine');
    this.marine.setScale(1);
  }

  moveMarineRight() {
    this.marine.flipX = false;
    this.marine.x += Settings.MOVEMENT_UNIT;
  }

  moveMarineLeft() {
    this.marine.flipX = true;
    this.marine.x -= Settings.MOVEMENT_UNIT;
  }
}
