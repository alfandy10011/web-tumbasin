import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';
import Button from '@material-ui/core/Button';

function CardPasar() {
  return (
    <React.Fragment>
      <Box display="flex" justifyContent="center">
        <Card
          position="static"
          color="default"
          style={{
            height: 84.89,
            width: 324,
            position: 'fixed',
            marginTop: '5%'
          }}>
          <CardContent></CardContent>
          <CardActions>
            <Typography
              style={{
                marginTop: '-35px',
                paddingLeft: '10px',
                color: '#A9A9A9'
              }}>
              Kamu Belanja Di?
            </Typography>
          </CardActions>
          <StoreMallDirectoryIcon
            style={{
              paddingLeft: '25px',
              color: '#00BFFF',
              marginTop: '-10px',
              width: 30,
              height: 30
            }}
          />
          <Typography
            style={{
              paddingLeft: '70px',
              marginTop: '-30px',
              color: '#000000'
            }}>
            Pasar Bulu
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            style={{marginTop: '-50px', marginLeft: '230px', width: '30px', height: '30px' }}>
            Ganti
          </Button>
        </Card>
      </Box>
    </React.Fragment>
  );
}

export default CardPasar;
