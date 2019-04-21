import { css, SerializedStyles } from '@emotion/core';
import styled, { variable } from '../../themes/theme';
import { colors } from '../../themes/variable';

export const componentName = 'hj-figcaption';

export interface FigcaptionProps extends BaseProps<HTMLElement> {
  effect?: boolean;
}

const baseStyles = ({ effect }: FigcaptionProps): SerializedStyles => css`
  label: ${componentName};
  ${!effect &&
    `
    margin-top: 0.4em;
    padding: 0 1em;
    font-size: 0.9em;
    line-height: 2.2;
    text-align: center;
    color: ${colors.placeholder};
    position: relative;
    &::after {
      content: '';
      width: 20%;
      height: 1px;
      position: absolute;
      left: 40%;
      bottom: 0;
      ${variable('color-primary', 'background-color', 0.8)}
    }
  `}
  ${effect &&
    `
    min-height: 40px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    padding: 0.4em 1em 0.4em 0.4em;
    ${variable('color-white', 'color')}
    text-transform: uppercase;
    opacity: 0;
    transition: opacity 0.35s, transform 0.35s;
    transform: scale3d(1.4, 1.4, 1);
  `}
`;

const Figcaption = styled.figcaption<FigcaptionProps>`
  ${baseStyles}
`;

Figcaption.displayName = 'hj-figure';

export default Figcaption;
