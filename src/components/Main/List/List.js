import React from 'react'
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide, Button } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';
import useStyles from './Styles';

const List = () => {
    const classes = useStyles();

    const transactions = [
        {
            id: 1,
            type: 'income',
            category: 'Salary',
            amount: 50,
            date: new Date().toLocaleTimeString()
        }
    ];

    return (
        <MUIList dense={false} className={classes.list}>
            {transactions.map((transaction) => (
                <Slide direction="down" in mountOnEnter
                    unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar
                                className={transaction.type === 'income' ?
                                    classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category}
                            secondary={`$${transaction.amount} - ${transaction.date}`} />
                        <ListItemSecondaryAction>
                            <IconButton edge='end' area-label='delete' onClick=''>

                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide >
            ))
            }
        </MUIList >
    )
}

export default List