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
  width: 100%;
  transition: 0.3s ease-in-out;
  opacity: ${({ active }) => (active ? 1 : 0)};
  height: ${({ active }) => (active ? '100%' : 0)};
  margin-left: ${({ active }) => (active ? 0 : '-100%')};
`;
