import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Huaijin, Button } from '../../../index';

describe('Button', () => {
  const theme = {
    default: '#f5f5f5',
  };

  it('renders correctly', () => {
    const json = renderer.create(
      <Huaijin theme={theme}>
        <Button>Default</Button>
      </Huaijin>
    ).toJSON();
    expect(json).toMatchSnapshot();
  });
});
