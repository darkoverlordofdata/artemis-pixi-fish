module example.systems {

  import Bounds = example.components.Bounds;
  import Fish = example.components.Fish;
  import Sprite = PIXI.Sprite;
  import Point = PIXI.Point;

  import Aspect = artemis.Aspect;
  import ComponentMapper = artemis.ComponentMapper;
  import Entity = artemis.Entity;
  import EntityProcessingSystem = artemis.systems.EntityProcessingSystem;
  import Mapper = artemis.annotations.Mapper;

  export class FishSystem extends EntityProcessingSystem {
    @Mapper(Bounds) bm:ComponentMapper<Bounds>;
    @Mapper(Fish) fm:ComponentMapper<Fish>;

    constructor() {
      super(Aspect.getAspectForAll(Bounds, Fish));
    }

    public processEach(e:Entity) {
      var bounds:Bounds = this.bm.get(e);
      var fish:Fish = this.fm.get(e);
      var position:Point = fish.sprite.position;

      fish.direction += fish.turnSpeed * 0.01;
      position.x += Math.sin(fish.direction) * fish.speed;
      position.y += Math.cos(fish.direction) * fish.speed;

      fish.sprite.rotation = -fish.direction - Math.PI/2;

      // wrap..

      if (position.x < bounds.x)
        position.x += bounds.width;
      if (position.x > bounds.x + bounds.width)
        position.x -= bounds.width;

      if (position.y < bounds.y)
        position.y += bounds.height;
      if (position.y > bounds.y + bounds.height)
        position.y -= bounds.height;


    }
  }
}

