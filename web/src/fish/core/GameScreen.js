var example;
(function (example) {
    var core;
    (function (core) {
        var GroupManager = artemis.managers.GroupManager;
        var BackgroundSystem = example.systems.BackgroundSystem;
        var FishSystem = example.systems.FishSystem;
        var GameScreen = (function () {
            //private spriteRenderSystem:SpriteRenderSystem;
            function GameScreen(sprites, res) {
                var world = this.world = new artemis.World();
                world.setManager(new GroupManager());
                world.setSystem(new BackgroundSystem());
                world.setSystem(new FishSystem());
                world.initialize();
                world.createEntityFromTemplate('background', res.background, res.waves, res.map).addToWorld();
                var fishes = [];
                for (var k in res)
                    if (/fish\d*/.test(k))
                        fishes.push(res[k]);
                for (var i = 0; i < 20; i++) {
                    world.createEntityFromTemplate('fish', fishes).addToWorld();
                }
            }
            GameScreen.prototype.render = function (delta) {
                this.world.setDelta(delta);
                this.world.process();
                //this.spriteRenderSystem.process();
            };
            return GameScreen;
        })();
        core.GameScreen = GameScreen;
    })(core = example.core || (example.core = {}));
})(example || (example = {}));
//# sourceMappingURL=GameScreen.js.map