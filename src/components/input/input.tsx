import * as React from 'react';
import * as PropTypes from 'prop-types';
import { withTheme } from 'emotion-theming';
import { InputControl, InputField, InputLabel, InputBase } from './input.styled';
import { defaultTheme } from '../../themes/theme';

export interface InputProps extends Omit<BaseProps<HTMLInputElement>, 'onChange'>, React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  error?: boolean;
  required?: boolean;
  disabled?: boolean;
  password?: boolean;
  number?: boolean;
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

  public get label(): string {
    const { label, error, required } = this.props;
    if (error) return `${label || ''} Error`;
    if (required) return `${label || ''} *`;
    return label || '';
  }

  public get type(): string {
    const { password, number } = this.props;
    if (password) return 'password';
    if (number) return 'number';
    return 'text';
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
    const { theme, value, placeholder, error, required, disabled } = this.props;
    return (
      <InputControl>
        <InputField
          theme={theme}
          isFocused={isFocused}
          error={error}
          disabled={disabled}
        >
          <InputLabel
            theme={theme}
            isFocused={isFocused}
            value={value}
            placeholder={placeholder}
            error={error}
            disabled={disabled}
          >
            {this.label}
          </InputLabel>
          <InputBase
            value={value}
            onChange={this.handleChange}
            type={this.type}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
          />
        </InputField>
      </InputControl>
    );
  }
}

const Input = withTheme(InputComponent);

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  password: PropTypes.bool,
  number: PropTypes.bool,
};

Input.defaultProps = {
  theme: defaultTheme,
  value: '',
  onChange: () => {},
};

export default Input;
