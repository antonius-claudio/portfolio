import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import FaceIcon from '@material-ui/icons/Face';
import WorkIcon from '@material-ui/icons/Work';
import FolderIcon from '@material-ui/icons/Folder';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import { Link, useLocation } from 'react-router-dom';

export default function NavigationBar () {
    let [url, setUrl] = React.useState('');
    let location = useLocation().pathname;

    useEffect(() => {
        setUrl(location);
    }, [location])

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
                        {url === '/' ? 
                            <Button color="inherit" className='activePage'>Home</Button>
                        :
                            <Button color="inherit" >Home</Button>
                        }
                        </Link>
                        <Link to='/profile'>
                        {url === '/profile' ? 
                            <Button color="inherit" className='activePage'>Profile</Button>
                        :
                            <Button color="inherit" >Profile</Button>
                        }
                        </Link>
                        <Link to='/experience'>
                        {url === '/experience' ? 
                            <Button color="inherit" className='activePage'>Experience</Button>
                        :
                            <Button color="inherit" >Experience</Button>
                        }
                        </Link>
                        <Link to='/projects'>
                        {url === '/projects' ? 
                            <Button color="inherit" className='activePage'>Projects</Button>
                        :
                            <Button color="inherit" >Projects</Button>
                        }
                        </Link>
                        <Link to='/contact'>
                        {url === '/contact' ? 
                            <Button color="inherit" className='activePage'>Contact</Button>
                        :
                            <Button color="inherit" >Contact</Button>
                        }
                        </Link>
                    </div>
                <div className="mobileMenu">
                    <Link to='/'>
                        <IconButton>
                        {url === '/' ? 
                            <HomeIcon className='activePageMobile'/>
                        :
                            <HomeIcon />
                        }
                        </IconButton>
                    </Link>
                    <Link to='/profile'>
                        <IconButton>
                        {url === '/profile' ? 
                            <FaceIcon className='activePageMobile'/>
                        :
                            <FaceIcon />
                        }
                        </IconButton>
                    </Link>
                    <Link to='/experience'>
                        <IconButton>
                        {url === '/experience' ? 
                            <WorkIcon className='activePageMobile'/>
                        :
                            <WorkIcon />
                        }
                        </IconButton>
                    </Link>
                    <Link to='/projects'>
                        <IconButton>
                        {url === '/projects' ? 
                            <FolderIcon className='activePageMobile'/>
                        :
                            <FolderIcon />
                        }
                        </IconButton>
                    </Link>
                    <Link to='/contact'>
                        <IconButton>
                        {url === '/contact' ? 
                            <ContactMailIcon className='activePageMobile'/>
                        :
                            <ContactMailIcon />
                        }
                        </IconButton>
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    )
}