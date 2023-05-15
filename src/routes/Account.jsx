import React, { useState, useContext } from "react";
import { Checkbox, Box, Text } from "@chakra-ui/react";
import { Context } from "../Context";
import Header from "../components/Header";

function Account() {
  const { selectedCheckbox, setSelectedCheckbox } = useContext(Context);

  const handleCheckboxChange = (checkboxId) => {
    setSelectedCheckbox(checkboxId);
  };

  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: "20px"
        }}
      >
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          أقوم بإختيار المستوى الدراسي
        </Text>
        <Box mb={4}>
          <Checkbox
            isChecked={selectedCheckbox === 1}
            onChange={() => handleCheckboxChange(1)}
            colorScheme="teal"
          />
          <Text display="inline" ml={2}>
            السنة الخامسة
          </Text>
        </Box>
        <Box>
          <Checkbox
            isChecked={selectedCheckbox === 2}
            onChange={() => handleCheckboxChange(2)}
            colorScheme="teal"
          />
          <Text display="inline" ml={2}>
            السنة السادسة
          </Text>
        </Box>
      </div>
    </div>
  );
}

export default Account;
