import { ARRAY_VALIDATION, METADATA_RESERVED } from '../constants';

export const error = {
  [ARRAY_VALIDATION.maxItems]: () => 'No more items can be added.',
  [ARRAY_VALIDATION.maxAllowed]: (item) =>
    `You can only have ${item.metadata[METADATA_RESERVED.maxAllowed]} ${
      item.name
    } pieces.`,
  [ARRAY_VALIDATION.minProximityToSelf]: (item) =>
    `The ${item.name} piece must be atleast ${
      item.metadata[METADATA_RESERVED.minProximityToSelf]
    } spaces from itself.`,
};
