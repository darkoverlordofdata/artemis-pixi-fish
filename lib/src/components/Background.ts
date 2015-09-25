module example.components {

  import Container = PIXI.Container;
  import Component = artemis.Component;
  import PooledComponent = artemis.PooledComponent;
  import Pooled = artemis.annotations.Pooled;
  import Sprite = PIXI.Sprite;

  @Pooled()
  export class Background extends PooledComponent {
    public static className = 'Background';

    public sprite:Sprite;

    public initialize(path?:string, lambda?:Function) {
      this.sprite = Sprite.fromImage(path);
      if (lambda) lambda(this);
    }

    addTo(layer:Container) {
      layer.addChild(this.sprite);
    }

    removeFrom(layer:Container) {
      layer.removeChild(this.sprite);
    }


  }

  Background.prototype.sprite = null;

}

