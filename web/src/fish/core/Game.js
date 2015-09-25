var example;
(function (example) {
    var core;
    (function (core) {
        var Container = PIXI.Container;
        var GameScreen = example.core.GameScreen;
        var Constants = example.core.Constants;
        var EntitySystem = artemis.EntitySystem;
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
                    _this.gameScreen.render((time - _this.delta) * 0.001);
                    _this.renderer.render(_this.sprites);
                    requestAnimationFrame(_this.update);
                };
                /**
                 * Resize window
                 */
                this.resize = function () {
                    _this.renderer.view.style.width = window.innerWidth + "px";
                    _this.renderer.view.style.height = window.innerHeight + "px";
                };
                /** set the stage */
                var sprites = this.sprites = new Container();
                var renderer = this.renderer = PIXI.autoDetectRenderer(Constants.FRAME_WIDTH, Constants.FRAME_HEIGHT, {
                    backgroundColor: 0x000000
                });
                /** save the resources on the blackboard */
                EntitySystem.blackBoard.setEntry('resources', resources);
                EntitySystem.blackBoard.setEntry('sprites', sprites);
                EntitySystem.blackBoard.setEntry('webgl', this.renderer.type === PIXI.RENDERER_TYPE.WEBGL);
                /** setup the environment */
                renderer.view.style.position = "absolute";
                renderer.view.style.position = "absolute";
                renderer.view.style.width = window.innerWidth + "px";
                renderer.view.style.height = window.innerHeight + "px";
                renderer.view.style.display = "block";
                document.body.appendChild(this.renderer.view);
                window.addEventListener('resize', this.resize, true);
                window.onorientationchange = this.resize;
                /** start the game */
                this.gameScreen = new GameScreen(sprites, resources);
                requestAnimationFrame(this.update);
            }
            /**
             * Load assets and start
             */
            Game.main = function () {
                /** enable sin/cos lookup tables */
                artemis.utils.TrigLUT.init(true);
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