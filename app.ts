import { Application, Graphics } from "pixi.js";
import { Node } from "./Node";

const app = new Application({
  view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: 0x6495ed,
});

const n1 = new Node("Hello");
const n2 = new Node("World");

const links = [[n1, n2]];

n1.x = app.view.width / 2;
n1.y = app.view.height / 2;
n2.x = app.view.width / 2 + 100;
n2.y = app.view.height / 2;

app.stage.addChild(n1);
app.stage.addChild(n2);

const linkGraphics = new Graphics();
for (const link of links) {
  const [node1, node2] = link;

  linkGraphics.lineStyle({
    color: 0x00FF00,
    width: 2
  })
  linkGraphics.beginFill(0x00FF00)
  linkGraphics.moveTo(node1.x, node1.y)
  linkGraphics.lineTo(node2.x, node2.y)
  linkGraphics.endFill()
}

app.stage.addChild(linkGraphics);
