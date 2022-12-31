import React, { useState } from "react";
import data from "../invoices.json";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Input,
  TableContainer,
  Heading,
} from "@chakra-ui/react";
const CalculatorUi = () => {
  const [value] = useState(data);
  const [tax, setTax] = useState("");

  const handlecalculate = (el) => {
    if (el.item_type === 0) {
      const taxable = (el.amount * 5) / 100;
      setTax(taxable);
    } else if (el.item_type === 1) {
      const taxable = (el.amount * 8) / 100;
      setTax(taxable);
    } else if (el.item_type === 2) {
      const taxable = (el.amount * 12) / 100;
      setTax(taxable);
    } else {
      setTax("Tax rate not defined");
    }
  };
  return (
    <div>
      <TableContainer width={["full", "70%", "60%"]} m="auto">
        <Heading textAlign="left">Tax Calculator</Heading>
        <Table variant="striped" style={{ borderCollapse: "separate" }}>
          <Thead bgColor="black">
            <Th textAlign="center" color="white">
              S.NO
            </Th>
            <Th textAlign="center" color="white">
              Amount
            </Th>
            <Th textAlign="center" color="white">
              Item Type
            </Th>
            <Th textAlign="center" color="white">
              Calculate Tax
            </Th>
          </Thead>
          <Tbody>
            {value.invoices.map((el) => (
              <Tr key={el.sno}>
                <Td>{el.sno}</Td>
                <Td>{el.amount}</Td>
                <Td>{el.item_type}</Td>
                <Td>
                  <Button
                    colorScheme="teal"
                    variant="solid"
                    onClick={() => handlecalculate(el)}
                  >
                    Calculate
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Heading fontSize="20px" textAlign="left">
          Calculated Tax Value :{" "}
          <span>
            <Input w="30%" value={tax} border="2px solid black" />
          </span>
        </Heading>
      </TableContainer>
    </div>
  );
};
export default CalculatorUi;
