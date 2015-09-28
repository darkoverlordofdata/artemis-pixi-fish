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
        var InvertFilter = PIXI.filters.InvertFilter;
        var EntitySystem = artemis.EntitySystem;
        var GroupManager = artemis.managers.GroupManager;
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
                    var sprite = fish.sprite;
                    sprite.position.set(Math.random() * bounds.width, Math.random() * bounds.height);
                    sprite.scale.set(0.8 + Math.random() * 0.3);
                    /**
                     * Touch Fish Events
                     */
                    var onTouchStart = function () {
                        //sprite.alpha = .5;
                        fish.speed /= 2;
                        fish.turnSpeed /= 2;
                        sprite.filters = [FishTemplate.invertFilter];
                    };
                    var onTouchEnd = function () {
                        //sprite.alpha = 1;
                        sprite.filters = null;
                    };
                    sprite.interactive = true;
                    sprite.on('mousedown', onTouchStart);
                    sprite.on('touchstart', onTouchStart);
                    sprite.on('mouseup', onTouchEnd);
                    sprite.on('touchend', onTouchEnd);
                    sprite.on('mouseupoutside', onTouchEnd);
                    sprite.on('touchendoutside', onTouchEnd);
                    fish.addTo(EntitySystem.blackBoard.getEntry('sprites'));
                });
                world.getManager(GroupManager).add(entity, Constants.Groups.FISH);
                return entity;
            };
            FishTemplate.invertFilter = new InvertFilter();
            FishTemplate = __decorate([
                EntityTemplate('fish')
            ], FishTemplate);
            return FishTemplate;
        })();
        templates.FishTemplate = FishTemplate;
    })(templates = example.templates || (example.templates = {}));
})(example || (example = {}));
//# sourceMappingURL=FishTemplate.js.map