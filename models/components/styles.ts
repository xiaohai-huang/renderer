import { FontWeight, FontStyles, TextOverflowModes, CursorType, PointerEvents, Visibility } from './styles-enums';
import { YogaValueAux } from './yoga';
import { ColorAux } from '../values/color';
import { AssetReference } from '../values/asset-reference';
import { UnityObject } from '../native/context';
import { Vector2Aux } from '../values/values';
import { EnumOrLiteral } from '../values/enum';

export interface Style {
  opacity?: number;
  zOrder?: number;
  visibility?: EnumOrLiteral<typeof Visibility> | boolean;
  cursor?: EnumOrLiteral<typeof CursorType> | string;
  pointerEvents?: EnumOrLiteral<typeof PointerEvents>;

  backgroundColor?: ColorAux;
  backgroundImage?: AssetReference;
  borderRadius?: number;
  borderColor?: ColorAux;
  boxShadow?: ShadowDefinition | string;

  translate?: Vector2Aux;
  translateRelative?: boolean;
  pivot?: Vector2Aux;
  scale?: Vector2Aux;
  rotate?: number;

  // Inherited styles
  font?: UnityObject;
  fontFamily?: AssetReference;
  fontColor?: ColorAux;
  fontWeight?: EnumOrLiteral<typeof FontWeight>;
  fontStyle?: EnumOrLiteral<typeof FontStyles>;
  fontSize?: YogaValueAux;
  textOverflow?: EnumOrLiteral<typeof TextOverflowModes>;
}
