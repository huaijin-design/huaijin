import * as React from 'react';
import * as PropTypes from 'prop-types';
import { withTheme } from 'emotion-theming';
import { InputControl, InputField, InputLabel, InputBase } from './input.styled';
import { defaultTheme } from '../../themes/theme';

export interface InputProps extends BaseProps {
  value: string;
  onChange: (e: string) => void;

  label?: string;
  placeholder?: string;
  error?: boolean;
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
    const { theme, value, label, placeholder, error } = this.props;
    return (
      <InputControl>
        <InputField theme={theme} isFocused={isFocused} error={error}>
          <InputLabel
            theme={theme}
            isFocused={isFocused}
            value={value}
            placeholder={placeholder}
            error={error}
          >
            {
              error
                ? `${label || ''} Error`
                : label
            }
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
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
};

Input.defaultProps = {
  theme: defaultTheme,
  value: '',
  onChange: () => {},
};

export default Input;
