import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function Apps() {
  return (
    <Paper>
      <Tabs
        style={{
          height: 60,
          maxWidth: 443,
          position: 'fixed'
        }}
        indicatorColor="primary"
        textColor="primary"
        centered>
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </Paper>
  );
}
export default Apps;
