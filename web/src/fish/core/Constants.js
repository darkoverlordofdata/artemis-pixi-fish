var example;
(function (example) {
    var core;
    (function (core) {
        var Constants = (function () {
            function Constants() {
            }
            Constants.FRAME_WIDTH = 630; //window.innerWidth;
            Constants.FRAME_HEIGHT = 410; //window.innerHeight;
            Constants.Groups = {
                FISH: "fish",
                BACKGROUND: "background"
            };
            Constants.assets = {
                background: 'res/displacement_BG.jpg',
                fish1: 'res/displacement_fish1.png',
                fish2: 'res/displacement_fish2.png',
                fish3: 'res/displacement_fish3.png',
                fish4: 'res/displacement_fish4.png',
                map: 'res/displacement_map.jpg',
                overlay: 'res/displacement_overlay.png',
                MAP: 'res/displacementMAP.jpg',
                waves: 'res/zeldaWaves.png'
            };
            return Constants;
        })();
        core.Constants = Constants;
    })(core = example.core || (example.core = {}));
})(example || (example = {}));
//# sourceMappingURL=Constants.js.map