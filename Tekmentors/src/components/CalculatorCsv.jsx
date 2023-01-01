import React from "react";
import Papa from "papaparse";
import { useEffect } from "react";
import { useState } from "react";
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
import { useToast } from "@chakra-ui/react";
const CalculatorCsv = () => {
  const [userData, setuserData] = useState([]);
  const [taxTable, settaxTable] = useState(0);
  const toast = useToast();


  const changeHandler = (e) => {
    if (e.target.files[0].name == "invoice.csv") {
      Papa.parse(e.target.files[0], {
        header: true,
        complete: (results) => {
          setuserData(results.data);
          toast({
            title: "File uploaded",
            description: "invoice.CSV file uploaded.",
            status: "success",
            duration: 6000,
            isClosable: true,
          });
          e.target.value = "";
        },
      });
    } else {
      toast({
        title: "Upload failed.",
        description: "Make sure to upload a valid invoice.CSV file only.",
        status: "error",
        duration: 6000,
        isClosable: true,
      });
      e.target.value = "";
    }
  };
  useEffect(() => {
    const data = userData.map((item) => ({ ...item, tax: 0 }));
    data.map((el) => {
      if (el.item_type == 0) {
        el.tax = (+el.amount * 5) / 100;
      } else if (+el.item_type == 1) {
        el.tax = (+el.amount * 12) / 100;
      } else if (el.item_type == 2) {
        el.tax = (el.amount * 12) / 100;
      } else {
        if (!el.amount) {
          el.tax = "";
        } else {
          el.tax = 0;
        }
      }
    });
    settaxTable(data);
  }, [userData]);

  const handleclick = (obj) => {
    const headers = Object.keys(obj[0]).toString();
    const main = obj.map((item) => {
      return Object.values(item).toString();
    });
    const csv = [headers, ...main].join("\n");
    startCSVDownload(csv);
    function startCSVDownload(input) {
      const blob = new Blob([input], { type: "application/csv" });
      // Creates new CSV blob (a file)

      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.download = "result.csv";
      a.href = url;
      a.style.display = "none";

      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      settaxTable(0);
    }
  };
  return (
    <div>
      <input
        type="file"
        name="file"
        onChange={changeHandler}
        accept=".csv"
        style={{ display: "block", margin: "10px auto" }}
      />
      <br />
      <br />
      {taxTable != 0 ? (
        <TableContainer width={["full", "50%", "40%"]} m="auto">
          <Table>
            <Thead>
              <th>s.no</th>
              <th>amount</th>
              <th>item_type</th>
              <th>tax</th>
            </Thead>
            {taxTable.map((item) => (
              <Tbody key={item.id}>
                {Object.values(item).map((val) => (
                  <td>{val}</td>
                ))}
              </Tbody>
            ))}
          </Table>
        </TableContainer>
      ) : (
        <Heading fontSize="20px">
          Select an invoice.csv
        </Heading>
      )}
      {taxTable != 0 ? (
        <Button colorScheme="green" onClick={() => handleclick(taxTable)}>
          Download result csv
        </Button>
      ) : (
        ""
      )}
    </div>
  );
};

export default CalculatorCsv;
