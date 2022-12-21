import * as React from "react"
import {  Button, Heading, Flex } from "@chakra-ui/react"
import { Step, Steps, useSteps } from "chakra-ui-steps"
import FInput from "./components/FInput"
import FCheckbox from "./components/FCheckbox"
import FSelect from "./components/FSelect"
import FRadio from "./components/FRadio"
const steps = [{ label: "General Information" }, { label: "Geographic Information" }, { label: "Interest" }]

export const Horizontal  = () => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  })
  return (
    <>
    <div>

      <Flex flexDir="column" width="100%">
      <Steps activeStep={activeStep}>
        {steps.map(({ label }, index) => (
          <Step label={label} key={label}>
            <span>Chakra Ui is cool</span>
          </Step>
        ))}
      </Steps>
      {activeStep === steps.length ? (
        <Flex px={4} py={4} width="100%" flexDirection="column">
          <Heading fontSize="xl" textAlign="center">
            Woohoo! All steps completed!
          </Heading>
          <Button mx="auto" mt={6} size="sm" onClick={reset}>
            Reset
          </Button>
        </Flex>
      ) : (
        <Flex width="100%" justify="flex-end">
          <Button
            isDisabled={activeStep === 0}
            mr={4}
            onClick={prevStep}
            size="sm"
            variant="ghost"
          >
            Prev
          </Button>
          <Button size="sm" onClick={nextStep}>
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </Flex>
      )}
    </Flex>
    <br />
    <FInput/>
    <br />
    <FCheckbox/>
    <br />
    <FRadio/>
    <br />
    <FSelect/>
    </div>
    </>
  )
}

export default Horizontal