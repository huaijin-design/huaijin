import * as React from 'react';
import * as PropTypes from 'prop-types';
import { withTheme } from 'emotion-theming';
import { InputControl, InputField, InputLabel, InputBase } from './input.styled';
import { defaultTheme } from '../../themes/theme';

export interface InputProps extends BaseProps {
  value?: string;
  onChange?: (e: string) => void;

  label?: string;
  placeholder?: string;
}

interface InputStates {
  isFocused: boolean;
}

class InputComponent extends React.Component<InputProps, InputStates> {
  public constructor(props: InputProps) {
    super(props);

    this.state = {
      isFocused: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  public handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { onChange } = this.props;
    if (onChange && e && e.target) {
      (onChange as any)(e.target.value);
    }
  }

  public handleFocus(): void {
    this.setState(({ isFocused }) => ({ isFocused: !isFocused }));
  };

  public handleBlur(): void {
    this.setState(({ isFocused }) => ({ isFocused: !isFocused }));
  };

  public render(): React.ReactElement {
    const { isFocused } = this.state;
    const { value, label, placeholder } = this.props;
    return (
      <InputControl>
        <InputField isFocused={isFocused}>
          <InputLabel
            isFocused={isFocused}
            value={value}
            placeholder={placeholder}
          >
            {label}
          </InputLabel>
          <InputBase
            value={value}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            placeholder={placeholder}
          />
        </InputField>
      </InputControl>
    );
  }
}

const Input = withTheme(InputComponent);

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  theme: defaultTheme,
};

export default Input;