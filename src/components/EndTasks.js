import { useTheme } from "@emotion/react";
import { useContext } from "react";
import { tasksContext } from "../contexts/tasksContext";
import IconsGroup from "./IconsGroup";

export default function EndTasks() {
  const theme = useTheme();
  const tasksContextObj = useContext(tasksContext);

  const endTasks = tasksContextObj.tasksValue.filter((task) => {
    return task.done === true;
  });

  const endTasksList = endTasks.map((endTask) => {
    return (
      <div
        key={endTask.id}
        className="task"
        style={{ backgroundColor: theme.palette.primary.main }}
      >
        <div className="content">
          <h1 style={{ textDecoration: "line-through" }}>{endTask.title}</h1>
          <p style={{ textDecoration: "line-through" }}>
            {endTask.description}
          </p>
        </div>

        <div className="content-icons">
          <IconsGroup task={endTask} />
        </div>
      </div>
    );
  });

  return (
    <>
      {endTasks.length > 0 ? (
        <div className="tasks">{endTasksList}</div>
      ) : (
        <div
          className="no-tasks-found-msg"
          style={{
            color: theme.palette.primary.main,
          }}
        >
          لا يوجد أي مهام لعرضها.
        </div>
      )}
    </>
  );
}
