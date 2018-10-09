import {
  Checkbox,
  DirectionalHint,
  IconButton,
  Link,
  TooltipHost
} from "office-ui-fabric-react";
import * as React from "react";
import { WidgetProps } from "react-jsonschema-form";

const onChange = (props: WidgetProps) => {
  props.onChange(!props.value);
};

export const FabricCheckbox = (props: WidgetProps & { label: string }) => (
  <div className="ms-font-m" style={{ display: "flex" }}>
    <Checkbox
      checked={!!props.value}
      value={props.value}
      disabled={props.disabled}
      label={props.label}
      placeholder={props.placeholder}
      onChange={onChange.bind(null, props)}
    />
    {(props.options as any).link && (
      <Link
        style={{ margin: "0 5px 0 5px" }}
        onClick={(props.options as any).link.onClick}
      >
        {(props.options as any).link.text}
      </Link>
    )}
    <TooltipHost
      content={(props.options as any).tooltip}
      id="asdf"
      calloutProps={{ gapSpace: 0 }}
      directionalHint={DirectionalHint.rightCenter}
    >
      <IconButton
        iconProps={{ iconName: "Info" }}
        title="Info"
        ariaLabel="Info"
      />
    </TooltipHost>
  </div>
);
