import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import QrCodeIcon from '@mui/icons-material/QrCode';
import QrReader from 'react-qr-scanner';
import { Dialog } from '@mui/material';
import { useState } from 'react';

export default function QRSilly() {
    const [state, useState] = useState({delay: 100, result: "No result"});
  
    // this.handleScan = this.handleScan.bind(this)
    
    handleScan(data){
      this.setState({
        result: data,
      })
    }
    handleError(err){
      console.error(err)
    }
    render(){
      const previewStyle = {
        height: 240,
        width: 320,
      }
  
      return(
        <div>
          <QrReader
            delay={this.state.delay}
            style={previewStyle}
            onError={this.handleError}
            onScan={this.handleScan}
            />
          <p>{this.state.result}</p>
        </div>
      )
    }
  }