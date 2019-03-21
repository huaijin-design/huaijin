import * as React from 'react';
import * as PropTypes from 'prop-types';
import { withTheme } from 'emotion-theming';
import Tab, { TabProps } from './tab';
import TabsScroll from './tabsScroll';
import { TabsNav } from './tabs.styled';
import { TabWrapper } from './tab.styled';
import compose from '../../utils/compose';
import { defaultTheme } from '../../themes/theme';
import EventBus from '../../utils/eventBus';

export interface TabsProps extends BasePropsWithoutAttr {
  children: React.ReactElement<TabProps>[];
  value: string | number;
  onChange: (value: string | number) => void;
  extra?: React.ReactNode;
}

@compose(
  withTheme,
)
class Tabs extends React.Component<TabsProps> {

  public static Tab = Tab;

  public static propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
  };

  public static defaultProps = {
    theme: defaultTheme,
  };

  public componentDidMount(): void {
    const { value } = this.props;
    EventBus.emit('TabItemChange', value);
  };

  public render(): React.ReactElement {
    const { theme, children, value, onChange, extra } = this.props;
    return (
      <TabsNav>
        <TabsScroll
          value={value}
          onChange={onChange}
          theme={theme}
          extra={extra}
        >
         { children }
        </TabsScroll>
        <TabWrapper>
          { children }
        </TabWrapper>
      </TabsNav>
    );
  };
};

export default Tabs;
