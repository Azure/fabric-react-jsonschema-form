import { ChoiceGroup, IChoiceGroupOption } from "office-ui-fabric-react";
import * as React from "react";
import { WidgetProps } from "react-jsonschema-form";
import { LabelWithTooltip } from "./helperComponents/LabelWithTooltip";

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
    fabricProps,
    enumDescriptions
  } = options as any;

  return (
    <ChoiceGroup
      options={enumOptions.map((option: { value: string }, i) => ({
        key: option.value,
        text: (enumText && enumText[i]) || option.value,
        description: (enumDescriptions && enumDescriptions[i]) || option.value,
        disable: enumDisabled && enumDisabled.indexOf(option.value) != -1,
        onRenderLabel: LabelWithTooltip
      }))}
      required={required}
      selectedKey={value}
      disabled={disabled || enumDisabled || readonly}
      onChange={onChange.bind(null, props)}
      {...fabricProps}
    />
  );
};
