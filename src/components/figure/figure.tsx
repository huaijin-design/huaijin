import * as React from 'react';
import * as PropTypes from 'prop-types';
import { withTheme } from 'emotion-theming';
import styled, { defaultTheme } from '../../themes/theme';
import Figcaption from './figcaption';

export const componentName = 'hj-figure';

export interface FigureProps extends BaseProps {
  figcaption: string;
};

const FigureContent = styled.div`
  label: ${componentName}-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FigureBase: React.FunctionComponent<FigureProps> = ({ children, figcaption }: FigureProps): React.ReactElement => {
  return (
    <figure>
      <FigureContent>
        {children}
      </FigureContent>
      <Figcaption>
        {figcaption}
      </Figcaption>
    </figure>
  );
};

const Figure = withTheme(FigureBase);

Figure.displayName = componentName;

Figure.propTypes = {
  figcaption: PropTypes.string.isRequired,
};

Figure.defaultProps = {
  theme: defaultTheme,
  figcaption: '',
};

export default Figure;
