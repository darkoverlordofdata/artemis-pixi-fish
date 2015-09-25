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
        var Displacement = (function (_super) {
            __extends(Displacement, _super);
            function Displacement() {
                _super.apply(this, arguments);
            }
            Displacement.prototype.initialize = function (path, lambda) {
                var displacementTexture = PIXI.Sprite.fromImage(path);
                this.filter = new PIXI.filters.DisplacementFilter(displacementTexture);
                if (lambda)
                    lambda(this);
            };
            Displacement.className = 'Displacement';
            Displacement = __decorate([
                Pooled()
            ], Displacement);
            return Displacement;
        })(PooledComponent);
        components.Displacement = Displacement;
        Displacement.prototype.filter = null;
    })(components = example.components || (example.components = {}));
})(example || (example = {}));
//# sourceMappingURL=Displacement.js.map