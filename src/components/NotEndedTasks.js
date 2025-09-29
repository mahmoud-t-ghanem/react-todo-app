import { useTheme } from "@emotion/react";
import { useContext } from "react";
import { tasksContext } from "../contexts/tasksContext";
import IconsGroup from "./IconsGroup";

export default function NotEndedTasks() {
  const theme = useTheme();
  const tasksContextObj = useContext(tasksContext);

  const notEndedTasks = tasksContextObj.tasksValue.filter((task) => {
    return task.done === false;
  });

  const notEndedTasksList = notEndedTasks.map((notEndTask) => {
    return (
      <div
        key={notEndTask.id}
        className="task"
        style={{ backgroundColor: theme.palette.primary.main }}
      >
        <div className="content">
          <h1>{notEndTask.title}</h1>
          <p>{notEndTask.description}</p>
        </div>

        <div className="content-icons">
          <IconsGroup task={notEndTask} />
        </div>
      </div>
    );
  });

  return (
    <>
      {notEndedTasks.length > 0 ? (
        <div className="tasks">{notEndedTasksList}</div>
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
