import { Button, Label, PrimaryButton } from "office-ui-fabric-react";
import * as React from "react";
import { ArrayFieldTemplateProps } from "react-jsonschema-form";

function Labeli(props) {
  const { label, required, id } = props;
  if (!label) {
    // See #312: Ensure compatibility with old versions of React.
    return <div />;
  }
  return (
    <Label className="control-label" htmlFor={id}>
      {label}
      {required && <span className="required">{"*"}</span>}
    </Label>
  );
}

export const ArrayFieldTemplate = (props: ArrayFieldTemplateProps) => {
  return (
    <div>
      {props.schema.title && (
        <Labeli
          label={props.schema.title}
          required={props.schema.required}
          id={"id"}
        />
      )}
      {props.items.map(({ children, hasRemove, onDropIndexClick, index }) => (
        <div
          key={index}
          style={{ display: "flex", flexDirection: "row", width: "100%" }}
        >
          <div style={{ flex: 1, marginRight: "10px" }}>{children}</div>
          {hasRemove && (
            <Button
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
