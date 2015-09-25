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
        var GroupManager = artemis.managers.GroupManager;
        var EntitySystem = artemis.EntitySystem;
        var EntityTemplate = artemis.annotations.EntityTemplate;
        var Position = example.components.Position;
        var Fish = example.components.Fish;
        var Constants = example.core.Constants;
        var FishTemplate = (function () {
            function FishTemplate() {
            }
            FishTemplate.prototype.buildEntity = function (entity, world, path) {
                var padding = 100;
                var bounds = new PIXI.Rectangle(-padding, -padding, 630 + padding * 2, 410 + padding * 2);
                var x = Math.random() * bounds.width;
                var y = Math.random() * bounds.height;
                entity.addComponent(Position, x, y);
                entity.addComponent(Fish, path, function (fish) {
                    fish.sprite.direction = Math.random() * Math.PI * 2;
                    fish.sprite.speed = 2 + Math.random() * 2;
                    fish.sprite.turnSpeed = Math.random() - 0.8;
                    fish.sprite.position.x = x;
                    fish.sprite.position.y = y;
                    fish.sprite.scale.x = fish.sprite.scale.y = 0.8 + Math.random() * 0.3;
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