import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import Box from '@material-ui/core/Box';
import { borderRadius } from '@material-ui/system';

function Search() {
  return (
    <Box display="flex" justifyContent="center">
      <React.Fragment>
        <AppBar
          position="static"
          color="default"
          style={{
            height: 40,
            maxWidth: 320,
            position: 'fixed',
            borderRadius: '20px',
            marginTop: 10,
            color: '#FFFFFF'
          }}>
          <Toolbar>
            <SearchIcon style={{ color: '#778899', marginTop: '-15px' }} />
            <InputBase
              placeholder="Search…."
              inputProps={{ 'aria-label': 'search' }}
              style={{ marginTop: '-15px' }}
            />
          </Toolbar>
        </AppBar>
      </React.Fragment>
    </Box>
  );
}

export default Search;
