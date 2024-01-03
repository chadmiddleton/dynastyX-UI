import React from "react";
import {AppBar, Toolbar, IconButton, Menu, MenuItem} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {useNavigate} from 'react-router-dom';

const ToolbarWithMenu: React.FC = () => {
    const [anchorE1, setAnchorE1] = React.useState<null | HTMLElement>(null);
    const navigate = useNavigate();
    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorE1(event.currentTarget);
    }
    const handleMenuItemClick = (path: string) => {
        handleClose();
        navigate(path);
    }
    const handleLogout = (path: string) => {
        localStorage.removeItem('token');
        navigate(path);
    }
    const handleClose = () => {
        setAnchorE1(null);
    }

    return (
        <div>
            <AppBar position={'static'}>
                <Toolbar>
                    <IconButton size={"large"} edge={"start"} color={"inherit"} aria-label={"menu"} onClick={handleMenuClick}>
                        <MenuIcon/>
                    </IconButton>
                    <Menu id={"simple-menu"} anchorEl={anchorE1} open={Boolean(anchorE1)} onClose={handleClose}>
                        <MenuItem onClick={() => handleMenuItemClick('/account')}>Account</MenuItem>
                        <MenuItem onClick={() => handleMenuItemClick('/league')}>League</MenuItem>
                        <MenuItem onClick={() => handleMenuItemClick('/login')}>Log In</MenuItem>
                        <MenuItem onClick={() => handleLogout('/login')}>Log Out</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default ToolbarWithMenu;