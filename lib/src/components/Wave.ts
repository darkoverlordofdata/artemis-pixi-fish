module example.components {

  import Container = PIXI.Container;
  import Component = artemis.Component;
  import PooledComponent = artemis.PooledComponent;
  import Pooled = artemis.annotations.Pooled;
  import TilingSprite = PIXI.extras.TilingSprite;
  import Constants = example.core.Constants;

  @Pooled()
  export class Wave extends PooledComponent {
    public static className = 'Wave';

    public sprite:TilingSprite;

    public initialize(path?:string, lambda?:Function) {
      var tx = PIXI.Texture.fromImage(path);
      this.sprite = new PIXI.extras.TilingSprite(tx, Constants.FRAME_WIDTH, Constants.FRAME_HEIGHT);
      if (lambda) lambda(this);
    }

    addTo(layer:Container) {
      layer.addChild(this.sprite);
    }

    removeFrom(layer:Container) {
      layer.removeChild(this.sprite);
    }


  }

  Wave.prototype.sprite = null;

}

