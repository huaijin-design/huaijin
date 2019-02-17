import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Button } from '..';

describe('Button', () => {
  it('renders correctly', () => {
    const json = renderer.create(<Button>Default</Button>).toJSON();
    expect(json).toMatchSnapshot();
  });
});
