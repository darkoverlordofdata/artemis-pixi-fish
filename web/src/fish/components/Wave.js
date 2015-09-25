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
        var Constants = example.core.Constants;
        var Wave = (function (_super) {
            __extends(Wave, _super);
            function Wave() {
                _super.apply(this, arguments);
            }
            Wave.prototype.initialize = function (path, lambda) {
                var tx = PIXI.Texture.fromImage(path);
                this.sprite = new PIXI.extras.TilingSprite(tx, Constants.FRAME_WIDTH, Constants.FRAME_HEIGHT);
                if (lambda)
                    lambda(this);
            };
            Wave.prototype.addTo = function (layer) {
                layer.addChild(this.sprite);
            };
            Wave.prototype.removeFrom = function (layer) {
                layer.removeChild(this.sprite);
            };
            Wave.className = 'Wave';
            Wave = __decorate([
                Pooled()
            ], Wave);
            return Wave;
        })(PooledComponent);
        components.Wave = Wave;
        Wave.prototype.sprite = null;
    })(components = example.components || (example.components = {}));
})(example || (example = {}));
//# sourceMappingURL=Wave.js.map