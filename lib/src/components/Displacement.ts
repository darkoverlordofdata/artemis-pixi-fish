module example.components {

  import Container = PIXI.Container;
  import Component = artemis.Component;
  import PooledComponent = artemis.PooledComponent;
  import Pooled = artemis.annotations.Pooled;
  import DisplacementFilter = PIXI.filters.DisplacementFilter;
  import Constants = example.core.Constants;

  @Pooled()
  export class Displacement extends PooledComponent {
    public static className = 'Displacement';

    public filter:DisplacementFilter;

    public initialize(path?:string, lambda?:Function) {
      var displacementTexture = PIXI.Sprite.fromImage(path);
      this.filter = new PIXI.filters.DisplacementFilter(displacementTexture);


      if (lambda) lambda(this);
    }



  }

  Displacement.prototype.filter = null;

}

