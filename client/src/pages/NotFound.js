import React from 'react';
import Grid from '@material-ui/core/Grid';

export default function NotFound () {
    return (
        <>
            <Grid item xs={12} style={{textAlign: 'center'}}>
                <img src='/404.gif' className='image404'/>
            </Grid>
        </>
    )
}