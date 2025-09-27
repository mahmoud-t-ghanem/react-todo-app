import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useContext } from "react";
import { tasksContext } from "../contexts/tasksContext";

export default function DeleteMsg() {
  const tasksContextObj = useContext(tasksContext);

  const taskId = tasksContextObj.taskIdValue;

  const openDeleteMsg = tasksContextObj.openDeleteMsg;
  const setOpenDeleteMsg = tasksContextObj.setOpenDeleteMsg;

  const setOpenAlertMsg = tasksContextObj.setOpenAlertMsg;

  const handleClose = () => {
    setOpenDeleteMsg(false);
  };

  function handleDeleteClick(taskId) {
    const tasksAfterDeleting = tasksContextObj.tasksValue.filter((task) => {
      return task.id !== taskId;
    });
    tasksContextObj.setTasksValue([...tasksAfterDeleting]);

    handleClose();

    setOpenAlertMsg(true);

    localStorage.setItem("Tasks", JSON.stringify(tasksAfterDeleting));
  }

  return (
    <React.Fragment>
      <Dialog
        open={openDeleteMsg}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          color="primary"
          sx={{ fontWeight: "normal" }}
        >
          {"هل أنت متأكد من رغبتك في حذف المهمة ؟"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ fontWeight: "normal" }}
          >
            لا يمكنك التراجع عن الحذف في حال اختيارك زر (حذف).
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ fontWeight: "normal" }}>
            إلغاء
          </Button>
          <Button
            sx={{ fontWeight: "normal" }}
            onClick={() => {
              handleDeleteClick(taskId);
            }}
            autoFocus
          >
            حذف
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
