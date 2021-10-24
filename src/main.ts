import * as Phaser from 'phaser';
import { gameConfig } from './config';
import { GameScene } from './scenes';

export const game = new Phaser.Game(gameConfig(new GameScene()));
