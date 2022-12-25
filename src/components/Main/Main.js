import React from 'react';
import { Card, CardHeader, Typography, CardContent, Grid, Divider } from '@material-ui/core';
import useStyles from './Styles';
import Form from './Form/Form';
import List from './List/List';

const Main = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader title='Expense Tracker' />
            <CardContent>
                <Typography align='center'
                    variant='h5'>
                    Balance: Rs 10000
                </Typography>
                <Typography style={{
                    lineHeight: '1.5em',
                    marginTop: '20px'
                }}
                    variant='subtitle1'>
                    Say Something
                </Typography>
                <Divider />
                <Form />
            </CardContent>
            <CardContent className={classes.CardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main