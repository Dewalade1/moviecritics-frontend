import React, {useState} from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={`${classes.closeButton} ${classes.transparentBtn} ml-4`} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const useStyles = makeStyles(() => ({
  transparentBtn: {
    color: "#fd7e14",
    "&:hover": {
      color: "#f38704",
    },
  },
  orangeColor: {
    color: "#fd7e14",
  }
}));


const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function DialogBtn( { btnData, celebData }) {
  const styles = useStyles()
  const [btnOpen, setBtnOpen] = useState(false);

  const handleClickOpen = () => {
    setBtnOpen(true);
  };
  const handleClose = () => {
    setBtnOpen(false);
  };

  return (
    <div className={btnData.position == "right" ? "col-12 d-flex justify-content-end pr-4" : "col-12 d-flex"}>
      <Button size="medium" color="primary" onClick={handleClickOpen} className={styles.transparentBtn}>
        {btnData.btnText}
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="max-width-dialog-title" open={btnOpen} fullWidth={btnData.fullWidth} maxWidth={btnData.maxWidth}>
        <DialogTitle className="pl-4 ml-4 pr-4 mr-4" id="max-width-dialog-title" onClose={handleClose} className={styles.orangeColor}>
          {celebData.name + "'s Bio"}
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom className="pr-4 pl-4 ml-4 mr-4 justify-content-center">{celebData.bio}</Typography>
        </DialogContent>

        {btnData.dialogFooterBtn ? (
          <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary" className={styles.transparentBtn}>
              Cancel
            </Button>
          </DialogActions>
        ) : (
          ""
        )}
      </Dialog>
    </div>
  );
}
