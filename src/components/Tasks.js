import { useContext } from "react";
import { tasksContext } from "../contexts/tasksContext";
import { useTheme } from "@emotion/react";
import IconsGroup from "./IconsGroup";

export default function Task() {
  const theme = useTheme();

  const tasksObj = useContext(tasksContext);

  const tasksList = tasksObj.tasksValue.map((task) => {
    return (
      <div
        key={task.id}
        className="task"
        style={{
          backgroundColor: theme.palette.primary.main,
          fontFamily: theme.typography.fontFamily,
        }}
      >
        <div className="content">
          <h1
            style={
              task.done === true
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
          >
            {task.title}
          </h1>
          <p
            style={
              task.done === true
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
          >
            {task.description}
          </p>
        </div>

        <div className="content-icons">
          <IconsGroup task={task} />
        </div>
      </div>
    );
  });

  return (
    <>
      {tasksObj.tasksValue.length > 0 ? (
        <div className="tasks">{tasksList}</div>
      ) : (
        <div
          className="no-tasks-found-msg"
          style={{
            color: theme.palette.primary.main,
            margin: "20px",
            fontWeight: "bold",
          }}
        >
          لا يوجد أي مهام لعرضها.
        </div>
      )}
    </>
  );
}
