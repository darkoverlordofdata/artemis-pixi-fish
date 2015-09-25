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
    var templates;
    (function (templates) {
        var TAU = Math.PI * 2;
        var GroupManager = artemis.managers.GroupManager;
        var EntitySystem = artemis.EntitySystem;
        var EntityTemplate = artemis.annotations.EntityTemplate;
        var Bounds = example.components.Bounds;
        var Fish = example.components.Fish;
        var Constants = example.core.Constants;
        var MathUtils = artemis.utils.MathUtils;
        var FishTemplate = (function () {
            function FishTemplate() {
            }
            FishTemplate.prototype.buildEntity = function (entity, world, fishes) {
                var padding = 100;
                var bounds = new PIXI.Rectangle(-padding, -padding, Constants.FRAME_WIDTH + padding * 2, Constants.FRAME_HEIGHT + padding * 2);
                var path = fishes[MathUtils.nextInt(fishes.length)].url;
                entity.addComponent(Bounds, bounds);
                entity.addComponent(Fish, path, function (fish) {
                    fish.direction = Math.random() * TAU;
                    fish.speed = 2 + Math.random() * 2;
                    fish.turnSpeed = Math.random() - 0.8;
                    var position = fish.sprite.position;
                    position.x = Math.random() * bounds.width;
                    ;
                    position.y = Math.random() * bounds.height;
                    var scale = fish.sprite.scale;
                    scale.x = scale.y = 0.8 + Math.random() * 0.3;
                    fish.addTo(EntitySystem.blackBoard.getEntry('sprites'));
                });
                world.getManager(GroupManager).add(entity, Constants.Groups.FISH);
                return entity;
            };
            FishTemplate = __decorate([
                EntityTemplate('fish')
            ], FishTemplate);
            return FishTemplate;
        })();
        templates.FishTemplate = FishTemplate;
    })(templates = example.templates || (example.templates = {}));
})(example || (example = {}));
//# sourceMappingURL=FishTemplate.js.map