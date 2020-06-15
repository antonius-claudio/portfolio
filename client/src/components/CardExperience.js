import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

export default function CardExperience(props) {
    return (
        <>
            <Grid item lg={12} md={12} sm={12} className='boxCardExperience'>
                <h4>
                    {props.experience.company} ~ {props.experience.title}
                </h4>
                <Divider className='lineDivider' />
                <span>
                    {props.experience.date}
                </span>
                <ul>
                    { 
                        props.experience.jobDesks.map(job => (
                            <li>{job}</li>
                        ))
                    }
                </ul>
            </Grid>
        </>
    )  
};