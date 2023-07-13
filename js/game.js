/*
TODO: take Duke Nukam sprite for player
*/

const config = {
  type: Phaser.WEBGL,
  width: Settings.SCREEN_WIDTH,
  height: Settings.SCREEN_HEIGHT,
  backgroundColor: 0x111111,
  scene: [
    LoadingScene,
    PlayScene
  ],
  pixelArt: true,
  //   scene: {
  //     preload: preload,
  //     create: create,
  //     update: update,
  //   },
};

var game = new Phaser.Game(config);


// game.scene.add('LoadingScene', LoadingScene);
// game.scene.add('PlayScene', PlayScene);

// function preload() {
//   console.log('Game preload');
/**
 * Load assets:
 * - Sound effects
 * - Images
 * - Load sprites
 */
// game.load.image(imageName, filePath);
// game.load.audio()
// game.load.spritesheet(spriteName, spriteFilePath, 32, 32);
// }

// function create() {
//   console.log('Game create');
// game.physics.startSystem(Phaser.Physics.ARCADE);
// }

// function update() {
//   console.log('Game update');
// }
