module example.core {

  import Container = PIXI.Container;
  import Sprite = PIXI.Sprite;
  import SystemRenderer = PIXI.SystemRenderer;
  import GameScreen = example.core.GameScreen;
  import Constants = example.core.Constants;
  import EntitySystem = artemis.EntitySystem;

  export class Game {

    public sprites:Container;
    public renderer:SystemRenderer;
    public gameScreen:GameScreen;
    private delta:number=0;
    private previousTime:number=0;

    /**
     * Load assets and start
     */
    public static main() {
      /** enable sin/cos lookup tables */
      artemis.utils.TrigLUT.init(true);

      for (var asset in Constants.assets) {
        PIXI.loader.add(asset, Constants.assets[asset]);
      }
      PIXI.loader.load((loader, resources) => new Game(resources));
    }

    /**
     * Create the game instance
     * @param resources
     */
    constructor(resources) {

      /** set the stage */
      var sprites = this.sprites = new Container();
      var renderer = this.renderer = PIXI.autoDetectRenderer(Constants.FRAME_WIDTH, Constants.FRAME_HEIGHT, {
        backgroundColor:0x000000
      });

      /** save the resources on the blackboard */
      EntitySystem.blackBoard.setEntry('resources', resources);
      EntitySystem.blackBoard.setEntry('sprites', sprites);
      EntitySystem.blackBoard.setEntry('webgl', this.renderer.type === PIXI.RENDERER_TYPE.WEBGL);

      /** setup the environment */
      renderer.view.style.position = "absolute";
      renderer.view.style.position = "absolute";
      renderer.view.style.width = window.innerWidth + "px";
      renderer.view.style.height = window.innerHeight + "px";
      renderer.view.style.display = "block";

      document.body.appendChild(this.renderer.view);
      window.addEventListener('resize', this.resize, true);
      window.onorientationchange = this.resize;

      /** start the game */
      this.gameScreen = new GameScreen(sprites, resources);
      requestAnimationFrame(this.update);
    }

    /**
     * Game Loop
     * @param time
     */
    update = (time:number) => {
      this.delta = this.previousTime || time;
      this.previousTime = time;
      this.gameScreen.render((time - this.delta) * 0.001);
      this.renderer.render(this.sprites);
      requestAnimationFrame(this.update);
    };

    /**
     * Resize window
     */
    resize = () => {
      this.renderer.view.style.width = window.innerWidth + "px";
      this.renderer.view.style.height = window.innerHeight + "px";
    };

  }
}

