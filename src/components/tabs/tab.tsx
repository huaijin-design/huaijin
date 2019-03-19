import * as React from 'react';
import * as PropTypes from 'prop-types';
import { TabsContainer } from './tab.styled';
import EventBus from '../../utils/eventBus';

export interface TabProps extends BaseProps<HTMLElement> {
  label: string | React.ReactNode;
  value: string | number;
}

class Tab extends React.Component<TabProps> {
  public static propTypes = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]), // eslint-disable-line react/no-unused-prop-types
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  public state = {
    active: false,
  };

  public componentDidMount(): void {
    const { value } = this.props;
    this.removeEvent = EventBus.on('TabItemChange', (currentValue) => {
      this.setState({
        active: currentValue === value,
      });
    });
  };

  public componentWillUnmount(): void {
    this.removeEvent();
  }

  public removeEvent: () => void = () => {};

  public render(): React.ReactElement {
    const { children } = this.props;
    const { active } = this.state;
    return (
      <TabsContainer active={active}>
        { children }
      </TabsContainer>
    );
  };
};

export default Tab;
