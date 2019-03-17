import { css, SerializedStyles } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import { transparentize } from 'polished';
import styled, { defaultTheme, Theme } from '../../themes/theme';
import { colors } from '../../themes/variable';

export const componentName = 'hj-figcaption';

const baseStyles = ({
  theme,
  effect,
}: BaseProps | any): SerializedStyles => css`
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
      background-color: ${transparentize(0.8, (theme as Theme).color.primary)};
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
    color: ${(theme as Theme).color.white};
    text-transform: uppercase;
    opacity: 0;
    transition: opacity 0.35s, transform 0.35s;
    transform: scale3d(1.4, 1.4, 1);
  `}
`;

const StyledFigcaption = styled.figcaption`
  ${baseStyles}
`;

const Figcaption = withTheme(StyledFigcaption);

Figcaption.displayName = 'hj-figure';

Figcaption.defaultProps = {
  theme: defaultTheme,
};

export default Figcaption;
