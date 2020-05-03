import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import styles from './Cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'

const Cards = (data) => {
    const {data : {confirmed, recovered, deaths, lastUpdate}} = data;
    if(!confirmed){
        return 'Loading...';
    }
    return(
        <div className = {styles.container}>
            <div className = {styles.head}>
            <h1>C<span className={styles.logo}><img src="https://img.icons8.com/nolan/64/coronavirus.png" alt="covid_logo"/></span>VID-19 <span>GLOBAL</span> TRACKER</h1>
            </div>
            <Grid container spacing = {3} justify = "center">
                <Grid item component = {Card} xs={12} md={3} className = {cx(styles.card, styles.infected)}>
                    <CardContent >
                        <Typography variant="h5" gutterBottom>
                            INFECTED
                        </Typography>
                        <Typography variant="h5">
                            <CountUp
                            start={0}
                            end = {confirmed.value}
                            duration={2}
                            separator=","
                            />
                        </Typography>
                        <Typography variant="h5" color="textSecondary">
                            {new Date(lastUpdate).toDateString() }
                        </Typography>
                        <Typography variant="body2">
                            No. of Infected People with Covid-19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component = {Card} xs={12} md={3} className = {cx(styles.card, styles.recovered)}>
                    <CardContent color="blue">
                        <Typography variant="h5" gutterBottom>
                            RECOVERED
                        </Typography>
                        <Typography variant="h5">
                        <CountUp
                            start={0}
                            end = {recovered.value}
                            duration={2}
                            separator=","
                            />
                        </Typography>
                        <Typography variant="h5" color="textSecondary">
                            {new Date(lastUpdate).toDateString() }
                        </Typography>
                        <Typography variant="body2">
                            No. of Recovered People from Covid-19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component = {Card} xs={12} md={3} className = {cx(styles.card, styles.deaths)}>
                    <CardContent color="blue">
                        <Typography variant="h5" gutterBottom>
                            DEATHS
                        </Typography>
                        <Typography variant="h5">
                        <CountUp
                            start={0}
                            end = {deaths.value}
                            duration={2}
                            separator=","
                            />
                        </Typography>
                        <Typography variant="h5" color="textSecondary">
                            {new Date(lastUpdate).toDateString() }
                        </Typography>
                        <Typography variant="body2">
                            No. of Deaths From Covid-19
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;