import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import { useContext } from "react";
import { tasksContext } from "../contexts/tasksContext";

export default function AlertMsg() {
  const tasksContextObj = useContext(tasksContext);
  const openAlertMsg = tasksContextObj.openAlertMsg;
  const setOpenAlertMsg = tasksContextObj.setOpenAlertMsg;
  const alertMsgValue = tasksContextObj.alertMsgValue;

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlertMsg(false);
  };

  return (
    <div>
      <Snackbar
        className="alert-msg"
        open={openAlertMsg}
        autoHideDuration={2000}
        onClose={handleClose}
        style={{ boxShadow: "5px 5px 10px black" }}
      >
        <Alert
          variant="filled"
          severity="success"
          sx={{ fontWeight: "normal" }}
        >
          {alertMsgValue}
        </Alert>
      </Snackbar>
    </div>
  );
}
