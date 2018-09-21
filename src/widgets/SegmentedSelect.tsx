import { Object } from "core-js";
import { DropdownMenuItemType } from "office-ui-fabric-react";
import { Widget } from "react-jsonschema-form";

import { FabricSelect, Options } from "./Select";

export const FabricSegmentedSelect: Widget = props => {
  const options = props.options as Options;

  const versions = options.enumOptions.reduce(
    (acc, opt) => ({
      ...acc,
      [opt.label.split("/")[0]]: [
        ...(acc[opt.label.split("/")[0]] || []),
        {
          label: opt.label.split("/")[1],
          value: opt.value,
          itemType: DropdownMenuItemType.Normal
        }
      ]
    }),
    {}
  );

  const dividedOptions: Options = {
    enumOptions: []
  };

  for (const [key, value] of Object.entries(versions)) {
    dividedOptions.enumOptions = [
      ...dividedOptions.enumOptions,
      {
        value: key,
        label: key,
        itemType: DropdownMenuItemType.Header
      },
      ...value
    ];
  }

  return FabricSelect({ ...props, options: dividedOptions });
};
