module example.core {

  import World = artemis.World;
  import EntitySystem = artemis.EntitySystem;
  import GroupManager = artemis.managers.GroupManager;

  import Constants = example.core.Constants;
  import BackgroundSystem = example.systems.BackgroundSystem;
  import FishSystem = example.systems.FishSystem;

  export class GameScreen {

    private world:World;

    //private spriteRenderSystem:SpriteRenderSystem;

    constructor(sprites, res) {

      var world:World = this.world = new artemis.World();

      world.setManager(new GroupManager());
      world.setSystem(new BackgroundSystem());
      world.setSystem(new FishSystem());

      world.initialize();
      world.createEntityFromTemplate('background', res.background, res.waves, res.map).addToWorld();

      var fishes = [];
      for (var k in res)
        if (/fish\d*/.test(k)) fishes.push(res[k]);

      for (var i = 0; i < 20; i++) {
        world.createEntityFromTemplate('fish', fishes).addToWorld();
      }
    }

    public render(delta:number) {

      this.world.setDelta(delta);
      this.world.process();
      //this.spriteRenderSystem.process();
    }
  }
}

