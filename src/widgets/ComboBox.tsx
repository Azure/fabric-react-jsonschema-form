import {
  ComboBox,
  IComboBoxOption,
  IComboBoxProps
} from "office-ui-fabric-react";
import * as React from "react";
import { WidgetProps } from "react-jsonschema-form";

const onChange = onChange => (event, option: IComboBoxOption, index, value) => {
  if (option) {
    onChange(option.text);
  } else {
    onChange(value);
  }
};

export const FabricComboBox = (
  props: WidgetProps & { options: { fabricProps: IComboBoxProps } }
) => {
  return (
    <ComboBox
      disabled={props.disabled}
      onChange={onChange(props.onChange)}
      value={props.value}
      placeholder={props.placeholder}
      {...props.options.fabricProps}
    />
  );
};
