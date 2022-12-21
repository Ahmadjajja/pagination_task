import * as React from "react";
import { Select, CheckboxGroup } from "@chakra-ui/react";
function FSelect(props:any) {

    const {label, selectItems} = props

  return (
    <div>
      <CheckboxGroup colorScheme="green" >
        <strong>label</strong>
        <Select placeholder="Select option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </CheckboxGroup>
    </div>
  );
}

export default FSelect;
