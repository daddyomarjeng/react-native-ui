// sx.ts
import { type TextStyle, type ViewStyle } from 'react-native';
import { sizes } from './sizes'; // import your sizes

export type NumberString = number | string;
export type JustifyContentType = ViewStyle['justifyContent'];
export type AlignItemsType = ViewStyle['alignItems'];
export type AlignSelfType = ViewStyle['alignSelf'];
export type FontWeight = TextStyle['fontWeight'];
export type TextAlignType = TextStyle['textAlign'];

export interface SXProps {
  bg?: string;
  m?: NumberString;
  mb?: NumberString;
  mt?: NumberString;
  ml?: NumberString;
  mr?: NumberString;
  my?: NumberString;
  mx?: NumberString;
  p?: NumberString;
  pb?: NumberString;
  pt?: NumberString;
  pl?: NumberString;
  pr?: NumberString;
  py?: NumberString;
  px?: NumberString;
  flex?: number;
  gap?: number;
  gapX?: number;
  gapY?: number;
  fld?: 'row' | 'column';
  justify?: JustifyContentType;
  item?: AlignItemsType;
  self?: AlignSelfType;
  bw?: number;
  bc?: string;
  bbw?: number;
  btw?: number;
  blw?: number;
  brw?: number;
  bs?: 'solid' | 'dotted' | 'dashed' | undefined;
  rounded?: number;
  roundedTop?: number;
  roundedTopLeft?: number;
  roundedTopRight?: number;
  roundedBottom?: number;
  roundedBottomLeft?: number;
  roundedBottomRight?: number;
  bold?: boolean;
  fs?: keyof typeof sizes.fontSizes;
  fw?: FontWeight;
  ta?: TextAlignType;
  color?: string;
}

export interface StyleProp
  extends Omit<SXProps, 'gap'>,
    ViewStyle,
    Omit<TextStyle, 'gap' | 'color'> {
  sx?: SXProps;
}

export const parseSx = (sx: SXProps = {}): ViewStyle & TextStyle => {
  const style: any = {};

  if (sx.bg) style.backgroundColor = sx.bg;
  if (sx.m) style.margin = sx.m;
  if (sx.mb) style.marginBottom = sx.mb;
  if (sx.mt) style.marginTop = sx.mt;
  if (sx.ml) style.marginLeft = sx.ml;
  if (sx.mr) style.marginRight = sx.mr;
  if (sx.my) {
    style.marginVertical = sx.my;
  }
  if (sx.mx) {
    style.marginHorizontal = sx.mx;
  }
  if (sx.p) style.padding = sx.p;
  if (sx.pb) style.paddingBottom = sx.pb;
  if (sx.pt) style.paddingTop = sx.pt;
  if (sx.pl) style.paddingLeft = sx.pl;
  if (sx.pr) style.paddingRight = sx.pr;
  if (sx.py) style.paddingVertical = sx.py;
  if (sx.px) style.paddingHorizontal = sx.px;
  if (sx.flex !== undefined) style.flex = sx.flex;
  if (sx.fld) style.flexDirection = sx.fld;
  if (sx.justify) style.justifyContent = sx.justify;
  if (sx.item) style.alignItems = sx.item;
  if (sx.self) style.alignSelf = sx.self;
  if (sx.gap) style.gap = sx.gap;
  if (sx.gapX) style.columnGap = sx.gapX;
  if (sx.gapY) style.rowGap = sx.gapY;

  if (sx.bw !== undefined) style.borderWidth = sx.bw;
  if (sx.bc) style.borderColor = sx.bc;
  if (sx.bbw !== undefined) style.borderBottomWidth = sx.bbw;
  if (sx.btw !== undefined) style.borderTopWidth = sx.btw;
  if (sx.blw !== undefined) style.borderLeftWidth = sx.blw;
  if (sx.brw !== undefined) style.borderRightWidth = sx.brw;
  if (sx.bs) style.borderStyle = sx.bs;

  if (sx.rounded !== undefined) style.borderRadius = sx.rounded;
  if (sx.roundedTop !== undefined) {
    style.borderTopLeftRadius = sx.roundedTop;
    style.borderTopRightRadius = sx.roundedTop;
  }
  if (sx.roundedBottom !== undefined) {
    style.borderBottomLeftRadius = sx.roundedBottom;
    style.borderBottomRightRadius = sx.roundedBottom;
  }
  if (sx.roundedTopLeft !== undefined) style.borderTopLeftRadius = sx.roundedTopLeft;
  if (sx.roundedTopRight !== undefined) style.borderTopRightRadius = sx.roundedTopRight;
  if (sx.roundedBottomLeft !== undefined) style.borderBottomLeftRadius = sx.roundedBottomLeft;
  if (sx.roundedBottomRight !== undefined) style.borderBottomRightRadius = sx.roundedBottomRight;

  if (sx.bold) style.fontWeight = 'bold';
  if (sx.fs) style.fontSize = sizes.fontSizes[sx.fs];
  if (sx.fw) style.fontWeight = sx.fw;
  if (sx.ta) style.textAlign = sx.ta;
  if (sx.color) style.color = sx.color;

  return style;
};

export const mergeSx = (props: any) => {
  const { sx, style, children, ...rest } = props;
  const parsedSx = parseSx({ ...(sx || {}), ...rest });
  return { parsedSx, restProps: { style, children } };
};
