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
        var Background = example.components.Background;
        var Wave = example.components.Wave;
        var Aspect = artemis.Aspect;
        var Mapper = artemis.annotations.Mapper;
        var EntityProcessingSystem = artemis.systems.EntityProcessingSystem;
        var BackgroundSystem = (function (_super) {
            __extends(BackgroundSystem, _super);
            function BackgroundSystem() {
                _super.call(this, Aspect.getAspectForAll(Background, Wave));
                this.count = 0;
            }
            BackgroundSystem.prototype.processEach = function (e) {
                var wave = this.wm.get(e);
                this.count += 0.1;
                wave.sprite.tilePosition.x = this.count * -10;
                wave.sprite.tilePosition.y = this.count * -10;
            };
            __decorate([
                Mapper(Wave)
            ], BackgroundSystem.prototype, "wm");
            return BackgroundSystem;
        })(EntityProcessingSystem);
        systems.BackgroundSystem = BackgroundSystem;
    })(systems = example.systems || (example.systems = {}));
})(example || (example = {}));
//# sourceMappingURL=BackgroundSystem.js.map