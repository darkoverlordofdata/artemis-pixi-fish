module example.core {

  export enum ScaleType {
    FILL, // expand to fill the screen
    FIXED // scale fixed size to fit the screen
  }

  export class Constants {

    public static FRAME_WIDTH:number = 630; //window.innerWidth;
    public static FRAME_HEIGHT:number = 410; //window.innerHeight;
    public static SCALE_TYPE:ScaleType = ScaleType.FIXED;

    public static Groups = {
      FISH: "fish",
      BACKGROUND: "background"
    };

    public static assets = {
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


  }
}

