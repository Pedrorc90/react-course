import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Grid, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { startLogout } from "../../store/auth/thunks";

const NavBar = ( { drawerWidth } ) => {

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch( startLogout() )
    }
    return ( 
        <AppBar position="fixed" sx={{ width: { sm: `calc(100% - ${ drawerWidth }px)` }, ml: { sm: `${ drawerWidth }px` } }}>
            <Toolbar>
                <IconButton color='inherit' edge="start" sx={{ mr: 2, display: { sm: 'none' } }}>
                    <MenuOutlined />
                </IconButton>

                <Grid container direction="row" justifyContent='space-around' alignItems="center">
                    <Typography variant="h6" noWrap component='div'>Journal App</Typography>
                    <IconButton color='error' onClick={ onLogout }>
                        <LogoutOutlined />
                    </IconButton>
                </Grid>
            </Toolbar>

        </AppBar>
     );
}
 
export default NavBar;