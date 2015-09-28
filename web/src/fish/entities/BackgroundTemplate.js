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
        var Wave = example.components.Wave;
        var Displacement = example.components.Displacement;
        var Background = example.components.Background;
        var Constants = example.core.Constants;
        var BackgroundTemplate = (function () {
            function BackgroundTemplate() {
            }
            BackgroundTemplate.prototype.buildEntity = function (entity, world, res) {
                var container = EntitySystem.blackBoard.getEntry('sprites');
                entity.addComponent(Background, res.background.url, function (sprite) {
                    sprite.addTo(container);
                });
                entity.addComponent(Wave, res.waves.url, function (sprite) {
                    sprite.sprite.alpha = 0.1;
                    sprite.addTo(container);
                });
                entity.addComponent(Displacement, res.map.url, function (filter) {
                    filter.filter.scale.x = 50;
                    filter.filter.scale.y = 50;
                    container.filters = [filter.filter];
                });
                world.getManager(GroupManager).add(entity, Constants.Groups.BACKGROUND);
                return entity;
            };
            BackgroundTemplate = __decorate([
                EntityTemplate('background')
            ], BackgroundTemplate);
            return BackgroundTemplate;
        })();
        templates.BackgroundTemplate = BackgroundTemplate;
    })(templates = example.templates || (example.templates = {}));
})(example || (example = {}));
//# sourceMappingURL=BackgroundTemplate.js.map