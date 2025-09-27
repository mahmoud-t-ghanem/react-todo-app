import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useState } from "react";

import { Link } from "react-router-dom";

export default function TodoListTabs({ url }) {
  const [focusTab, setFocusTab] = useState(url);

  const buttons = [
    <Link to="not-ended-tasks" key="one">
      <Button
        sx={{ color: "#ffffff" }}
        onClick={() => {
          setFocusTab("not-ended-tasks");
        }}
        className={
          focusTab === "not-ended-tasks" ? "tab-focus" : "not-tab-focus"
        }
      >
        المهام غير المنجزة
      </Button>
    </Link>,

    <Link to="/end-tasks" key="two">
      <Button
        sx={{ color: "#ffffff" }}
        onClick={() => {
          setFocusTab("end-tasks");
        }}
        className={focusTab === "end-tasks" ? "tab-focus" : "not-tab-focus"}
      >
        المهام المنجزة
      </Button>
    </Link>,

    <Link to="/all-tasks" key="three">
      <Button
        sx={{ color: "#ffffff" }}
        onClick={() => {
          setFocusTab("all-tasks");
        }}
        className={
          focusTab === "all-tasks" || focusTab === ""
            ? "tab-focus"
            : "not-tab-focus"
        }
      >
        جميع المهام
      </Button>
    </Link>,
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          m: 1,
        },
        margin: "20px",
        direction: "ltr",
      }}
    >
      <ButtonGroup
        size="large"
        aria-label="Large button group"
        variant="contained"
      >
        {buttons}
      </ButtonGroup>
    </Box>
  );
}
