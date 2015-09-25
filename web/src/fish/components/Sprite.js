var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/**
 * Sprite component
 * contains a PIXI Spine object
 */
var example;
(function (example) {
    var components;
    (function (components) {
        var PooledComponent = artemis.PooledComponent;
        var Pooled = artemis.annotations.Pooled;
        var Sprite = (function (_super) {
            __extends(Sprite, _super);
            function Sprite() {
                _super.apply(this, arguments);
            }
            Sprite.prototype.initialize = function (spineData, lambda) {
                this.spineData = spineData;
                this.spine = new PIXI['spine'].Spine(spineData);
                this.spine.stateData.setMixByName('running', 'jump', 0.2);
                this.spine.stateData.setMixByName('jump', 'running', 0.4);
                this.spine.state.setAnimationByName(0, 'running', true);
                if (lambda !== undefined) {
                    lambda(this);
                }
            };
            Sprite.prototype.jump = function () {
                this.spine.state.setAnimationByName(0, 'jump', false);
                this.spine.state.addAnimationByName(0, 'running', true, 0);
            };
            Sprite.prototype.addTo = function (parent) {
                parent.addChild(this.spine);
            };
            Sprite.prototype.removeFrom = function (parent) {
                parent.removeChild(this.spine);
            };
            Sprite.className = 'Sprite';
            Sprite = __decorate([
                Pooled()
            ], Sprite);
            return Sprite;
        })(PooledComponent);
        components.Sprite = Sprite;
        Sprite.prototype.spineData = null;
    })(components = example.components || (example.components = {}));
})(example || (example = {}));
//# sourceMappingURL=Sprite.js.map