import { Application, Graphics, Sprite, Texture } from "pixi.js";
import { Viewport } from "pixi-viewport";
import { Node } from "./Node";

const app = new Application({
  view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: 0x0,
  resizeTo: window,
});

const viewport = new Viewport({
  screenWidth: window.innerWidth,
  screenHeight: window.innerHeight,
  worldWidth: 1000,
  worldHeight: 1000,
  interaction: app.renderer.plugins.interaction, // the interaction module is important for wheel to work properly when renderer.view is placed or scaled
});

viewport.moveCenter(0, 0);

app.stage.addChild(viewport);

// activate plugins
viewport.drag().decelerate();

const linkGraphics = new Graphics();
viewport.addChild(linkGraphics);

const nodes = [
  {
    _id: "1",
    title: "adam.xyzdigital.com",
    url: "https://adam.xyzdigital.com",
    x: 0,
    y: 0,
    fontSize: 24
  },
  {
    _id: "2",
    title: "Projects",
    x: 0,
    y: 100,
    fontSize: 18
  },
  {
    _id: "3",
    title: "Kaizen Music",
    url: "https://kaizen.place",
    x: 0,
    y: 200,
  },
  {
    _id: "4",
    title: "engram",
    url: "https://engramhq.xyz",
    x: 150,
    y: 200,
  },
  {
    _id: "5",
    title: "Learn",
    url: "https://learn.xyzdigital.com",
    x: -150,
    y: 200,
  },
  {
    _id: "6",
    title: "Personal",
    x: -150,
    y: -100,
    fontSize: 18
  },
  {
    _id: "7",
    title: "Random Thoughts After\n29 Laps Around the Sun",
    url: "https://adam.xyzdigital.com/personal/random-thoughts-after-29-laps-around-the-sun",
    x: -150,
    y: -200
  },
  {
    _id: "8",
    title: "What Computer Architecture\nCan Teach Us About Anxiety",
    url: "https://adam.xyzdigital.com/tech/software/what-computer-architecture-can-teach-us-about-anxiety",
    x: 0,
    y: -200
  },
  {
    _id: "9",
    title: "Mental Health",
    x: 0,
    y: -100,
    fontSize: 18
  },
  {
    _id: "10",
    title: "Software",
    x: 150,
    y: -100,
    fontSize: 18
  },
];

const nodeLinkDataArray = [
  ["1", "2"],
  ["1", "6"],
  ["1", "9"],
  ["1", "10"],
  ["2", "3"],
  ["2", "4"],
  ["2", "5"],
  ["6", "7"],
  ["8", "9"],
  ["8", "10"]
];

const nodesById = {};

for (const nodeData of nodes) {
  const node = new Node(nodeData);
  viewport.addChild(node);
  nodesById[nodeData._id] = node;
}

const nodeLinks = [];

for (const nodeLinkData of nodeLinkDataArray) {
  nodeLinks.push([nodesById[nodeLinkData[0]], nodesById[nodeLinkData[1]]]);
}

for (const link of nodeLinks) {
  const [node1, node2] = link;

  linkGraphics.lineStyle({
    color: 0x333333,
    width: 2,
  });
  linkGraphics.moveTo(node1.x, node1.y);
  linkGraphics.lineTo(node2.x, node2.y);
  linkGraphics.endFill();
}
