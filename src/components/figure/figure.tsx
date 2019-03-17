import * as React from 'react';
import * as PropTypes from 'prop-types';
import { withTheme } from 'emotion-theming';
import { transparentize } from 'polished';
import styled, { defaultTheme, Theme } from '../../themes/theme';
import Figcaption from './figcaption';

export const componentName = 'hj-figure';

export interface FigureProps extends BaseProps {
  figcaption: React.ReactChild;
  effect?: boolean;
};

const FigureStyled = styled.figure`
  label: ${componentName}-styled;
  position: relative;
  ${({ theme, effect }: any) =>
  effect &&
  `
    &:hover {
      > figcaption {
        background-color: ${transparentize(0.2, (theme as Theme).color.dark)};
        opacity: 1;
        transform: scale3d(1, 1, 1);
      }
    }
  `}
`;

const FigureContent = styled.div`
  label: ${componentName}-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FigureBase: React.FunctionComponent<FigureProps> = ({ theme, children, figcaption, effect }: FigureProps): React.ReactElement => {
  return (
    <FigureStyled effect={effect} theme={theme}>
      <FigureContent>
        {children}
      </FigureContent>
      <Figcaption effect={effect}>
        {figcaption}
      </Figcaption>
    </FigureStyled>
  );
};

const Figure = withTheme(FigureBase);

Figure.displayName = componentName;

Figure.propTypes = {
  figcaption: PropTypes.string.isRequired,
  effect: PropTypes.bool,
};

Figure.defaultProps = {
  theme: defaultTheme,
  figcaption: '',
};

export default Figure;
