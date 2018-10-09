import * as moment from "moment";
import { DatePicker, IDatePickerProps } from "office-ui-fabric-react";
import * as React from "react";
import { WidgetProps } from "react-jsonschema-form";

const onChange = (props: WidgetProps) => (date: Date) => {
  props.onChange(
    moment(date)
      .utc()
      .format("YYYY-MM-DD")
  );
};

export const FabricDatePicker = (
  props: WidgetProps & { options: { fabricProps: IDatePickerProps } }
) => {
  return (
    <DatePicker
      disabled={props.disabled}
      onSelectDate={onChange(props)}
      value={moment(props.value).toDate()}
      placeholder={props.placeholder}
      {...props.options.fabricProps}
    />
  );
};
