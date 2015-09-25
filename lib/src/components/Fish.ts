module example.components {

  import Container = PIXI.Container;
  import Component = artemis.Component;
  import PooledComponent = artemis.PooledComponent;
  import Pooled = artemis.annotations.Pooled;
  import Sprite = PIXI.Sprite;

  @Pooled()
  export class Fish extends PooledComponent {
    public static className = 'Fish';

    public sprite:Sprite;
    public direction:number;
    public speed:number;
    public turnSpeed:number;


    public initialize(path?:string, lambda?:Function) {
      this.sprite = Sprite.fromImage(path);
      this.sprite.anchor.x = this.sprite.anchor.y = 0.5;

      if (lambda) lambda(this);
    }

    addTo(layer:Container) {
      layer.addChild(this.sprite);
    }

    removeFrom(layer:Container) {
      layer.removeChild(this.sprite);
    }


  }

  Fish.prototype.sprite = null;
  Fish.prototype.direction = 0;
  Fish.prototype.speed = 0;
  Fish.prototype.turnSpeed = 0;

}

