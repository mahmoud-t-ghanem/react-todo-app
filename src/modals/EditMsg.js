import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useContext } from "react";
import { tasksContext } from "../contexts/tasksContext";

export default function EditMsg() {
  const tasksContextObj = useContext(tasksContext);

  const openEditMsg = tasksContextObj.openEditMsg;
  const setOpenEditMsg = tasksContextObj.setOpenEditMsg;

  const taskId = tasksContextObj.taskIdValue;

  const setOpenAlertMsg = tasksContextObj.setOpenAlertMsg;

  const editTitleValue = tasksContextObj.editTitleValue;
  const setEditTitleValue = tasksContextObj.setEditTitleValue;
  const editDescriptionValue = tasksContextObj.editDescriptionValue;
  const setEditDescriptionValue = tasksContextObj.setEditDescriptionValue;

  const handleClose = () => {
    setOpenEditMsg(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const tasksAfterEditing = tasksContextObj.tasksValue.map((task) => {
      if (task.id === taskId) {
        task.title = editTitleValue;
        task.description = editDescriptionValue;
      }
      return task;
    });
    tasksContextObj.setTasksValue([...tasksAfterEditing]);
    handleClose();
    setOpenAlertMsg(true);

    localStorage.setItem("Tasks", JSON.stringify(tasksAfterEditing));
  };

  return (
    <React.Fragment>
      <Dialog open={openEditMsg} onClose={handleClose}>
        <DialogTitle color="primary" sx={{ fontWeight: "normal" }}>
          تعديل المهمة
        </DialogTitle>
        <DialogContent >
          <form onSubmit={handleSubmit} id="edit-form">
            <TextField
              sx={{ fontWeight: "normal" }}
              autoFocus
              required
              margin="dense"
              id="title"
              name="title"
              label="العنوان"
              type="text"
              fullWidth
              variant="standard"
              value={editTitleValue}
              onChange={(event) => {
                setEditTitleValue(event.target.value);
              }}
            />
            <TextField
              sx={{ fontWeight: "normal" }}
              autoFocus
              // required
              margin="dense"
              id="description"
              name="description"
              label="التفاصيل"
              type="text"
              fullWidth
              variant="standard"
              value={editDescriptionValue}
              onChange={(event) => {
                setEditDescriptionValue(event.target.value);
              }}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button sx={{ fontWeight: "normal" }} onClick={handleClose}>
            إلغاء
          </Button>
          <Button sx={{ fontWeight: "normal" }} type="submit" form="edit-form">
            تعديل
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
