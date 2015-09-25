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
var example;
(function (example) {
    var components;
    (function (components) {
        var PooledComponent = artemis.PooledComponent;
        var Pooled = artemis.annotations.Pooled;
        var Sprite = PIXI.Sprite;
        var Fish = (function (_super) {
            __extends(Fish, _super);
            function Fish() {
                _super.apply(this, arguments);
            }
            Fish.prototype.initialize = function (path, lambda) {
                this.sprite = Sprite.fromImage(path);
                this.sprite.anchor.x = this.sprite.anchor.y = 0.5;
                if (lambda)
                    lambda(this);
            };
            Fish.prototype.addTo = function (layer) {
                layer.addChild(this.sprite);
            };
            Fish.prototype.removeFrom = function (layer) {
                layer.removeChild(this.sprite);
            };
            Fish.className = 'Fish';
            Fish = __decorate([
                Pooled()
            ], Fish);
            return Fish;
        })(PooledComponent);
        components.Fish = Fish;
        Fish.prototype.sprite = null;
        Fish.prototype.direction = 0;
        Fish.prototype.speed = 0;
        Fish.prototype.turnSpeed = 0;
    })(components = example.components || (example.components = {}));
})(example || (example = {}));
//# sourceMappingURL=Fish.js.map