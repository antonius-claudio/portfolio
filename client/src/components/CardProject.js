import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import BrandCardHeader from '@mui-treasury/components/cardHeader/brand';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
export default function CardProject(props) {
   return (
    <Grid item lg={6} md={12} sm={12} className='boxCardProject'>
        <a href={props.project.link}>
            <Card>
                <BrandCardHeader
                    image={
                    '/folder.png'
                    }
                    // extra={props}
                />
                <CardContent >
                    <TextInfoContent
                    overline={props.project.date}
                    heading={props.project.name}
                    body={
                        props.project.description
                    }
                    />
                    <div className='boxChips'>
                        {
                            props.project.techs.map((tech, index) => (
                                <Chip color="primary" key={index} label={tech} />
                            ))
                        }
                    </div>
                </CardContent>
            </Card>
        </a>
    </Grid>
   ) 
};