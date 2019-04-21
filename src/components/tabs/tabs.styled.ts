import styled, { variable } from '../../themes/theme';

export const componentName = 'hj-tabs';

export const TabsNav = styled.nav`
  label: ${componentName};
  overflow: hidden;
  ${variable('color-dark', 'color')};
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
  ${variable('color-primary', 'background-color', 0.5)};
  position: absolute;
  left: calc(16px - 0.2em);
  bottom: 12px;
  z-index: 0;
  transition: 0.3s ease-in-out;
`;

export const TabExtra = styled.div`
  label: ${componentName}-extra;
  display: flex;
  align-items: center;
  max-height: 42px;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 0 0.2em;
`;
