module example.templates {

  import Point = PIXI.Point;
  import Container = PIXI.Container;

  import GroupManager = artemis.managers.GroupManager;
  import EntitySystem = artemis.EntitySystem;
  import EntityTemplate = artemis.annotations.EntityTemplate;
  import IEntityTemplate = artemis.IEntityTemplate;
  import Entity = artemis.Entity;
  import World = artemis.World;

  import Wave = example.components.Wave;
  import Displacement = example.components.Displacement;
  import Background = example.components.Background;
  import Position = example.components.Position;
  import Constants = example.core.Constants;

  @EntityTemplate('background')
  export class BackgroundTemplate implements IEntityTemplate {

    public buildEntity(entity:Entity, world:World, background, waves, map):Entity {

      var container:Container = EntitySystem.blackBoard.getEntry<Container>('sprites');

      entity.addComponent(Background, background.url, (sprite) => {
        sprite.addTo(container);
      });

      entity.addComponent(Wave, waves.url, (sprite) => {
        sprite.sprite.alpha = 0.1;
        sprite.addTo(container);
      });

      entity.addComponent(Displacement, map.url, (filter) => {
        filter.filter.scale.x = 50;
        filter.filter.scale.y = 50;
        container.filters = [filter.filter];
      });

      world.getManager<GroupManager>(GroupManager).add(entity, Constants.Groups.BACKGROUND);
      return entity;
    }
  }
}