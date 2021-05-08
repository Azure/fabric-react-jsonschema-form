import { FabricCheckbox } from "./Checkbox";
import { FabricComboBox } from "./ComboBox";
import { FabricDatePicker } from "./DatePicker";
import { FabricSegmentedSelect } from "./SegmentedSelect";
import { FabricRadio } from "./Radio";
import { FabricSelect } from "./Select";
import { FabricText, FabricTextArea } from "./Text";

export const defaultWidgets = {
  CheckboxWidget: FabricCheckbox,
  SelectWidget: FabricSelect,
  DateWidget: FabricDatePicker,
  TextareaWidget: FabricTextArea,
  TextWidget: FabricText
};

export const fabricWidgets = {
  FabricCheckbox,
  FabricComboBox,
  FabricDatePicker,
  FabricSegmentedSelect,
  FabricSelect,
  FabricText,
  FabricTextArea,
  FabricRadio
};

export const allWidgets = {
  ...fabricWidgets,
  ...defaultWidgets
};
