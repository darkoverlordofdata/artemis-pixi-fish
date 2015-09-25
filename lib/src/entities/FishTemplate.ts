module example.templates {

  const TAU = Math.PI * 2;

  import Point = PIXI.Point;
  import Container = PIXI.Container;

  import GroupManager = artemis.managers.GroupManager;
  import EntitySystem = artemis.EntitySystem;
  import EntityTemplate = artemis.annotations.EntityTemplate;
  import IEntityTemplate = artemis.IEntityTemplate;
  import Entity = artemis.Entity;
  import World = artemis.World;

  import Bounds = example.components.Bounds;
  import Position = example.components.Position;
  import Sprite = example.components.Sprite;
  import Fish = example.components.Fish;
  import Constants = example.core.Constants;
  import MathUtils = artemis.utils.MathUtils;

  @EntityTemplate('fish')
  export class FishTemplate implements IEntityTemplate {

    public buildEntity(entity:Entity, world:World, fishes):Entity {

      var padding = 100;
      var bounds = new PIXI.Rectangle(-padding, -padding,
        Constants.FRAME_WIDTH + padding * 2, Constants.FRAME_HEIGHT + padding * 2)
      var path = fishes[MathUtils.nextInt(fishes.length)].url;

      entity.addComponent(Bounds, bounds);
      entity.addComponent(Fish, path, (fish:Fish) => {

        fish.direction = Math.random() * TAU;
        fish.speed = 2 + Math.random() * 2;
        fish.turnSpeed = Math.random() - 0.8;

        var position = fish.sprite.position;
        position.x = Math.random() * bounds.width;;
        position.y = Math.random() * bounds.height;

        var scale = fish.sprite.scale;
        scale.x = scale.y = 0.8 + Math.random() * 0.3;

        fish.addTo(EntitySystem.blackBoard.getEntry<Container>('sprites'));

      });
      world.getManager<GroupManager>(GroupManager).add(entity, Constants.Groups.FISH);
      return entity;
    }
  }
}