import * as React from 'react';
import * as PropTypes from 'prop-types';
import { TabsContainer } from './tab.styled';

export interface TabProps extends BaseProps<HTMLElement> {
  label: string | React.ReactNode;
  value: string | number;
  active?: boolean;
}

const Tab: React.FunctionComponent<TabProps> = ({ children, active }: TabProps): React.ReactElement => (
  <TabsContainer active={active as boolean}>
    { children }
  </TabsContainer>
);

Tab.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired, // eslint-disable-line react/no-unused-prop-types
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // eslint-disable-line react/no-unused-prop-types
};

export default Tab;
