import { v4 as uuidv4 } from "uuid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { tasksContext } from "../contexts/tasksContext";
import { useContext } from "react";
import { useState } from "react";

export default function AddTask() {
  const [addTasksValue, setAddTaskValue] = useState("");

  const tasksContextObj = useContext(tasksContext);
  const setAlertMsgValue = tasksContextObj.setAlertMsgValue;
  const setOpenAlertMsg = tasksContextObj.setOpenAlertMsg;

  function handleAddClick() {
    if (addTasksValue !== "") {
      const tasksAfterAdding = [
        ...tasksContextObj.tasksValue,
        {
          id: uuidv4(),
          title: addTasksValue,
          description: "",
          done: false,
        },
      ];
      tasksContextObj.setTasksValue(tasksAfterAdding);
      setAlertMsgValue("تم إضافة المهمة");
      setOpenAlertMsg(true);
      localStorage.setItem("Tasks", JSON.stringify(tasksAfterAdding));
    }
    setAddTaskValue("");
  }

  return (
    <div className="add-task">
      <TextField
        id="outlined-basic"
        label="عنوان المهمة"
        variant="outlined"
        sx={{ fontWeight: "normal" }}
        value={addTasksValue}
        onChange={(event) => {
          setAddTaskValue(event.target.value);
        }}
        className="add-input"
      />

      <Button
        variant="contained"
        sx={{
          color: "#ffffff",
          padding: "17px",
          borderRadius: "10px",
        }}
        onClick={handleAddClick}
        className="add-button"
        disabled={addTasksValue === "" ? true : false}
      >
        اضافة
      </Button>
    </div>
  );
}
