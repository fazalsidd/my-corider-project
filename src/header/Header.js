
import * as React from "react";
import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import pic from "../assets/pic.jpg";
import ArrowBack from "@mui/icons-material/ArrowBack";
import Avatar from "@mui/material/Avatar";
import EditNote from "@mui/icons-material/EditNote";
import ThreeDot from "./ThreeDot";
import "../App.css";
import useFetch from "../hooks/useFetch";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  backgroundColor: "white",
  color: "black",
  alignItems: "center",
  justifyContent: "space-between",
}));

export default function ProminentAppBar() {
  let {data, serverError } = useFetch("https://qa.corider.in/assignment/chat?page=0");
  if(serverError)
  console.log(serverError);
  return (
    // <Box>
    // <AppBar position="static">
    <header>
      <StyledToolbar>
        <div>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            // sx={{ mr: 2 }}
          >
            <ArrowBack />
          </IconButton>

          <Typography variant="h5" component="span">
            <b>Trip {data?.name.substring((data?.name.indexOf("."))+1,data?.name.lengt)}</b>
          </Typography>
        </div>

        <IconButton
          size="large"
          aria-label="display more actions"
          edge="end"
          color="inherit"
        >
          <EditNote />
        </IconButton>
      </StyledToolbar>

      <StyledToolbar>
        <div className="description">
          <Avatar alt="my picture" src={pic}/>
          <span>
            From <b>{data?.from}</b>
            <br />
            To <b>{data?.to}</b>
          </span>
        </div>
        <ThreeDot />
      </StyledToolbar>
    </header>
  );
}
