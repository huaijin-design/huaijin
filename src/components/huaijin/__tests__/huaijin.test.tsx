import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { matchers } from 'jest-emotion';
import { Huaijin } from '..';
import { Button } from '../../button';

// Add the custom matchers provided by 'jest-emotion'
expect.extend(matchers);

describe('Huaijin', () => {
  it('normal use of the theme', () => {
    const theme = {
      color: {
        dark: '#000',
      },
    };
    const json = renderer
      .create(
        <Huaijin theme={theme}>
          <Button>theme</Button>
        </Huaijin>,
      )
      .toJSON();
    expect(json).toHaveStyleRule('color', theme.color.dark);
    expect(json).toMatchSnapshot();
  });
});
