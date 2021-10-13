import { Container, Graphics, Text } from 'pixi.js'

export class Node extends Container {
  constructor(msg: string) {
    super();

    const graphics = new Graphics();
    graphics.beginFill(0xFF0000);
    graphics.drawCircle(0, 0, 20)
    graphics.endFill();

    const text = new Text(msg);
    text.x = -text.width / 2;
    text.y = 20;
    this.addChild(text)

    this.addChild(graphics);
  }
}