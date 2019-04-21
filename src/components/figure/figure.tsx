import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled, { variable } from '../../themes/theme';
import Figcaption, { FigcaptionProps } from './figcaption';

export const componentName = 'hj-figure';

export interface FigureProps extends BaseProps<HTMLElement> {
  figcaption: React.ReactChild;
  effect?: boolean;
}

const FigureStyled = styled.figure<FigcaptionProps>`
  label: ${componentName}-styled;
  position: relative;
  ${({ effect }) =>
    effect &&
    `
    &:hover {
      > figcaption {
        ${variable('color-dark', 'background-color', 0.2)}
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

const Figure: React.FunctionComponent<FigureProps> = ({
  children,
  figcaption,
  effect,
}: FigureProps): React.ReactElement => {
  return (
    <FigureStyled effect={effect}>
      <FigureContent>{children}</FigureContent>
      <Figcaption effect={effect}>{figcaption}</Figcaption>
    </FigureStyled>
  );
};

Figure.displayName = componentName;

Figure.propTypes = {
  figcaption: PropTypes.string.isRequired,
  effect: PropTypes.bool,
};

Figure.defaultProps = {
  figcaption: '',
};

export default Figure;
