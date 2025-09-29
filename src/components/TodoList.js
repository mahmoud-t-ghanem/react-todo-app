import { useState } from "react";
import { useTheme } from "@emotion/react";
import Divider from "@mui/material/Divider";
import { Routes, Route } from "react-router-dom";
import Tasks from "./Tasks";
import TodoListTabs from "./TodoListTabs";
import AddTask from "./AddTask";
import DeleteMsg from "../modals/DeleteMsg";
import EditMsg from "../modals/EditMsg";

import { tasksContext } from "../contexts/tasksContext";

import AlertMsg from "../modals/AlertMsg";

import EndTasks from "./EndTasks";
import NotEndedTasks from "./NotEndedTasks";

import { useLocation } from "react-router-dom";

import { useEffect } from "react";

export default function TodoList() {
  const urlObj = useLocation();
  const url = urlObj.pathname.slice(1);

  const theme = useTheme();

  // localStorage.clear();

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("Tasks")
      ? JSON.parse(localStorage.getItem("Tasks"))
      : [];
    setTasks(storedTasks);
  }, []);

  const [taskIdValue, setTaskIdValue] = useState("");

  const [openDeleteMsg, setOpenDeleteMsg] = useState(false);

  const [openEditMsg, setOpenEditMsg] = useState(false);
  const [editTitleValue, setEditTitleValue] = useState("");
  const [editDescriptionValue, setEditDescriptionValue] = useState("");

  const [openAlertMsg, setOpenAlertMsg] = useState(false);
  const [alertMsgValue, setAlertMsgValue] = useState("");

  return (
    <tasksContext.Provider
      value={{
        tasksValue: tasks,
        setTasksValue: setTasks,

        taskIdValue: taskIdValue,
        setTaskIdValue: setTaskIdValue,

        openDeleteMsg: openDeleteMsg,
        setOpenDeleteMsg: setOpenDeleteMsg,

        openEditMsg: openEditMsg,
        setOpenEditMsg: setOpenEditMsg,

        editTitleValue: editTitleValue,
        setEditTitleValue: setEditTitleValue,
        editDescriptionValue: editDescriptionValue,
        setEditDescriptionValue: setEditDescriptionValue,

        openAlertMsg: openAlertMsg,
        setOpenAlertMsg: setOpenAlertMsg,

        alertMsgValue: alertMsgValue,
        setAlertMsgValue: setAlertMsgValue,
      }}
    >
      <>
        <div className="todo-list">
          <div className="full-todo-list-title">
            <h1
              className="todo-list-title"
              style={{
                color: theme.palette.primary.main,
              }}
            >
              مهامي
            </h1>
            <Divider />
          </div>
          <TodoListTabs url={url} />
          <Routes>
            <Route path="/all-tasks" element={<Tasks />} />
            <Route path="/" element={<Tasks />} />
            <Route path="/end-tasks" element={<EndTasks />} />
            <Route path="/not-ended-tasks" element={<NotEndedTasks />} />
          </Routes>
          <AddTask />
        </div>
        <DeleteMsg />
        <EditMsg />
        <AlertMsg />
      </>
    </tasksContext.Provider>
  );
}
