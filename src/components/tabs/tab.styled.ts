import styled from '../../themes/theme';

export const componentName = 'hj-tabs-tab';

export const TabWrapper = styled.div`
  label: ${componentName}-wrapper;
  display: flex;
`;

interface TabsContainerProps {
  active: boolean;
}

export const TabsContainer = styled.section<TabsContainerProps>`
  label: ${componentName};
  overflow: hidden;
  flex-shrink: 0;
  transition: 0.3s ease-in-out;
  width: ${({ active }) => (active ? '100%' : 0)};
  opacity: ${({ active }) => (active ? 1 : 0)};
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  transform: translate3d(0, ${({ active }) => (active ? 0 : '100%')}, 0);
`;
