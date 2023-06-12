import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SmsFailedIcon from '@mui/icons-material/SmsFailed';

const options = [
  '  Members',
  '  Share Number',
  '  Report',
];

const ITEM_HEIGHT = 48;

export default function ThreeDot() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [display, setDisplay] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
          <MenuItem key={options[0]} selected={options[0] === 'Pyxis'} onClick={handleClose}>
            <PeopleAltIcon /> {options[0]}
          </MenuItem>
          <MenuItem key={options[1]} selected={options[1] === 'Pyxis'} onClick={handleClose}>
          <LocalPhoneIcon /> {options[1]}
        </MenuItem>
        <MenuItem key={options[2]} selected={options[2]=== 'Pyxis'} onClick={handleClose}>
        <SmsFailedIcon /> {options[2]}
      </MenuItem>
      </Menu>
    </div>
  );
}