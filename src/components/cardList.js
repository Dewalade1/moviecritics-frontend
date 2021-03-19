import React, {useContext} from "react";

import Link from 'next/link';

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import IconButton from "@material-ui/core/IconButton";

import ThumbUpRoundedIcon from "@material-ui/icons/ThumbUpRounded";
import ThumbDownRoundedIcon from "@material-ui/icons/ThumbDownRounded";


const useStyles = makeStyles({
  root: {
    width: 170,
    height: 170,
    borderRadius: 120,
  },
});

export default function CardList({tileData}) {
  const classes = useStyles();

  return (
    <div className="pl-2 pr-2 ml-4">
      <Link href={`/celebs/${tileData.fields.url}`}>
        <a>
          <img 
          src={tileData.fields.avatar ? "https://" + tileData.fields.avatar.fields.file.url : "/images/movies/defaults/default-poster-1.jpg"} 
          title={tileData.fields.name} 
          height={170}
          width={170}
          style={{borderRadius: "50%"}}
          key={tileData.sys.id}
        />

      <p className="text-center mt-4" style={{color: "#000000"}}>{tileData.fields.name}</p>
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
