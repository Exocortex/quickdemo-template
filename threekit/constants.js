/*****************************************************
 * Dev-Kit Config
 ****************************************************/

export const DEFAULT_SERVER_URL = `https://localhost:5000`;

/*****************************************************
 * Dev-Kit Config
 ****************************************************/

export const DEFAULT_CLASS_NAME = 'threekit-react';
export const CLASS_NAME_PREFIX = 'tk';

export const INPUT_COMPONENT_CLASS_NAME = `${DEFAULT_CLASS_NAME} ${CLASS_NAME_PREFIX}-input`;
export const WIDGET_CLASS_NAME = `${DEFAULT_CLASS_NAME} ${CLASS_NAME_PREFIX}-widget`;
export const LAYOUT_CLASS_NAME = `${DEFAULT_CLASS_NAME} ${CLASS_NAME_PREFIX}-layout`;
export const TOOL_CLASS_NAME = `${DEFAULT_CLASS_NAME} ${CLASS_NAME_PREFIX}-tool`;
export const DISPLAY_CLASS_NAME = `${DEFAULT_CLASS_NAME} ${CLASS_NAME_PREFIX}-display`;

/*****************************************************
 * Saved Configuration Workflow
 ****************************************************/

export const TK_SAVED_CONFIG_PARAM_KEY = 'tkConfigId';

/*****************************************************
 * Threekit Player initialization Defaults
 ****************************************************/

export const TK_PLAYER_DIV_ID = 'threekit-player';

export const DEFAULT_PLAYER_CONFIG = {
  authToken: undefined,
  elementId: undefined,
  cache: undefined,
  stageId: undefined,
  assetId: undefined,
  showConfigurator: false,
  initialConfiguration: undefined,
  showLoadingThumbnail: false,
  showLoadingProgress: true,
  onLoadingProgress: undefined,
  showAR: false,
  showShare: false,
  locale: undefined,
  allowMobileVerticalOrbit: false,
  publishStage: undefined,
};

/*****************************************************
 * Attributes
 ****************************************************/

export const ATTRIBUTES_RESERVED = {
  step: '_step',
  camera: '_camera',
  dimensions: '_dimensions',
};

export const ATTRIBUTE_TYPES = {
  asset: 'Asset',
  string: 'String',
  number: 'Number',
  color: 'Color',
  boolean: 'Boolean',
  arraySelector: 'AttributesArraySelector',
  arrayEditor: 'AttributesArrayEditor',
};

export const SORT_OPTIONS = {
  ascending: 'ascending',
  descending: 'descending',
};

/*****************************************************
 * Psuedo Array Attribute
 ****************************************************/

//  Validation properties for entire array
const arrayValidations = {
  maxItems: 'maxItems',
};

//  Validation properties for each item in the array
const arrayItemValidations = {
  minAllowed: 'minAllowed',
  maxAllowed: 'maxAllowed',
  minProximityToSelf: 'minProximityToSelf',
  maxProximityToSelf: 'maxProximityToSelf',
  minProximityToStart: 'minProximityToStart',
  maxProximityToStart: 'maxProximityToStart',
  minProximityToFinish: 'minProximityToFinish',
  maxProximityToFinish: 'maxProximityToFinish',
  minProximityToEnds: 'minProximityToEnds',
  maxProximityToEnds: 'maxProximityToEnds',
  positionsNotAllowed: 'positionsNotAllowed',
  positionsAllowed: 'positionsAllowed',
};

export const ARRAY_VALIDATION = Object.assign(
  arrayValidations,
  arrayItemValidations
);
/*****************************************************
 * Reserved Catalog Item Metadata Properties
 ****************************************************/

export const METADATA_RESERVED = Object.assign(
  {
    title: '_title',
    description: '_description',
    thumbnail: '_thumbnail',
    sku: '_sku',
    filters: '_filters',
    tooltip: '_tooltip',
    price: '_price',
    description: '_description',
    translate: '_translate',
    rotate: '_rotate',
    scale: '_scale',
  },
  //  Array type related metadata
  Object.entries(arrayItemValidations).reduce(
    (output, [key, val]) => Object.assign(output, { [key]: `_${val}` }),
    {}
  )
);

/*****************************************************
 * Snapshot
 ****************************************************/

export const SNAPSHOT_FORMATS = {
  png: 'png',
  jpeg: 'jpeg',
};

export const SNAPSHOT_OUTPUTS = {
  url: 'url',
  download: 'download',
  dataUrl: 'dataUrl',
  blob: 'blob',
};

/*****************************************************
 * Additional Display options
 ****************************************************/

export const DISPLAY_OPTIONS = {
  modal: 'modal',
  drawer: 'drawer',
};
