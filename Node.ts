import { Container, Graphics, Sprite, Text, TextStyle, Texture } from "pixi.js";

export class Node extends Container {
  constructor(params: { title: string; url?: string; x: number; y: number, radius?: number, fontSize?: number }) {
    super();

    this.x = params.x;
    this.y = params.y;

    this.interactive = true;
    this.cursor = "hand";

    this.on("mousedown", (e) => {
      e.stopPropagation();
    });

    if (params.url) {
      this.on("click", (e) => {
        window.open(params.url, "_blank");
      });
    }

    const circleRadius = params.radius || 10;

    const graphics = new Graphics();
    graphics.beginFill(0xffffff);
    graphics.drawCircle(0, 0, circleRadius);
    graphics.endFill();

    const style = new TextStyle({
      fill: ["white", "white"],
      fontSize: params.fontSize || 12,
      align: "center"
    });
    const text = new Text(params.title, style);
    text.anchor.set(0.5);
    // text.x = -text.width / 2;
    text.y = -text.height - circleRadius;
    this.addChild(text);

    this.addChild(graphics);
  }
}
