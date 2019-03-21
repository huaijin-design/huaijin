import { Dispatch, SetStateAction, useState, useCallback } from 'react';

interface UseModel {
  value: string | number;
  setValue: Dispatch<SetStateAction<string | number>>;
  model: {
    value: string | number;
    onChange: (v: string | number) => void;
  };
  reset: () => void;
}

function useModel(initialValue: string | number): UseModel {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback(v => {
    setValue(v);
  }, []);

  const reset = (): void => setValue(initialValue);

  return {
    value,
    setValue,
    model: {
      value,
      onChange,
    },
    reset,
  };
}

export default useModel;
