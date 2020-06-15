import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

export default function Home () {

    return (
        <>
            <Grid container xs={12} className='containerOutside'>
                <Grid item lg={4} md={4} sm={8} className='containerImageDio'>
                    <img src='/diocartoon.png' className='responsive imageDio' alt='claudio antonius'/>
                </Grid>
                <Grid container lg={6} md={6} sm={11} className='containerBox'>
                {/* <Grid container xs={12} className='containerBox'> */}
                    <Grid item lg={2} md={2} sm={12} className='helloText'>
                        HELLO
                    </Grid>
                    <Grid item lg={10} md={10} sm={12} className='descriptionText'>
                        <div className='imText'>
                            I'm
                        </div>
                        <div className='nameText'>
                            Claudio Antonius
                        </div>
                        <div className='imaText'>
                            a software engineer, who can help you to create a website or application in accordance with your imagination.
                        </div>
                        <div className='buttonWhoAmI'>
                            <Link to='/experience'>
                                <button>
                                    Where I've been
                                </button>
                            </Link>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}