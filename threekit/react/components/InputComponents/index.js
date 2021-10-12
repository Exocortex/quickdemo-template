import { ATTRIBUTE_TYPES } from '../../../constants';

//  container for Asset type Attributes
import container from './attributeContainer';
//  Asset type attributes
import SwatchComponent from './Swatch';
import CardsComponent from './Cards';
import DropdownComponent from './Dropdown';
import ButtonsComponent from './Buttons';
import RadioButtonsComponent from './RadioButtons';
import ColorSwatchComponent from './ColorSwatch';
import SwitchComponent from './Switch';
import TextInputComponent from './TextInput';
import ColorPickerComponent from './ColorPicker';
//  Array type attributes
import OrdinalFloorPlannerComponent from './OrdinalFloorPlanner';
import OrdinalListComponent from './OrdinalList';

export const Swatch = container(SwatchComponent);
export const Cards = container(CardsComponent);
export const Dropdown = container(DropdownComponent);
export const Buttons = container(ButtonsComponent);
export const RadioButtons = container(RadioButtonsComponent);
export const ColorSwatch = container(ColorSwatchComponent);
export const ColorPicker = container(ColorPickerComponent);
export const OrdinalList = container(OrdinalListComponent);
export const OrdinalFloorPlanner = container(OrdinalFloorPlannerComponent);
OrdinalFloorPlanner.Item = OrdinalFloorPlannerComponent.Item;
// export const Switch = container(SwitchComponent);
// export const TextInput = container(TextInputComponent);

export const componentOptions = {
  [ATTRIBUTE_TYPES.asset]: {
    //  First option is default
    dropdown: Dropdown,
    cards: Cards,
    swatch: Swatch,
    buttons: Buttons,
    'radio-buttons': RadioButtons,
    'color-swatch': ColorSwatch,
  },
  [ATTRIBUTE_TYPES.string]: {
    //  First option is default
    dropdown: Dropdown,
  },
  [ATTRIBUTE_TYPES.color]: {
    'color-picker': ColorPicker,
  },
};
