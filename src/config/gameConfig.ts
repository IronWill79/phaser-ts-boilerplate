export const gameConfig: (
  scenes: Phaser.Scene | Phaser.Scene[]
) => Phaser.Types.Core.GameConfig = (scenes) => {
  return {
    title: 'Phaser TypeScript boilerplate',
    type: Phaser.AUTO,
    scale: {
      width: 800,
      height: 600,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    physics: {
      default: 'arcade',
      arcade: {
        debug: true,
      },
    },
    parent: 'game',
    backgroundColor: '#000000',
    scene: scenes,
  };
};
