import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Button } from '../..';

describe('Button', () => {
  it('renders correctly', () => {
    const json = renderer.create(
      <Button>Default</Button>
    ).toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders style rules -> primary', () => {
    const json = renderer.create(
      <Button primary={true}>Default</Button>
    ).toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders style rules -> ghost', () => {
    const json = renderer.create(
      <Button ghost={true}>Ghost</Button>
    ).toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders style rules -> disabled', () => {
    const json = renderer.create(
      <Button disabled={true}>Disabled</Button>
    ).toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders style rules -> round', () => {
    const json = renderer.create(
      <Button round={true}>Round</Button>
    ).toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders style rules -> text', () => {
    const json = renderer.create(
      <Button text={true}>Text</Button>
    ).toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders style rules -> circle', () => {
    const json = renderer.create(
      <Button circle={true}>C</Button>
    ).toJSON();
    expect(json).toMatchSnapshot();
  });
});
