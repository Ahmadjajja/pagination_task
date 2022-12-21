import * as React from "react";
import { RadioGroup, Stack, Radio } from "@chakra-ui/react";
function FRadio(props:any) {

    const { direction, label, radioItems } = props
    
  return (
    <div>
      <Stack >
        <strong>Radio</strong>
        <RadioGroup defaultValue="1">
          <Stack direction='column'>
            <Radio value="1" isDisabled>
              Checked
            </Radio>
            <Radio value="2">Unchecked</Radio>
            <Radio value="3">Unchecked</Radio>
          </Stack>
        </RadioGroup>
      </Stack>
    </div>
  );
}

export default FRadio;
