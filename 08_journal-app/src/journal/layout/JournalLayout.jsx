import { Box, Toolbar } from "@mui/material";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";

const drawerWidth = 280;

const JournalLayout = ( { children } ) => {
    return ( 
        <Box sx={{ display: 'flex' }} className="animate__animated animate__fadeIn animate__faster">

            <NavBar drawerWidth={ drawerWidth }/>
            <Sidebar drawerWidth={ drawerWidth }/>

            <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                { children }
            </Box>

            

        </Box>
     );
}
 
export default JournalLayout;