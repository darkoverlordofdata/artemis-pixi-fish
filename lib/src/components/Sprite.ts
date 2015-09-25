/**
 * Sprite component
 * contains a PIXI Spine object
 */
module example.components {

  import Component = artemis.Component;
  import PooledComponent = artemis.PooledComponent;
  import Pooled = artemis.annotations.Pooled;
  import Point = PIXI.Point;
  import Container = PIXI.Container;

  @Pooled()
  export class Sprite extends PooledComponent {
    public static className = 'Sprite';

    public spineData;
    public spine;

    initialize(spineData?, lambda?) {

      this.spineData = spineData;
      this.spine = new PIXI['spine'].Spine(spineData);
      this.spine.stateData.setMixByName('running', 'jump', 0.2);
      this.spine.stateData.setMixByName('jump', 'running', 0.4);
      this.spine.state.setAnimationByName(0, 'running', true);

      if (lambda !== undefined) {
        lambda(this);
      }
    }

    jump() {
      this.spine.state.setAnimationByName(0, 'jump', false);
      this.spine.state.addAnimationByName(0, 'running', true, 0);
    }

    addTo(parent:Container) {
      parent.addChild(this.spine);

    }

    removeFrom(parent:Container) {
      parent.removeChild(this.spine);
    }
  }

  Sprite.prototype.spineData = null;
}

