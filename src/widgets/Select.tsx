import { ComboBox, DropdownMenuItemType } from "office-ui-fabric-react";
import * as React from "react";
import { WidgetProps } from "react-jsonschema-form";

export interface Options {
  enumOptions: Array<{
    value: string;
    label: string;
    itemType?: DropdownMenuItemType;
  }>;
}

const onChangedPassthrough = props => event => {
  props.onChange(event.key);
};

export const FabricSelect: React.StatelessComponent<WidgetProps> = props => {
  const options = props.options as Options;
  return (
    <ComboBox
      selectedKey={props.value}
      disabled={props.disabled}
      placeholder={props.placeholder}
      onChanged={onChangedPassthrough(props)}
      options={options.enumOptions.map(({ value, label, itemType }) => ({
        key: value,
        text: label,
        itemType
      }))}
    />
  );
};
