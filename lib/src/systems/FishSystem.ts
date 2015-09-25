module example.systems {

  import Position = example.components.Position;
  import Fish = example.components.Fish;
  import Sprite = PIXI.Sprite;

  import Aspect = artemis.Aspect;
  import ComponentMapper = artemis.ComponentMapper;
  import Entity = artemis.Entity;
  import EntityProcessingSystem = artemis.systems.EntityProcessingSystem;
  import Mapper = artemis.annotations.Mapper;

  export class FishSystem extends EntityProcessingSystem {
    @Mapper(Position) pm:ComponentMapper<Position>;
    @Mapper(Fish) fm:ComponentMapper<Fish>;

    constructor() {
      super(Aspect.getAspectForAll(Position, Fish));
    }

    public processEach(e:Entity) {
      var padding = 100;
      var bounds = new PIXI.Rectangle(-padding, -padding, 630 + padding * 2, 410 + padding * 2);

      var fish:Sprite = this.fm.get(e).sprite;

      fish.direction += fish.turnSpeed * 0.01;
      fish.position.x += Math.sin(fish.direction) * fish.speed;
      fish.position.y += Math.cos(fish.direction) * fish.speed;

      fish.rotation = -fish.direction - Math.PI/2;

      // wrap..

      if(fish.position.x < bounds.x)fish.position.x += bounds.width;
      if(fish.position.x > bounds.x + bounds.width)fish.position.x -= bounds.width

      if(fish.position.y < bounds.y)fish.position.y += bounds.height;
      if(fish.position.y > bounds.y + bounds.height)fish.position.y -= bounds.height


    }
  }
}

