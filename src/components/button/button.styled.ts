import styled from 'styled-components';
import { getComponentName } from '../../utils/displayName';
import { reset, colors, shadow, transition } from '../../themes/variable';

const componentName: string = getComponentName('button');

const StyledButton = styled.button.attrs({
  className: componentName,
})`
  ${reset}
  display: inline-block;
  cursor: pointer;
  white-space: nowrap;
  user-select: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

  min-width: 88px;
  min-height: 32px;
  border-radius: 2px;
  background-color: ${colors.default};
  color: ${colors.dark};
  &:hover {
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0px);
  }
  ${shadow}
  ${transition}
`;

export default StyledButton;
