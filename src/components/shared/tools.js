import React from 'react';

import Fab from "@material-ui/core/Fab";
import ForumRoundedIcon from "@material-ui/icons/ForumRounded";
import ExpandLessRoundedIcon from "@material-ui/icons/ExpandLessRounded";

import toolStyles from "../../../styles/layout/tools.module.css";


export default function Tools () {
    return (
      <div className="mr-4" id={toolStyles.toolsIconsDiv}>
        <Fab color="primary" aria-label="chat" className=" mr-4 mb-3" id={toolStyles.chatIcon}>
          <ForumRoundedIcon />
        </Fab>
        <Fab color="primary" aria-label="back to top" className="mr-4 mb-4" id={toolStyles.backToTopIcon}>
          <ExpandLessRoundedIcon />
        </Fab>
      </div>
    );

}