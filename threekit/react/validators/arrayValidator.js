import { error as errorMessaging } from '../messaging';
import { METADATA_RESERVED, ARRAY_VALIDATION } from '../../constants';

export const arrayValidator = (options, arrayState) => {
  const itemCount = {};

  for (let i = 0; i < arrayState.length; i++) {
    const item = arrayState[i].value?.assetId?.length
      ? options[arrayState[i].value.assetId]
      : undefined;
    if (!item) continue;

    //  Add the item to the totals count
    if (!itemCount[item.assetId]) itemCount[item.assetId] = 1;
    else itemCount[item.assetId]++;

    //  Checks to make sure the current item doesn't exceed
    //  its max-allowed count
    if (
      item.metadata[METADATA_RESERVED.maxAllowed] &&
      itemCount[item.assetId] > item.metadata[METADATA_RESERVED.maxAllowed]
    )
      return errorMessaging[ARRAY_VALIDATION.maxAllowed](item);

    //  Checks to make sure the current item maintains its
    //  minumum defined proximity to the next of the same kind
    //  of item
    if (item.metadata[METADATA_RESERVED.minProximityToSelf]) {
      const minProximityToSelf =
        item.metadata[METADATA_RESERVED.minProximityToSelf];
      for (
        let j = 1;
        j < minProximityToSelf && i + j < arrayState.length;
        j++
      ) {
        if (arrayState[i + j]?.value?.assetId === item.assetId)
          return errorMessaging[ARRAY_VALIDATION.minProximityToSelf](item);
      }
    }
  }

  return undefined;
};

export default arrayValidator;
