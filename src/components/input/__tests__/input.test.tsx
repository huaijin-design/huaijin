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

  it('renders style rules -> required', () => {
    const json = renderer.create(
      <Input
        value=''
        onChange={() => {}}
        required
      />
    ).toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders style rules -> disabled', () => {
    const json = renderer.create(
      <Input
        value=''
        onChange={() => {}}
        disabled
      />
    ).toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders style rules -> password', () => {
    const json = renderer.create(
      <Input
        value=''
        onChange={() => {}}
        password
      />
    ).toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders style rules -> number', () => {
    const json = renderer.create(
      <Input
        value=''
        onChange={() => {}}
        number
      />
    ).toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders style rules -> multiline', () => {
    const json = renderer.create(
      <Input
        value=''
        onChange={() => {}}
        multiline
        rows={4}
      />
    ).toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders style rules -> fullWidth', () => {
    const json = renderer.create(
      <Input
        value=''
        onChange={() => {}}
        fullWidth
      />
    ).toJSON();
    expect(json).toMatchSnapshot();
  });
});
