import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Button, theme, variable } from '../..';
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
    expect(json).toHaveStyleRule('font-size', theme.buttonDefaultTheme.fontSize.button);
    expect(json).toHaveStyleRule('transition', 'box-shadow .3s ease,transform .3s ease,background .3s ease');
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
    expect(defaults).toHaveStyleRule('color', theme.buttonDefaultTheme.color.button.default);
    expect(defaults).toHaveStyleRule('background-color', theme.buttonDefaultTheme.background.button.default);
    expect(defaults).toHaveStyleRule(
      'box-shadow',
      `0px 6px 12px ${transparentize(.25, theme.buttonDefaultTheme.shadow.button.default)}`,
      {
        modifier: ':hover',
      }
    );
    const primary = renderer.create(
      <Button color="primary">Primary</Button>
    ).toJSON();
    expect(primary).toHaveStyleRule('color', theme.buttonDefaultTheme.color.button.primary);
    expect(primary).toHaveStyleRule('background-color', theme.buttonDefaultTheme.background.button.primary);
    const success = renderer.create(
      <Button color="success">Success</Button>
    ).toJSON();
    expect(success).toHaveStyleRule('color', theme.buttonDefaultTheme.color.button.success);
    expect(success).toHaveStyleRule('background-color', theme.buttonDefaultTheme.background.button.success);
    const warning = renderer.create(
      <Button color="warning">Warning</Button>
    ).toJSON();
    expect(warning).toHaveStyleRule('color', theme.buttonDefaultTheme.color.button.warning);
    expect(warning).toHaveStyleRule('background-color', theme.buttonDefaultTheme.background.button.warning);
    const danger = renderer.create(
      <Button color="danger">Danger</Button>
    ).toJSON();
    expect(danger).toHaveStyleRule('color', theme.buttonDefaultTheme.color.button.danger);
    expect(danger).toHaveStyleRule('background-color', theme.buttonDefaultTheme.background.button.danger);
  });

  it('renders style rules -> ghost', () => {
    const json = renderer.create(
      <Button ghost={true}>Ghost</Button>
    ).toJSON();
    expect(json).toHaveStyleRule('box-shadow', 'none');
    expect(json).toHaveStyleRule('background', 'transparent');
    expect(json).toHaveStyleRule('border', `1px solid ${variable.colors.white}`);
    expect(json).toHaveStyleRule('color', variable.colors.white);
    expect(json).toHaveStyleRule(
      'color',
      variable.colors.dark,
      {
        modifier: ':hover',
      }
    );
    expect(json).toHaveStyleRule(
      'background-color',
      variable.colors.white,
      {
        modifier: ':hover',
      }
    );
    expect(json).toHaveStyleRule(
      'color',
      variable.colors.dark,
      {
        modifier: ':active',
      }
    );
    expect(json).toHaveStyleRule(
      'background-color',
      variable.colors.white,
      {
        modifier: ':active',
      }
    );
  });

  it('renders style rules -> disabled', () => {
    const json = renderer.create(
      <Button disabled={true}>Disabled</Button>
    ).toJSON();
    expect(json).toHaveStyleRule('box-shadow', 'none');
    expect(json).toHaveStyleRule('cursor', 'not-allowed');
    expect(json).toHaveStyleRule('background-color', transparentize(.88, variable.colors.dark));
    expect(json).toHaveStyleRule('color', transparentize(.74, variable.colors.dark));
    expect(json).toHaveStyleRule(
      'box-shadow',
      'none',
      {
        modifier: ':hover',
      }
    );
    expect(json).toHaveStyleRule(
      'transform',
      'none',
      {
        modifier: ':hover',
      }
    );
    expect(json).toHaveStyleRule(
      'box-shadow',
      'none',
      {
        modifier: ':active',
      }
    );
    expect(json).toHaveStyleRule(
      'transform',
      'none',
      {
        modifier: ':active',
      }
    );
  });

  it('renders style rules -> round', () => {
    const json = renderer.create(
      <Button round={true}>Round</Button>
    ).toJSON();
    expect(json).toHaveStyleRule('border-radius', '100px');
  });

  it('renders style rules -> text', () => {
    const json = renderer.create(
      <Button text={true}>Text</Button>
    ).toJSON();
    expect(json).toHaveStyleRule('box-shadow', 'none');
    expect(json).toHaveStyleRule('background', 'none');
  });

  it('renders style rules -> circle', () => {
    const json = renderer.create(
      <Button circle={true}>C</Button>
    ).toJSON();
    expect(json).toHaveStyleRule('min-width', '32px');
    expect(json).toHaveStyleRule('width', '32px');
    expect(json).toHaveStyleRule('height', '32px');
    expect(json).toHaveStyleRule('padding', '4px');
    expect(json).toHaveStyleRule('overflow', 'hidden');
    expect(json).toHaveStyleRule('border-radius', '50%');
  });
});
