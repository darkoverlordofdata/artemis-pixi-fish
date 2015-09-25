module example.systems {

  import Background = example.components.Background;
  import Wave = example.components.Wave;
  import Position = example.components.Position;

  import Aspect = artemis.Aspect;
  import Entity = artemis.Entity;
  import Mapper = artemis.annotations.Mapper;
  import ComponentMapper = artemis.ComponentMapper;
  import EntityProcessingSystem = artemis.systems.EntityProcessingSystem;

  import Sprite = PIXI.Sprite;

  export class BackgroundSystem extends EntityProcessingSystem {
    //@Mapper(Background) bm:ComponentMapper<Background>;
    @Mapper(Wave) wm:ComponentMapper<Wave>;
    public count:number=0;

    constructor() {
      super(Aspect.getAspectForAll(Background, Wave));
    }

    public processEach(e:Entity) {
      var wave:Wave = this.wm.get(e);

      this.count += 0.1;
      wave.sprite.tilePosition.x = this.count * -10;//blurAmount * 40;
      wave.sprite.tilePosition.y = this.count * -10;

    }
  }
}

