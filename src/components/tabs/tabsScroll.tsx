import * as React from 'react';
import { TabProps } from './tab';
import { TabsWrapper, TabItem, TabInkBar, TabExtra } from './tabs.styled';

interface TabsScrollProps extends BasePropsWithoutAttr {
  children: React.ReactElement<TabProps>[];
  value: string | number;
  onChange: (value: string | number) => void;
  extra?: React.ReactNode;
}

class TabsScroll extends React.Component<TabsScrollProps> {
  public state = {
    width: 0,
    left: 0,
  };

  public TabItem = new Map();

  public componentDidMount(): void {
    const { value } = this.props;
    this.handleTabInkChange(value);
  };

  public handleClickItem = (value: string | number) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(value);
      this.handleTabInkChange(value);
    }
  };

  public handleTabInkChange = (value: string | number) => {
    const { width, left } = this.TabItem.get(value).current.getBoundingClientRect();
    const { left: parentLeft } = this.TabItem.get(value).current.parentElement.getBoundingClientRect();
    this.setState({
      width: `calc(${width}px - 32px + 0.4em)`,
      left: `${left - parentLeft}`,
    });
  };

  public render(): React.ReactElement {
    const { width, left } = this.state;
    const { children, theme, extra } = this.props;
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
      <TabsWrapper>
        { scroll }
        {
          extra && (
            <TabExtra>
              { extra }
            </TabExtra>
          )
        }
        <TabInkBar
          theme={theme}
          style={{
            transform: `translate3d(${left}px, 0px, 0px)`,
            width,
          }}
        />
      </TabsWrapper>
    );
  };
};

export default TabsScroll;
