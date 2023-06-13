
import * as React from "react";
import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import ArrowBack from "@mui/icons-material/ArrowBack";
import Avatar from "@mui/material/Avatar";
import EditNote from "@mui/icons-material/EditNote";
import ThreeDot from "./ThreeDot";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  backgroundColor: "white",
  color: "black",
  alignItems: "center",
  fontSize: "1rem",
  justifyContent: "space-between",
}));

export default function ProminentAppBar() {
  return (
    // <Box>
    // <AppBar position="static">
    <header>
      <StyledToolbar>
        <div>
          <IconButton
            size="1rem"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            // sx={{ mr: 2 }}
          >
            <ArrowBack sx={{ fontSize: 25 }} />
          </IconButton>

          <Typography variant="h5" component="span">
            <b>Trip 1</b>
          </Typography>
        </div>

        <IconButton
          size="1rem"
          aria-label="display more actions"
          edge="end"
          color="inherit"
        >
          <EditNote sx={{ fontSize: 25 }} />
        </IconButton>
      </StyledToolbar>

      <StyledToolbar>
        <div className="description">
          <Avatar sx={{ fontSize: 25 }} />
          <span>
            From <b>IGI Airport, T3</b>
            <br />
            To <b>Sector 28</b>
          </span>
        </div>
        <ThreeDot sx={{ fontSize: 25 }} />
      </StyledToolbar>
    </header>
  );
}