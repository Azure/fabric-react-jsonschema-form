import { ComboBox, IComboBoxProps } from "office-ui-fabric-react";
import * as React from "react";
import { WidgetProps } from "react-jsonschema-form";

export const FabricComboBox = (
  props: WidgetProps & { options: { fabricProps: IComboBoxProps } }
) => {
  return (
    <ComboBox
      disabled={props.disabled}
      onChange={props.onChange}
      value={props.value}
      {...props.options.fabricProps}
    />
  );
};
