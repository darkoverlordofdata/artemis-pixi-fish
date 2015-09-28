module example.templates {

  const TAU = Math.PI * 2;

  import Point = PIXI.Point;
  import Container = PIXI.Container;
  import InvertFilter = PIXI.filters.InvertFilter;

  import World = artemis.World;
  import Entity = artemis.Entity;
  import EntitySystem = artemis.EntitySystem;
  import GroupManager = artemis.managers.GroupManager;
  import EntityTemplate = artemis.annotations.EntityTemplate;
  import IEntityTemplate = artemis.IEntityTemplate;

  import Bounds = example.components.Bounds;
  import Fish = example.components.Fish;
  import Constants = example.core.Constants;
  import MathUtils = artemis.utils.MathUtils;

  @EntityTemplate('fish')
  export class FishTemplate implements IEntityTemplate {

    static invertFilter:InvertFilter = new InvertFilter();

    public buildEntity(entity:Entity, world:World, fishes):Entity {

      var padding = 100;
      var bounds = new PIXI.Rectangle(-padding, -padding,
        Constants.FRAME_WIDTH + padding * 2, Constants.FRAME_HEIGHT + padding * 2);
      var path = fishes[MathUtils.nextInt(fishes.length)].url;


      entity.addComponent(Bounds, bounds);
      entity.addComponent(Fish, path, (fish:Fish) => {

        fish.direction = Math.random() * TAU;
        fish.speed = 2 + Math.random() * 2;
        fish.turnSpeed = Math.random() - 0.8;

        var sprite = fish.sprite;

        sprite.position.set(Math.random() * bounds.width, Math.random() * bounds.height);
        sprite.scale.set(0.8 + Math.random() * 0.3);

        /**
         * Touch Fish Events
         */
        var onTouchStart = () => {
          //sprite.alpha = .5;
          fish.speed /= 2;
          fish.turnSpeed /= 2;
          sprite.filters = [FishTemplate.invertFilter]
        };
        var onTouchEnd = () => {
          //sprite.alpha = 1;
          sprite.filters = null;
        };

        sprite.interactive = true;
        sprite.on('mousedown', onTouchStart);
        sprite.on('touchstart', onTouchStart);
        sprite.on('mouseup', onTouchEnd);
        sprite.on('touchend', onTouchEnd);
        sprite.on('mouseupoutside', onTouchEnd);
        sprite.on('touchendoutside', onTouchEnd);


        fish.addTo(EntitySystem.blackBoard.getEntry<Container>('sprites'));

      });
      world.getManager<GroupManager>(GroupManager).add(entity, Constants.Groups.FISH);
      return entity;
    }
  }
}