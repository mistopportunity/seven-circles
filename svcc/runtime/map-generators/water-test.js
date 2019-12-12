import TileBridge from "../tile-bridge.js";
import LayerBridge from "../layer-bridge.js";
import GetWaterBackground from "../../../../elven-engine/renderers/components/world/water-background.js";
import IslandMaker from "../island-maker.js";

const objects = {};
const bridge = new TileBridge(objects);

bridge.addDynamicObject(
    "beach_island",
    bridge.getIslandGrid,
    bridge.getIslandGridMeta(454,646,393)
);


function WaterTest(layers) {
    this.map.backgroundColor = "black";

    const layerBridge = new LayerBridge(layers,bridge);

    const islandMaker = new IslandMaker(
        this.map.width,this.map.height
    );

    islandMaker.generateGrid();
    islandMaker.paint(
        "beach_island",layerBridge,0,0,true,false
    );

    this.map.WorldState = function(world) {
        this.load = () => {
            world.addPlayer(2,2);
        }
    }
    this.map.fxBackground = GetWaterBackground(80,112);
}

export default WaterTest;

