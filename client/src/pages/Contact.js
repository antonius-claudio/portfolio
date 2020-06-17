import React from 'react';
import Grid from '@material-ui/core/Grid';

export default function Contact () {
    return (
        <>
            <Grid container xs={12} className='containerOutside expOnly boxContact'>
                <div className='textContact'>
                    <h1>In Touch</h1>
                </div>
                <div className='textDescriptionContact'>
                    I'm very happy to receive questions, opportunities, suggestions or just greetings. 
                    You can contact me throgh the following things. So don't hesitate to contact me.
                </div>
                <div className='boxSocialIcon'>
                    <a href='https://wa.me/6287787772067' className='socialIcon'>
                        <img src='/whatsapp.gif' />
                    </a>
                    <a href='mailto:antonius.claudio@gmail.com' className='socialIcon'>
                        <img src='/mail.gif' />
                    </a>
                    <a href='https://www.linkedin.com/in/claudio-antonius/' className='socialIcon'>
                        <img src='/linkedin.gif' />
                    </a>
                    <a href='https://github.com/antonius-claudio' className='socialIcon'>
                        <img src='/github.gif' />
                    </a>
                </div>
            </Grid>
        </>
    )
}