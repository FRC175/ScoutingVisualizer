import { useState, useCallback, Component, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import QrCodeIcon from '@mui/icons-material/QrCode';
import CachedIcon from '@mui/icons-material/Cached';
import QrReader from 'react-qr-scanner';
import { Dialog } from '@mui/material';
import QRSilly from './QRSilly';
import axios from "axios";

export default function SillyAppBar({onRefreshButtonPressed}) {

    const [state, setState] = useState(false);
    const [scan, setScanned] = useState();

    useEffect(() => {
        const putMatches = async () => {
            if (scan == undefined) return

            console.log(`Writing ${scan.d.length} match data(s)`)
            for (let i = 0; i < scan.d.length; ++i) {
                let matchData = scan.d[i]
                console.log(matchData)
                const response = await axios.put("http://localhost:7070/matches/", matchData)
                    .then(response => {
                        console.log(`Success: ${response.status}`)
                    })
                    .catch(error => {
                        console.log(`Error: ${error.status}`)
                    });
            }
        }
        putMatches()
            .catch(e => console.log(e))
    }, [scan]);
    
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState(open);
    };

    const uploadScanData = (j) => {
        console.log(j);
        setScanned(j);
    }

    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={toggleDrawer(true)}
                    >
                        <QrCodeIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Buzz Scouting App (Hi Silly)
                    </Typography>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={onRefreshButtonPressed}
                    >
                        <CachedIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
        <Dialog
            open={state}
            onClose={toggleDrawer(false)}
        >
            <QRSilly uploadMatchData={uploadScanData}/>
        </Dialog>
        </>
    );
    
}