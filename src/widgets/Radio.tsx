import {
  ChoiceGroup,
  IChoiceGroupOption,
  IComboBoxProps
} from "office-ui-fabric-react";
import * as React from "react";
import { WidgetProps } from "react-jsonschema-form";
import { string } from "prop-types";

const onChange = (props: WidgetProps, event, option: IChoiceGroupOption) => {
  props.onChange(option.key);
};

export const FabricRadio = (
  props: WidgetProps & {
    options: { fabricProps: IChoiceGroupOption; enumText?: [] };
  }
) => {
  const { options, value, required, disabled, readonly } = props;

  const {
    enumOptions,
    enumDisabled,
    inline,
    enumText,
    fabricProps
  } = options as any;

  return (
    <ChoiceGroup
      options={enumOptions.map((option: { value: string }, i) => ({
        key: option.value,
        text: (enumText && enumText[i]) || option.value,
        disable: enumDisabled && enumDisabled.indexOf(option.value) != -1
      }))}
      required={required}
      selectedKey={value}
      disabled={disabled || enumDisabled || readonly}
      onChange={onChange.bind(null, props)}
      {...fabricProps}
    />
  );
};
