import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CreateIcon from '@material-ui/icons/Create';
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingBottom: '0vh',
    },
}));

export default function Footer() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.footer}>
            <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
                <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} component={NavLink} to='/Recents'/>
                <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} component={NavLink} to='/Favourites'/>
                <BottomNavigationAction label="Create New" value="createNew" icon={<CreateIcon />} component={NavLink} to='/NewRecipe' />
                <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />}  />
            </BottomNavigation>
        </div>
    );
}