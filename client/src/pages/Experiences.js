import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import CardExperience from '../components/CardExperience';

export default function Experiences () {
    let [experiences, setExperiences] = useState([]);
    let [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        setExperiences([
            {
                company : 'Pelangi Kasih School',
                date : 'Jan 2019 - Jan 2020',
                title : 'Web Programmer',
                jobDesks : [
                    'Designed a new look for the website using Photoshop',
                    'Created a new page as requested using WordPress',
                    'Inputted the latest news and events',
                    'Created google analytics report every month'
                ]
            },
            {
                company : 'PT. Gaia Persada',
                date : 'Jan 2017 - July 2017',
                title : 'Internship',
                jobDesks : [
                    'Created a new website layout',
                    "Made designs according to client's requirements"
                ]
            },
        ])
    }, []);

    return (
        <>
            <Grid container xs={12} className='containerOutside expOnly'>
                <Grid item lg={2} md={2} sm={12} className='boxExperience'>
                    <div className='textExperience'>
                        <h3>My Experience</h3>
                    </div>
                </Grid>
                <Grid container lg={6} md={6} sm={12} className='containExperience'>
                    <Grid container lg={12} md={12} sm={12} className='boxTabs'>
                        {
                            experiences[0] && 
                            experiences.map((experience, index) => (
                                <Grid item lg={6} md={6} sm={6} key={index}>
                                    {
                                        activeTab === index ?
                                        <div onClick={() => {setActiveTab(index)}} className='textTabs activeTabsMenu'>
                                            {experience.company}
                                        </div>
                                        :
                                        <div onClick={() => {setActiveTab(index)}} className='textTabs'>
                                            {experience.company}
                                        </div>
                                    }
                                </Grid>
                            ))
                        }
                    </Grid>
                    <Grid container lg={12} md={12} sm={12}>
                        {
                            experiences[0] &&
                            <CardExperience experience={experiences[activeTab]} />
                        }
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}