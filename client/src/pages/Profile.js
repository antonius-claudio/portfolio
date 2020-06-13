import React from 'react';
import Grid from '@material-ui/core/Grid';
import 'animate.css';

export default function Profile () {
    return (
        <>
            <Grid container xs={12} className='containerBox'>
                <Grid item lg={4} sm={12} className='helloText'>
                    HELLO
                </Grid>
                <Grid item lg={6} sm={12} className='descriptionText'>
                    <div className='imText'>
                        I'm
                    </div>
                    <div className='nameText'>
                        Claudio Antonius
                    </div>
                    <div className='imaText'>
                        a software engineer, who can help you to create a website or application in accordance with your imagination.
                    </div>
                </Grid>
            </Grid>
        </>
    )
}