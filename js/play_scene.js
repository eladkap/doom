class PlayScene extends Phaser.Scene {
  constructor() {
    super('PlayScene');
    this.marine = null;
    this.marineSprite = null;
  }

  init() {
    console.log('PlayScene init');
  }

  preload() {
    console.log('PlayScene preload');
  }

  create() {
    console.log('PlayScene create');
    // this.physics.startSystem(Phaser.Physics.ARCADE);
    
    this.createBackground();
    this.createPlatforms();
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
    this.updateMarine();
  }

  createBackground() {
    console.log('setBackground');
    // this.background = this.add.image(0, 0, 'background-night');
    this.background = this.add.tileSprite(0, 0, config.width*2, config.height*2, 'background-night');
    // const graphics = this.add.graphics();
    // graphics.fillGradientStyle(0x444444, 0x444444, 0x11111, 0x11111);
    // graphics.fillRect(0, 0, Settings.SCREEN_WIDTH, Settings.SCREEN_HEIGHT);
  }

  createPlatforms() {
    this.platforms = this.add.group();
    this.platforms.enableBody = true;
    this.ground = this.platforms.create(0, config.height - 64, 'ground');
    this.ground.scale.setTo(2, 2);
    this.ground.body.immovable = true;
  }

  createMarine() {
    // this.marine = new Marine(this.add.image(Settings.MARINE_POS_X, Settings.MARINE_POS_Y, 'marine'));
    this.marineSprite = this.add.sprite(Settings.MARINE_POS_X, Settings.MARINE_POS_Y, 'marine');
    
    this.marine = new Marine(this.marineSprite);
    this.marineSprite.animations.add('right', [0, 3], 10, true);
    this.marineSprite.animations.add('left', [0, 3], 10, true);
    // this.anims.create({
    //   key: 'marine_anim',
    //   frames: this.anims.generateFrameNumbers('marine'),
    //   frameRate: 4,
    //   repeat: -1
    // });
    // this.marineSprite.play('marine_anim');
  }

  moveMarineRight() {
    this.marine.moveRight();
    this.marineSprite.play('marine_anim');
  }

  moveMarineLeft() {
    this.marine.moveLeft();
    this.marineSprite.play('marine_anim');
  }

  updateMarine() {
    if (this.cursors.right.isDown) {
      this.moveMarineRight();
      this.updateBackground(1);
      return;
    }
    if (this.cursors.left.isDown) {
      this.moveMarineLeft();
      this.updateBackground(-1);
      return;
    }
    // this.marineSprite.stop();
  }

  updateBackground(direction) {
    this.background.tilePositionX += 0.5 * direction;
  }
}
