import * as React from 'react';
import styled from '../../themes/theme';
import Figcaption from './figcaption.styled';

export interface FigureProps extends BaseProps {
  figcaption?: string;
}

const FigureContent = styled.div`
  label: hj-figure-content;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Figure: React.FunctionComponent<FigureProps> = ({ children, figcaption }: FigureProps): React.ReactElement => {
  return (
    <figure>
      <FigureContent>
        {children}
      </FigureContent>
      <Figcaption>
        {figcaption}
      </Figcaption>
    </figure>
  )
};

export default Figure;
