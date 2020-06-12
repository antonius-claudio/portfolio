import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import HomeIcon from '@material-ui/icons/Home';
import FaceIcon from '@material-ui/icons/Face';
import WorkIcon from '@material-ui/icons/Work';
import FolderIcon from '@material-ui/icons/Folder';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import { Link } from 'react-router-dom';

export default function NavigationBar () {
    return (
        <AppBar position="static" className="boxNavbar">
            <Toolbar className="containerNavbar">
                    <Link to='/'>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <img src="/logo.png" style={{width: '40px'}}/>
                        </IconButton>
                    </Link>
                    <div className="desktopMenu">
                        <Link to='/'>
                            <Button color="inherit">Home</Button>
                        </Link>
                        <Link to='/profile'>
                            <Button color="inherit">Profile</Button>
                        </Link>
                        <Link to='/experience'>
                            <Button color="inherit">Experience</Button>
                        </Link>
                        <Link to='/projects'>
                            <Button color="inherit">Projects</Button>
                        </Link>
                        <Link to='/contact'>
                            <Button color="inherit">Contact</Button>
                        </Link>
                    </div>
                <div className="mobileMenu">
                    <Link to='/'>
                        {/* <MenuItem> */}
                            <IconButton>
                                <HomeIcon />
                            </IconButton>
                        {/* </MenuItem> */}
                    </Link>
                    <Link to='/profile'>
                        {/* <MenuItem> */}
                            <IconButton>
                                <FaceIcon />
                            </IconButton>
                        {/* </MenuItem> */}
                    </Link>
                    <Link to='/experience'>
                        {/* <MenuItem> */}
                            <IconButton>
                                <WorkIcon />
                            </IconButton>
                        {/* </MenuItem> */}
                    </Link>
                    <Link to='/projects'>
                        {/* <MenuItem> */}
                            <IconButton>
                                <FolderIcon />
                            </IconButton>
                        {/* </MenuItem> */}
                    </Link>
                    <Link to='/contact'>
                        {/* <MenuItem> */}
                            <IconButton>
                                <ContactMailIcon />
                            </IconButton>
                        {/* </MenuItem> */}
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    )
}