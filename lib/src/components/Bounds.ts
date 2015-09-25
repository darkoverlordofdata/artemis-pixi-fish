module example.components {

  import Component = artemis.Component;
  import PooledComponent = artemis.PooledComponent;
  import Pooled = artemis.annotations.Pooled;

  @Pooled()
  export class Bounds extends PooledComponent {
    public static className = 'Bounds';

    public initialize(rect?:PIXI.Rectangle) {
      this.x = rect.x;
      this.y = rect.y;
      this.width = rect.width;
      this.height = rect.height;
    }

    public x:number;
    public y:number;
    public width:number;
    public height:number;
  }

  Bounds.prototype.x = 0;
  Bounds.prototype.y = 0;
  Bounds.prototype.width = 0;
  Bounds.prototype.height = 0;
}
