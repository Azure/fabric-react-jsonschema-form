import {
  DirectionalHint,
  IconButton,
  Label,
  TooltipHost
} from "office-ui-fabric-react";
import * as React from "react";
import { FieldTemplateProps } from "react-jsonschema-form";

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

export const FieldTemplate = (props: FieldTemplateProps) => {
  const {
    id,
    classNames,
    label,
    children,
    errors,
    rawErrors,
    help,
    description,
    hidden,
    required,
    displayLabel
  } = props;

  if (hidden) {
    return children;
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column" }}
      className={classNames}
    >
      <div className="labelAndInfo">
        {displayLabel && <Labeli label={label} required={required} id={id} />}

        {displayLabel && description && description.props.description ? (
          <TooltipHost
            content={description.props.description}
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
        ) : null}
      </div>
      {children}
      <Label style={{ color: "red", fontSize: "small" }}>
        {rawErrors && rawErrors.join(", ")}
      </Label>
      {help}
    </div>
  );
};
