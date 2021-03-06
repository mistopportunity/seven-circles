"use strict";

const internalWidth = 750;
const internalHeight = 650;

const soundGain = 1;
const musicNodeGain = 1;

const GLOBAL_STATE_KEY =   "GLOBAL_STATE_SVCC";
const KEY_BINDS_KEY =      "KEY_BINDS_SVCC";
const VOLUME_STORAGE_KEY = "VOLUME_SVCC";
const SIZE_MODE_KEY =      "SIZE_MODE_KEY_SVCC";
const SOUND_MUTED_KEY =    "SOUND_MUTED_SVCC";
const MUSIC_MUTED_KEY =    "MUSIC_MUTED_SVCC";

const DEFAULT_KEY_BINDS =  JSON.stringify({
    Enter: kc.accept,
    Escape: kc.cancel,
    KeyP: kc.picture_mode,
    Space: kc.open,

    KeyW: kc.up,
    KeyD: kc.right,
    KeyS: kc.down,
    KeyA: kc.left,

    ArrowUp: kc.up,
    ArrowDown: kc.down,
    ArrowLeft: kc.left,
    ArrowRight: kc.right,

    KeyN: kc.nav_left,
    KeyM: kc.nav_right,
    F11: kc.fullscreen
});

const WorldTextureSize = 16;
const WorldTextureScale = 3;
const WorldTileSize = WorldTextureSize * WorldTextureScale;
const WorldTextureColumns = 64;
const ANIMATION_TILE_COUNT = 5;
const ANIMATION_CYCLE_DURATION = 400;
const SPECIAL_COLLISION_START = 28;
const CUSTOM_COLLISION_START = SPECIAL_COLLISION_START + 4;
const COLLISION_TRIGGER_OFFSET = -2;
const COLLISTION_TRIGGERS = {
    3:true,4:true,5:true,6:true,7:true
};
const LogicLayerInteractStart = 8;
const WorldTextureAnimationRows = 4;
const WorldTextureAnimationStart = Math.pow(WorldTextureColumns,2) - WorldTextureColumns * WorldTextureAnimationRows;
const FootPrintTiles = {
};

const MUSIC_INTRO_SUFFIX = "_intro";
const SONG_INTRO_LOOKUP = {};
const FANCY_INTRO_SONGS = {};
const CHARACTER_DATA = {};
