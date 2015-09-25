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
        var Background = (function (_super) {
            __extends(Background, _super);
            function Background() {
                _super.apply(this, arguments);
            }
            Background.prototype.initialize = function (path, lambda) {
                this.sprite = Sprite.fromImage(path);
                if (lambda)
                    lambda(this);
            };
            Background.prototype.addTo = function (layer) {
                layer.addChild(this.sprite);
            };
            Background.prototype.removeFrom = function (layer) {
                layer.removeChild(this.sprite);
            };
            Background.className = 'Background';
            Background = __decorate([
                Pooled()
            ], Background);
            return Background;
        })(PooledComponent);
        components.Background = Background;
        Background.prototype.sprite = null;
    })(components = example.components || (example.components = {}));
})(example || (example = {}));
//# sourceMappingURL=Background.js.map