import * as React from 'react';
import * as PropTypes from 'prop-types';
import Tab, { TabProps } from './tab';
import TabsScroll from './tabsScroll';
import { TabsNav } from './tabs.styled';
import { TabWrapper } from './tab.styled';

export interface TabsProps extends BasePropsWithoutAttr {
  children: React.ReactElement<TabProps>[];
  value: string | number;
  onChange: (value: string | number) => void;
  extra?: React.ReactNode;
}

class Tabs extends React.Component<TabsProps> {
  public static Tab = Tab;

  public static propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onChange: PropTypes.func.isRequired,
  };

  public getTab = () => {
    const { children, value: currentValue } = this.props;
    return React.Children.map(
      children as React.ReactElement<TabProps>[],
      child => {
        const { label, value, ...rest } = child.props;
        const props = {
          label,
          value,
          active: value === currentValue,
          ...rest,
        };
        return <Tab {...props} />;
      },
    );
  };

  public render(): React.ReactElement {
    const { children, value, onChange, extra } = this.props;
    return (
      <TabsNav>
        <TabsScroll value={value} onChange={onChange} extra={extra}>
          {children}
        </TabsScroll>
        <TabWrapper>{this.getTab()}</TabWrapper>
      </TabsNav>
    );
  }
}

export default Tabs;
