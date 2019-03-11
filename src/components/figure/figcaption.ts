import { css, SerializedStyles } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import { transparentize } from 'polished';
import styled, { defaultTheme } from '../../themes/theme';
import { colors } from '../../themes/variable';

export const componentName = 'hj-figcaption';

const baseStyles = ({ theme }: BaseProps): SerializedStyles => css`
  label: ${componentName};
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
    background-color: ${transparentize(0.8, theme.color.primary)};
  }
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
