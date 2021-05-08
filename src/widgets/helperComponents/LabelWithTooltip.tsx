import * as React from "react";
import { IChoiceGroupOption } from "office-ui-fabric-react";
import {
  DirectionalHint,
  IconButton,
  Label,
  TooltipHost
} from "office-ui-fabric-react";
import * as ReactMarkDown from "react-markdown";

export const LabelWithTooltip: (
  props: IChoiceGroupOption & { description: string }
) => JSX.Element = props => (
  <div
    style={{
      marginLeft: "30px",
      display: "flex"
    }}
  >
    <div
      style={{
        padding: "3px"
      }}
    >
      {props.text}
    </div>

    {props.description && (
      <TooltipHost
        content={props.description}
        id="myID"
        calloutProps={{ gapSpace: 0 }}
        directionalHint={DirectionalHint.rightCenter}
        tooltipProps={{
          onRenderContent: props =>
            props ? (
              <ReactMarkDown linkTarget="_blank" source={props.content} />
            ) : null
        }}
      >
        <IconButton
          iconProps={{ iconName: "Info" }}
          title="Info"
          ariaLabel="Info"
        />
      </TooltipHost>
    )}
  </div>
);
