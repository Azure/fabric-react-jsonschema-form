import {
  DefaultButton,
  DirectionalHint,
  IconButton,
  Label,
  PrimaryButton,
  TooltipHost
} from "office-ui-fabric-react";
import * as React from "react";
import { ArrayFieldTemplateProps } from "react-jsonschema-form";

function Labeli(props) {
  const { label, required, id } = props;
  if (!label) {
    // See #312: Ensure compatibility with old versions of React.
    return <div />;
  }
  return (
    <Label required={required} className="control-label" htmlFor={id}>
      {label}
    </Label>
  );
}

export const ArrayFieldTemplate = (props: ArrayFieldTemplateProps) => {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {props.schema.title && (
          <Labeli
            label={props.schema.title}
            required={props.required}
            id={"id"}
          />
        )}
        {props.uiSchema["ui:description"] && (
          <TooltipHost
            content={props.uiSchema["ui:description"]}
            id="myID"
            calloutProps={{ gapSpace: 0 }}
            directionalHint={DirectionalHint.rightCenter}
          >
            <IconButton
              iconProps={{ iconName: "Info" }}
              title="Info"
              ariaLabel="Info"
            />
          </TooltipHost>
        )}
      </div>
      {props.items.map(({ children, hasRemove, onDropIndexClick, index }) => (
        <div
          key={index}
          style={{ display: "flex", flexDirection: "row", width: "100%" }}
        >
          <div style={{ flex: 1, marginRight: "10px" }}>{children}</div>
          {hasRemove && (
            <DefaultButton
              iconProps={{ iconName: "Remove" }}
              onClick={onDropIndexClick(index)}
            />
          )}
        </div>
      ))}
      {props.items && (
        <PrimaryButton
          iconProps={{ iconName: "Add" }}
          onClick={props.onAddClick}
        />
      )}
    </div>
  );
};
