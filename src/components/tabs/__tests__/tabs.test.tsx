import * as React from 'react';
import { mount } from 'enzyme';
import { Tabs } from '..';

describe('Tabs', () => {
  it('renders correctly', () => {
    const node = mount(
      <Tabs value="tab1" onChange={() => {}}>
        <Tabs.Tab label="tab1" value="tab1">
          tab1 content
        </Tabs.Tab>
        <Tabs.Tab label="tab22" value="tab2">
          tab2 content
        </Tabs.Tab>
        <Tabs.Tab label="tab333" value="tab3">
          tab3 content
        </Tabs.Tab>
      </Tabs>,
    );
    expect(node).toMatchSnapshot();
  });
});
