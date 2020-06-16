import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import CardProject from '../components/CardProject';

export default function Projects () {
    let [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects([
            {
                name: 'Hokogu',
                date: 'May 2020',
                description: 'Web app to find recipes and guide in cooking.',
                link: 'https://hokogu-project.web.app/',
                techs: [
                    'React Js',
                    'Voice Recognition'
                ]
            },
            {
                name: 'EntertainMe',
                date: 'May 2020',
                description: 'Website about movies and tv series.',
                link: 'https://github.com/antonius-claudio/entertainme-project',
                techs: [
                    'React Js',
                    'Microservice'
                ]
            },
            {
                name: 'Sugoku Mobile App',
                date: 'May 2020',
                description: 'Sudoku game mobile app',
                link: 'https://github.com/antonius-claudio/sugoku-project/',
                techs: [
                    'React Native',
                    'Expo'
                ]
            },
            {
                name: 'Pokemon Card',
                date: 'Apr 2020',
                description: 'Website about pokemon cards.',
                link: 'https://desolate-atoll-02744.herokuapp.com/',
                techs: [
                    'React Js'
                ]
            },
            {
                name: 'E-Commerce',
                date: 'Apr 2020',
                description: 'Website that displays items for sale.',
                link: 'https://e-commerce-8a1e7.web.app/',
                techs: [
                    'Vue Js'
                ]
            },
            {
                name: 'E-Commerce-cms',
                date: 'May 2020',
                description: 'Admin-side website that regulates items for sale.',
                link: 'https://e-commerce-cms-69dc9.web.app/',
                techs: [
                    'Vue Js'
                ]
            },
            {
                name: 'Kanban',
                date: 'Apr 2020',
                description: 'Website about "signboard".',
                link: 'https://kaban-31455.web.app/',
                techs: [
                    'Vue Js'
                ]
            },
            {
                name: 'Fancy Todo',
                date: 'Mar 2020',
                description: 'Website about "what to do list".',
                link: 'https://github.com/antonius-claudio/fancy-to-do',
                techs: [
                    'jQuery',
                    'Express Js'
                ]
            }
        ])
    }, [])
    return (
        <>
            <Grid container xs={12} className='containerOutside expOnly'>
                <Grid item lg={2} md={2} sm={12} className='boxExperience'>
                    <div className='textExperience'>
                        <h3>My Project</h3>
                    </div>
                </Grid>
                <Grid container lg={6} md={6} sm={12} className='containExperience'>
                    {
                        projects &&
                        projects.map((project, index) => (
                            <CardProject key={index} project={project}/>
                        ))
                    }
                </Grid>
            </Grid>
        </>
    )
}