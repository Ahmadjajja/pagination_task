import * as React from "react";

import { Input, Stack } from "@chakra-ui/react";

function FInput(props: any) {

    const { label, placeholderItems} = props

  return (
    <div>
      <Stack spacing={3}>
        <strong>Linkedin Profile</strong>
        <Input placeholder="large size" size="lg" />
      </Stack>
    </div>
  );
}

export default FInput;
