module example.templates {

  import Point = PIXI.Point;
  import Container = PIXI.Container;

  import GroupManager = artemis.managers.GroupManager;
  import EntitySystem = artemis.EntitySystem;
  import EntityTemplate = artemis.annotations.EntityTemplate;
  import IEntityTemplate = artemis.IEntityTemplate;
  import Entity = artemis.Entity;
  import World = artemis.World;

  import Position = example.components.Position;
  import Sprite = example.components.Sprite;
  import Fish = example.components.Fish;
  import Constants = example.core.Constants;

  @EntityTemplate('fish')
  export class FishTemplate implements IEntityTemplate {

    public buildEntity(entity:Entity, world:World, path):Entity {

      var padding = 100;
      var bounds = new PIXI.Rectangle(-padding, -padding, 630 + padding * 2, 410 + padding * 2)

      var x = Math.random() * bounds.width;
      var y = Math.random() * bounds.height;

      entity.addComponent(Position, x, y);
      entity.addComponent(Fish, path, (fish:Fish) => {

        fish.sprite.direction = Math.random() * Math.PI * 2;
        fish.sprite.speed = 2 + Math.random() * 2;
        fish.sprite.turnSpeed = Math.random() - 0.8;

        fish.sprite.position.x = x;
        fish.sprite.position.y = y;

        fish.sprite.scale.x = fish.sprite.scale.y = 0.8 + Math.random() * 0.3;

        fish.addTo(EntitySystem.blackBoard.getEntry<Container>('sprites'));

      });
      world.getManager<GroupManager>(GroupManager).add(entity, Constants.Groups.FISH);
      return entity;
    }
  }
}