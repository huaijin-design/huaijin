import * as React from 'react';
import * as PropTypes from 'prop-types';
import { withTheme } from 'emotion-theming';
import Tab, { TabProps } from './tab';
import TabsScroll from './tabsScroll';
import { TabsNav } from './tabs.styled';
import { TabWrapper } from './tab.styled';
import { defaultTheme } from '../../themes/theme';

export interface TabsProps extends BasePropsWithoutAttr {
  children: React.ReactElement<TabProps>[];
  value: string | number;
  onChange: (value: string | number) => void;
  extra?: React.ReactNode;
}

class TabsComponent extends React.Component<TabsProps> {
  public static Tab = Tab as React.FunctionComponent<TabProps>;

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
    const { theme, children, value, onChange, extra } = this.props;
    return (
      <TabsNav theme={theme}>
        <TabsScroll
          value={value}
          onChange={onChange}
          theme={theme}
          extra={extra}
        >
          {children}
        </TabsScroll>
        <TabWrapper>{this.getTab()}</TabWrapper>
      </TabsNav>
    );
  }
}

const Tabs = withTheme(TabsComponent) as React.FunctionComponent<TabsProps> & {
  Tab: typeof Tab;
};

Tabs.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};

Tabs.defaultProps = {
  theme: defaultTheme,
};

export default Tabs;
