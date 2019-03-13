import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Button } from '..';

describe('Button', () => {
  it('renders correctly', () => {
    const json = renderer.create(
      <Button>Default</Button>
    ).toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders style rules -> primary', () => {
    const json = renderer.create(
      <Button primary>Default</Button>
    ).toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders style rules -> ghost', () => {
    const json = renderer.create(
      <Button ghost>Ghost</Button>
    ).toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders style rules -> disabled', () => {
    const json = renderer.create(
      <Button disabled>Disabled</Button>
    ).toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders style rules -> text', () => {
    const json = renderer.create(
      <Button text>Text</Button>
    ).toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders style rules -> circle', () => {
    const json = renderer.create(
      <Button circle>C</Button>
    ).toJSON();
    expect(json).toMatchSnapshot();
  });
});
