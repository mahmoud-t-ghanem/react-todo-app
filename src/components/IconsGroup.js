import DeleteOutlineSharpIcon from "@mui/icons-material/DeleteOutlineSharp";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import Tooltip from "@mui/material/Tooltip";

import { useContext } from "react";
import { tasksContext } from "../contexts/tasksContext";

export default function IconsGroup({ task }) {
  const tasksContextObj = useContext(tasksContext);

  const setTaskIdValue = tasksContextObj.setTaskIdValue;

  const openDeleteMsg = tasksContextObj.openDeleteMsg;
  const setOpenDeleteMsg = tasksContextObj.setOpenDeleteMsg;

  const setAlertMsgValue = tasksContextObj.setAlertMsgValue;
  const setOpenAlertMsg = tasksContextObj.setOpenAlertMsg;

  const openEditMsg = tasksContextObj.openEditMsg;
  const setOpenEditMsg = tasksContextObj.setOpenEditMsg;
  const setEditTitleValue = tasksContextObj.setEditTitleValue;
  const setEditDescriptionValue = tasksContextObj.setEditDescriptionValue;

  function handleSetOpenDeleteMsg() {
    setTaskIdValue(task.id);
    setAlertMsgValue("تم الحذف بنجاح");
    if (openDeleteMsg === false) {
      setOpenDeleteMsg(true);
    } else {
      setOpenDeleteMsg(false);
    }
  }

  function handleSetOpenEditMsg() {
    setTaskIdValue(task.id);
    setEditTitleValue(task.title);
    setEditDescriptionValue(task.description);
    setAlertMsgValue("تم التعديل بنجاح");
    if (openEditMsg === true) {
      setOpenEditMsg(false);
    } else {
      setOpenEditMsg(true);
    }
  }

  function handleDoneClick() {
    const tasksAfterCheck = tasksContextObj.tasksValue.map((t) => {
      if (t.id === task.id && t.done === false) {
        t.done = true;
        setAlertMsgValue("تم إنجاز المهمة");
        setOpenAlertMsg(true);
      }
      return t;
    });
    tasksContextObj.setTasksValue(tasksAfterCheck);
    localStorage.setItem("Tasks", JSON.stringify(tasksAfterCheck));
  }

  return (
    <div className="icons-group">
      <Tooltip
        sx={{ fontWeight: "normal" }}
        title={task.done === true ? "تم الإنجاز" : "إنجاز"}
      >
        <DoneIcon
          className={task.done === true ? "checked" : "not-checked"}
          style={{
            fontSize: "10px",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            padding: "7px",
            marginRight: "5px",
          }}
          onClick={(event) => {
            handleDoneClick(event);
          }}
        />
      </Tooltip>

      <Tooltip title="تعديل" sx={{ fontWeight: "normal" }}>
        <EditIcon
          className="edit"
          color="primary"
          style={{
            color: "#ffeb3b",
            fontSize: "10px",
            backgroundColor: "#ffffff",
            border: "3px solid #ffeb3b",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            padding: "7px",
            marginRight: "5px",
            cursor: "pointer",
          }}
          onClick={handleSetOpenEditMsg}
        />
      </Tooltip>

      <Tooltip title="حذف" sx={{ fontWeight: "normal" }}>
        <DeleteOutlineSharpIcon
          className="delete"
          style={{
            color: "#f44336",
            fontSize: "10px",
            backgroundColor: "#ffffff",
            border: "3px solid #f44336",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            padding: "7px",
            marginRight: "5px",
            cursor: "pointer",
          }}
          onClick={handleSetOpenDeleteMsg}
        />
      </Tooltip>
    </div>
  );
}
