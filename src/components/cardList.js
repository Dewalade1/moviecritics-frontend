import React, {useContext} from "react";

import Link from 'next/link';

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import IconButton from "@material-ui/core/IconButton";

import ThumbUpRoundedIcon from "@material-ui/icons/ThumbUpRounded";
import ThumbDownRoundedIcon from "@material-ui/icons/ThumbDownRounded";

import DispatchContext from './contexts/dispatchContext';


const useStyles = makeStyles({
  root: {
    height: 170,
    width: 170,
    borderRadius: "50%",
    "&:hover": {
      border: "solid",
      borderColor: "#ffa753",
      borderWidth: "thick",
    },
  },
  celebName: {
    color: "#000000",
    textDecoration: "none",
    "&:hover": {
      color: "#4f4e4e",
      textDecoration: "none",
    },
    "&:hover > .profileImg": {
      border: "solid",
      borderColor: "#ffa753",
      borderWidth: "thick",
  },
  },
});

export default function CardList({tileData}) {
  const classes = useStyles();
  const appDispatch = useContext(DispatchContext);

  const handleListItemClick = (event, index) => {
    appDispatch({type: "changeNavSelectedIndex", index: index});
  };

  return (
    <div className="pl-2 pr-2 ml-4">
      <Link href={`/celebs/${tileData.fields.url}`}>
        <a className={`${classes.celebName}`} onClick={(event) => handleListItemClick(event, 2)}>
          <img src={tileData.fields.avatar ? "https://" + tileData.fields.avatar.fields.file.url : "/images/movies/defaults/default-poster-1.jpg"} alt={tileData.fields.name} className={`${classes.root} profileImg`} key={tileData.sys.id} />

          <p className="text-center mt-4">{tileData.fields.name}</p>
        </a>
      </Link>
      {tileData.fields.likes}
      <IconButton aria-label="like">
        <ThumbUpRoundedIcon />
      </IconButton>
      {tileData.fields.dislikes}
      <IconButton aria-label="dislike">
        <ThumbDownRoundedIcon />
      </IconButton>
    </div>
  );
}
