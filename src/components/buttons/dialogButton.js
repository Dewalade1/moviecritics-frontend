import React, {useState} from "react";
import { withStyles } from "@material-ui/core/styles";
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
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

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

export default function DialogBtn( { btnData }) {
  const [btnOpen, setBtnOpen] = useState(false);

  const handleClickOpen = () => {
    setBtnOpen(true);
  };
  const handleClose = () => {
    setBtnOpen(false);
  };

  return (
    <div>
      <Button size="small" color="primary" onClick={handleClickOpen} style={{ color: "#FF8C00" }}>
        {btnData.btn.btnText}
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="max-width-dialog-title" open={btnOpen} fullWidth={btnData.btn.fullWidth} maxWidth={btnData.btn.maxWidth}>
        <DialogTitle id="max-width-dialog-title" onClose={handleClose} style={{ color: "#FF8C00" }}>
          {btnData.name + "'s Bio"}
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>In 1996, he made his major screen movie debut in the well received Silent Night after performing in a few Nigeria home videos (now widely known as Nollywood) projects which never got released due to lack of completion funds and related issues. Succeeded by numerous Nigerian home video projects where he mainly played romantic roles, from the 1990's through the early 2000's; Nouah was quickly labelled "Lover Boy". In 2004, he starred in Dangerous Twins (2004) and his stellar performance as a good and bad twin, Taiye and Kehinde, projected him as a multi layered actor capable of much more his "Lover Boy" image had suggested. By then, his fame had transcend the shores of Nigeria and was exceeding Africa.</Typography>
          <Typography gutterBottom>His face was on numerous movie posters and his performance progressively got stronger and attracted acclaim as he sold millions of Nigerian home video (which was straight to DVD) projects within lovers of African entertainment. He is an African household name that won't be forgotten for his immense contribution to the African entertainment industry at large. In 2009, he portrayed a socially awkward fresh graduate in The Figurine (2009). He is often regarded as one of Africa's greatest actor of all time.</Typography>
          <Typography gutterBottom>With an amazing talent and acting range, he has managed to remain new and fresh even after more than two decades in the industry. He has won numerous awards for his acting and contribution to the African entertainment industry in Nigeria and around the world. In 2010, he won Best Actor at the African Movie Academy Awards for his performance in The Figurine (2009).He is a one of the few active pioneers and ambassador of the laudable Nigerian movie industry also known as Nollywood. His burning desire to add to the creative growth of Nollywood and African cinema led to his founding a movie production company called Ramseyfilms.</Typography>
          <Typography gutterBottom>Nouah blends developing slates of films under his production company with starring in various genres of films that appeals to him. In 2015, Nouah will be seen in '76 (2016).</Typography>
        </DialogContent>

        {btnData.btn.dialogFooterBtn ? (
          <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary" style={{ color: "#FF8C00" }}>
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
