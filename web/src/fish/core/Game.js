/**
 * Game
 *
 * connects the environment to the ecs
 */
var example;
(function (example) {
    var core;
    (function (core) {
        var Container = PIXI.Container;
        var GameSystems = example.core.GameSystems;
        var Constants = example.core.Constants;
        var EntitySystem = artemis.EntitySystem;
        var ScaleType = example.core.ScaleType;
        var Game = (function () {
            /**
             * Create the game instance
             * @param resources
             */
            function Game(resources) {
                var _this = this;
                this.delta = 0;
                this.previousTime = 0;
                /**
                 * Game Loop
                 * @param time
                 */
                this.update = function (time) {
                    _this.delta = _this.previousTime || time;
                    _this.previousTime = time;
                    _this.systems.update((time - _this.delta) * 0.001);
                    _this.renderer.render(_this.sprites);
                    requestAnimationFrame(_this.update);
                };
                /**
                 * Resize window
                 */
                this.resize = function () {
                    switch (Constants.SCALE_TYPE) {
                        case ScaleType.FILL:
                            var height = window.innerHeight;
                            var width = window.innerWidth;
                            _this.renderer.resize(width, height);
                            break;
                        case ScaleType.FIXED:
                            _this.renderer.view.style.width = window.innerWidth + "px";
                            _this.renderer.view.style.height = window.innerHeight + "px";
                            break;
                    }
                };
                this.sprites = new Container();
                EntitySystem.blackBoard.setEntry('sprites', this.sprites);
                EntitySystem.blackBoard.setEntry('resources', resources);
                var renderer = this.renderer = PIXI.autoDetectRenderer(Constants.FRAME_WIDTH, Constants.FRAME_HEIGHT, { backgroundColor: 0x000000 });
                switch (Constants.SCALE_TYPE) {
                    case ScaleType.FILL:
                        this.renderer.view.style.position = "absolute";
                        break;
                    case ScaleType.FIXED:
                        renderer.view.style.position = "absolute";
                        renderer.view.style.width = window.innerWidth + "px";
                        renderer.view.style.height = window.innerHeight + "px";
                        renderer.view.style.display = "block";
                        break;
                }
                document.body.appendChild(this.renderer.view);
                window.addEventListener('resize', this.resize, true);
                window.onorientationchange = this.resize;
                this.systems = new GameSystems(this.renderer.type === PIXI.RENDERER_TYPE.WEBGL);
                requestAnimationFrame(this.update);
            }
            /**
             * Load assets and start
             */
            Game.main = function () {
                for (var asset in Constants.assets) {
                    PIXI.loader.add(asset, Constants.assets[asset]);
                }
                PIXI.loader.load(function (loader, resources) { return new Game(resources); });
            };
            return Game;
        })();
        core.Game = Game;
    })(core = example.core || (example.core = {}));
})(example || (example = {}));
//# sourceMappingURL=Game.js.map