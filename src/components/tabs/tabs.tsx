import * as React from 'react';
import * as PropTypes from 'prop-types';
import { withTheme } from 'emotion-theming';
import Tab, { TabProps } from './tab';
import { TabsNav, TabsWrapper, TabItem, TabInkBar } from './tabs.styled';
import { TabWrapper } from './tab.styled';
import compose from '../../utils/compose';
import EventBus from '../../utils/eventBus';
import { defaultTheme } from '../../themes/theme';

export interface TabsProps extends BasePropsWithoutAttr {
  children: React.ReactElement<TabProps>[];
  value: string | number;
  onChange: (value: string | number) => void;
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

  public TabItem = new Map();

  public state = {
    width: 0,
    left: 0,
  };

  public componentDidMount(): void {
    const { value } = this.props;
    this.handleTabInkChange(value);
  };

  public handleTabInkChange = (value: string | number) => {
    EventBus.emit('TabItemChange', value);
    const { width, left } = this.TabItem.get(value).current.getBoundingClientRect();
    const { left: parentLeft } = this.TabItem.get(value).current.parentElement.getBoundingClientRect();
    this.setState({
      width: `calc(${width}px - 32px + 0.4em)`,
      left: `${left - parentLeft}`,
    });
  };

  public handleClickItem = (value: string) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(value);
      this.handleTabInkChange(value);
    }
  };

  public render(): React.ReactElement {
    const { theme, children } = this.props;
    const { width, left } = this.state;
    const scroll = React.Children.map(children, (child: React.ReactElement) => {
      this.TabItem.set(child.props.value, React.createRef());
      const handleClick = (): void => { this.handleClickItem(child.props.value); };
      return (
        <TabItem ref={this.TabItem.get(child.props.value)} onClick={handleClick}>
          { child.props.label }
        </TabItem>
      );
    });
    return (
      <TabsNav>
        <TabsWrapper>
          { scroll }
          <TabInkBar
            theme={theme}
            style={{
              transform: `translate3d(${left}px, 0px, 0px)`,
              width,
            }}
          />
        </TabsWrapper>
        <TabWrapper>
          { children }
        </TabWrapper>
      </TabsNav>
    );
  };
};

export default Tabs;
