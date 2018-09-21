import { ITextFieldProps, TextField } from "office-ui-fabric-react";
import * as React from "react";
import { Widget } from "react-jsonschema-form";

const onChange = onChange => (event, newValue) => {
  onChange(newValue);
};

const FabricTextHighOrder = (highOrderProps?: ITextFieldProps) => props => {
  return (
    <TextField
      value={props.value}
      disabled={props.disabled}
      onChange={onChange(props.onChange)}
      {...highOrderProps}
    />
  );
};

export const FabricText: Widget = FabricTextHighOrder();
export const FabricTextArea: Widget = FabricTextHighOrder({ multiline: true });
