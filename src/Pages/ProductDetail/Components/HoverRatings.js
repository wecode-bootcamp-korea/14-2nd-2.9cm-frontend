/* eslint-disable prettier/prettier */
import React, { Component, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import styled from "styled-components";

export default function HoverRatings(props) {
  const [value, setValue] = React.useState(4);
  const [hover, setHover] = React.useState(-1);
  const classes = makeStyles();

  const useStyles = makeStyles({
    root: {
      width: 200,
      display: "flex",
      alignItems: "center",
    },
  });
  return (
    <div className={classes.root}>
      <Rating
        size="small"
        name="hover-feedback"
        value={props.value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {/* {value !== null && (
        <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
      )} */}
    </div>
  );
}