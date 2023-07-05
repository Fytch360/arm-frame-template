import { css, FlattenSimpleInterpolation } from "styled-components";
import { baseTheme } from "./base-theme";

const commonFontStyles = css`
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
`;

/**
 * Dispaly
 */
const display: FlattenSimpleInterpolation = css`
  font: ${baseTheme.fontWeights.medium} ${baseTheme.fontSizes.display} /
    ${baseTheme.fontLineHeights.display} ${baseTheme.fontFamily.body};
  color: ${baseTheme.colors.display700};
  ${commonFontStyles};
`;

/**
 * Headlines
 */
const headline1: FlattenSimpleInterpolation = css`
  font: ${baseTheme.fontWeights.medium} ${baseTheme.fontSizes.headline1} /
    ${baseTheme.fontLineHeights.headline1} ${baseTheme.fontFamily.body};
  color: ${baseTheme.colors.display700};
  ${commonFontStyles};
`;

const headline2: FlattenSimpleInterpolation = css`
  font: ${baseTheme.fontWeights.medium} ${baseTheme.fontSizes.headline2} /
    ${baseTheme.fontLineHeights.headline2} ${baseTheme.fontFamily.body};
  color: ${baseTheme.colors.display700};
  ${commonFontStyles};
`;

const subheadline: FlattenSimpleInterpolation = css`
  font: ${baseTheme.fontWeights.medium} ${baseTheme.fontSizes.subheadline} /
    ${baseTheme.fontLineHeights.subheadline} ${baseTheme.fontFamily.body};
  color: ${baseTheme.colors.display700};
  ${commonFontStyles};
`;

const subheadlineRegular: FlattenSimpleInterpolation = css`
  font: ${baseTheme.fontWeights.regular} ${baseTheme.fontSizes.subheadline} /
    ${baseTheme.fontLineHeights.subheadline} ${baseTheme.fontFamily.body};
  color: ${baseTheme.colors.display700};
  ${commonFontStyles};
`;

/**
 * Body
 */
const body: FlattenSimpleInterpolation = css`
  font: ${baseTheme.fontWeights.regular} ${baseTheme.fontSizes.body} /
    ${baseTheme.fontLineHeights.body} ${baseTheme.fontFamily.body};
  color: ${baseTheme.colors.display700};
  ${commonFontStyles};
`;

const bodyMedium: FlattenSimpleInterpolation = css`
  font: ${baseTheme.fontWeights.medium} ${baseTheme.fontSizes.body} /
    ${baseTheme.fontLineHeights.body} ${baseTheme.fontFamily.body};
  color: ${baseTheme.colors.display700};
  ${commonFontStyles};
`;

/**
 * Paragraph
 */
const paragraph: FlattenSimpleInterpolation = css`
  font: ${baseTheme.fontWeights.regular} ${baseTheme.fontSizes.paragraph} /
    ${baseTheme.fontLineHeights.paragraph} ${baseTheme.fontFamily.body};
  color: ${baseTheme.colors.displayBase};
  ${commonFontStyles};
`;

/**
 * Data
 */
const data: FlattenSimpleInterpolation = css`
  font: ${baseTheme.fontWeights.regular} ${baseTheme.fontSizes.body} /
    ${baseTheme.fontLineHeights.body} ${baseTheme.fontFamily.data};
  color: ${baseTheme.colors.display700};
  ${commonFontStyles};
`;

/**
 * Captions
 */
const caption: FlattenSimpleInterpolation = css`
  font: ${baseTheme.fontWeights.regular} ${baseTheme.fontSizes.caption} /
    ${baseTheme.fontLineHeights.caption} ${baseTheme.fontFamily.body};
  color: ${baseTheme.colors.display700};
  ${commonFontStyles};
`;

const dataCaption: FlattenSimpleInterpolation = css`
  font: ${baseTheme.fontWeights.regular} ${baseTheme.fontSizes.caption} /
    ${baseTheme.fontLineHeights.caption} ${baseTheme.fontFamily.data};
  color: ${baseTheme.colors.display700};
  ${commonFontStyles};
`;

const captionMedium: FlattenSimpleInterpolation = css`
  font: ${baseTheme.fontWeights.bold} ${baseTheme.fontSizes.caption} /
    ${baseTheme.fontLineHeights.caption} ${baseTheme.fontFamily.body};
  color: ${baseTheme.colors.display700};
  ${commonFontStyles};
`;

export const fontStyles = {
  display,
  headline1,
  headline2,
  subheadline,
  subheadlineRegular,
  body,
  bodyMedium,
  paragraph,
  data,
  caption,
  dataCaption,
  captionMedium,
};
