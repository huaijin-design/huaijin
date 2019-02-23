import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Button, buttonDefaultTheme } from '../..';
import { transparentize } from 'polished';

describe('Button', () => {
  it('renders correctly', () => {
    const json = renderer.create(
      <Button>Default</Button>
    ).toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders base style', () => {
    const json = renderer.create(
      <Button>Default</Button>
    ).toJSON();
    expect(json).toHaveStyleRule('min-width', '88px');
    expect(json).toHaveStyleRule('min-height', '32px');
    expect(json).toHaveStyleRule('border-radius', '2px');
    expect(json).toHaveStyleRule('font-size', buttonDefaultTheme.fontSize.button);
    expect(json).toHaveStyleRule('transition', 'box-shadow .3s ease,transform .3s ease');
    expect(json).toHaveStyleRule(
      'transform',
      'translate3d(0,-2px,0) scale3d(1.04,1.04,1.04)',
      {
        modifier: ':hover',
      }
    );
    expect(json).toHaveStyleRule(
      'transform',
      'translate3d(0,0,0) scale3d(1,1,1)',
      {
        modifier: ':active',
      }
    );
  });

  it('renders style rules -> color', () => {
    const defaults = renderer.create(
      <Button>Default</Button>
    ).toJSON();
    expect(defaults).toHaveStyleRule('color', buttonDefaultTheme.color.button.default);
    expect(defaults).toHaveStyleRule('background-color', buttonDefaultTheme.background.button.default);
    expect(defaults).toHaveStyleRule(
      'box-shadow',
      `0px 6px 12px ${transparentize(.25, buttonDefaultTheme.shadow.button.default)}`,
      {
        modifier: ':hover',
      }
    );
    const primary = renderer.create(
      <Button color="primary">Primary</Button>
    ).toJSON();
    expect(primary).toHaveStyleRule('color', buttonDefaultTheme.color.button.primary);
    expect(primary).toHaveStyleRule('background-color', buttonDefaultTheme.background.button.primary);
    const success = renderer.create(
      <Button color="success">Success</Button>
    ).toJSON();
    expect(success).toHaveStyleRule('color', buttonDefaultTheme.color.button.success);
    expect(success).toHaveStyleRule('background-color', buttonDefaultTheme.background.button.success);
    const warning = renderer.create(
      <Button color="warning">Warning</Button>
    ).toJSON();
    expect(warning).toHaveStyleRule('color', buttonDefaultTheme.color.button.warning);
    expect(warning).toHaveStyleRule('background-color', buttonDefaultTheme.background.button.warning);
    const danger = renderer.create(
      <Button color="danger">Danger</Button>
    ).toJSON();
    expect(danger).toHaveStyleRule('color', buttonDefaultTheme.color.button.danger);
    expect(danger).toHaveStyleRule('background-color', buttonDefaultTheme.background.button.danger);
  });
});
