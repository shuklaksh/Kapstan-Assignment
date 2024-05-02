import React, { useEffect, useState } from 'react';
import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const Dropdown = () => {
  const [anchorEl, setAnchorEl] =  useState<HTMLElement | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOptionSelect = (option:string) => {
    handleClose();
    setSelectedOption(option);
  };
const options = [
    "tic-tac-toe","2","3"
]

useEffect(() => {
    setSelectedOption(options[0]);
},[])

  return (
    <div style={{ display: 'flex', alignItems: 'center', maxHeight:'1rem'}}>
        {selectedOption && (
        <Typography variant="body1" style={{ marginRight: '8px', color: 'black' }}>
          {selectedOption}
        </Typography>
      )}
      <IconButton
        aria-controls="dropdown-menu"
        aria-haspopup="true"
        onClick={handleClick}
        disableRipple // removes the ripple effect on click
        style={{ backgroundColor: 'transparent', border: 'none' }} // styles to remove background and border
      >
        <KeyboardArrowDownOutlinedIcon />
      </IconButton>
      <Menu
        id="dropdown-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem key={index} onClick={() => handleOptionSelect(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default Dropdown;
