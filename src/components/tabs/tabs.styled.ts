import { transparentize } from 'polished';
import styled from '../../themes/theme';

export const componentName = 'hj-tabs';

export const TabsNav = styled.nav`
  label: ${componentName};
  overflow: hidden;
  color: ${({ theme }) => theme.color.dark};
`;

export const TabsWrapper = styled.div`
  label: ${componentName}-wrapper;
  display: flex;
  position: relative;
`;

export const TabItem = styled.div`
  label: ${componentName}-item;
  padding: 12px 16px;
  z-index: 1;
  cursor: pointer;
`;

export const TabInkBar = styled.div`
  label: ${componentName}-inkbar;
  height: ${18 * 0.4}px;
  background-color: ${({ theme }) => transparentize(0.5, theme.color.primary)};
  position: absolute;
  left: calc(16px - 0.2em);
  bottom: 12px;
  z-index: 0;
  transition: 0.3s ease-in-out;
`;
