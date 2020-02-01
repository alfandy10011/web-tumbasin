import React from 'react'
import Box from '@material-ui/core/Box'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import Kedai from '@material-ui/icons/Storefront';
import ReceiptIcon from '@material-ui/icons/Receipt';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import PersonIcon from '@material-ui/icons/Person';

function Apps(){
    return(
      <Box justifyContent='center' display='flex'>
          <React.Fragment>
            <BottomNavigation style={{backgroundColor: '#FFFFFF', bottom:0,width: '450px', height: '100px'}}>
                <BottomNavigationAction style={{color: '#FF6347'}} label="kedai" value="kedai" icon={<Kedai />} />
                <BottomNavigationAction style={{color: '#FF6347'}} label="ReceiptIcon" value="ReceiptIcon" icon={<ReceiptIcon />} />
                <BottomNavigationAction style={{color: '#FF6347'}} label="LiveHelpIcon" value="LiveHelpIcon" icon={<LiveHelpIcon />} />
                <BottomNavigationAction style={{color: '#FF6347'}} label="Profile" value="Profile" icon={<PersonIcon />} />
            </BottomNavigation>
          </React.Fragment>
      </Box>  
    )
}
export default Apps;