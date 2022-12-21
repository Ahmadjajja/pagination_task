import * as React from "react";
import { Checkbox, Stack} from "@chakra-ui/react"
function FCheckbox(props:any) {

    const { direction, label, checkboxItems } = props
    
  return (
    <div>
      <Stack>
      <strong>Checkbox</strong>
      <Stack spacing={[1, 5]} direction='row'>
          <Checkbox value="naruto">Naruto</Checkbox>
          <Checkbox value="sasuke">Sasuke</Checkbox>
          <Checkbox value="kakashi">Kakashi</Checkbox>
        </Stack>
      </Stack>
    </div>
  );
}

export default FCheckbox;
