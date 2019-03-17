import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Input } from '..';

describe('Input', () => {
  it('renders correctly', () => {
    const json = renderer.create(
      <Input
        value=''
        onChange={() => {}}
      />
    ).toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders style rules -> label', () => {
    const json = renderer.create(
      <Input
        value=''
        onChange={() => {}}
        label='hello'
      />
    ).toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders style rules -> placeholder', () => {
    const json = renderer.create(
      <Input
        value=''
        onChange={() => {}}
        placeholder='hello'
      />
    ).toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders style rules -> error', () => {
    const json = renderer.create(
      <Input
        value=''
        onChange={() => {}}
        error
      />
    ).toJSON();
    expect(json).toMatchSnapshot();
  });
});