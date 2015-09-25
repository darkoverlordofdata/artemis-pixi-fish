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
    var systems;
    (function (systems) {
        var Position = example.components.Position;
        var Fish = example.components.Fish;
        var Aspect = artemis.Aspect;
        var EntityProcessingSystem = artemis.systems.EntityProcessingSystem;
        var Mapper = artemis.annotations.Mapper;
        var FishSystem = (function (_super) {
            __extends(FishSystem, _super);
            function FishSystem() {
                _super.call(this, Aspect.getAspectForAll(Position, Fish));
            }
            FishSystem.prototype.processEach = function (e) {
                var padding = 100;
                var bounds = new PIXI.Rectangle(-padding, -padding, 630 + padding * 2, 410 + padding * 2);
                var fish = this.fm.get(e).sprite;
                fish.direction += fish.turnSpeed * 0.01;
                fish.position.x += Math.sin(fish.direction) * fish.speed;
                fish.position.y += Math.cos(fish.direction) * fish.speed;
                fish.rotation = -fish.direction - Math.PI / 2;
                // wrap..
                if (fish.position.x < bounds.x)
                    fish.position.x += bounds.width;
                if (fish.position.x > bounds.x + bounds.width)
                    fish.position.x -= bounds.width;
                if (fish.position.y < bounds.y)
                    fish.position.y += bounds.height;
                if (fish.position.y > bounds.y + bounds.height)
                    fish.position.y -= bounds.height;
            };
            __decorate([
                Mapper(Position)
            ], FishSystem.prototype, "pm");
            __decorate([
                Mapper(Fish)
            ], FishSystem.prototype, "fm");
            return FishSystem;
        })(EntityProcessingSystem);
        systems.FishSystem = FishSystem;
    })(systems = example.systems || (example.systems = {}));
})(example || (example = {}));
//# sourceMappingURL=FishSystem.js.map