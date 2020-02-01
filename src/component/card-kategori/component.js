import React from 'react';
import Grid from '@material-ui/core/Grid';
import Gambar from '../../asset/sayuran.png';
import GambarLauk from '../../asset/lauk_pauk.png';
import GambarBumbu from '../../asset/bumbu.png';
import GambarSeafood from '../../asset/seafood.png';
import GambarSembako from '../../asset/sembako.png';
import GambarBuah from '../../asset/Group.png';
import GambarJajan from '../../asset/jajanan.png';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import GambarPengiriman from '../../asset/pengiriman.jpeg';


function Kategori() {
  return (
    <React.Fragment>
      <Typography style={{ marginLeft: '38%', paddingTop: '20px' }}>
        Telusuri jenis produk
      </Typography>
      <Container maxWidth="xs" style={{ marginTop: '10px' }}>
        <Grid container spacing={5}>
          <Grid item xs={3}>
            <Paper
              style={{ width: '50px', height: '50px', marginLeft: '30px' }}>
              <img src={Gambar} style={{ width: '50px', height: '50px' }} />
            </Paper>
            <Typography style={{ color: '#A9A9A9', marginLeft: '25px' }}>
              sayuran
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Paper style={{ width: '50px', height: '50px' }}>
              <img src={GambarLauk} style={{ width: '50px', height: '50px' }} />
            </Paper>
            <Typography style={{ color: '#A9A9A9', marginLeft: '10px' }}>
              Lauk pauk
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Paper style={{ width: '50px', height: '50px' }}>
              <img
                src={GambarBumbu}
                style={{ width: '50px', height: '50px' }}
              />
            </Paper>
            <Typography style={{ color: '#A9A9A9', marginLeft: '2px' }}>
              bumbu
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Paper style={{ width: '50px', height: '50px' }}>
              <img
                src={GambarSeafood}
                style={{ width: '50px', height: '50px' }}
              />
            </Paper>
            <Typography style={{ color: '#A9A9A9', marginLeft: '-2px' }}>
              seafood
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Paper style={{ width: '50px', height: '50px' }}>
              <img
                src={GambarSembako}
                style={{ width: '50px', height: '50px' }}
              />
            </Paper>
            <Typography style={{ color: '#A9A9A9', marginLeft: '-3px' }}>
              sembako
            </Typography>
          </Grid>
          <Grid container spacing={7}>
            <Grid item xs={3}>
              <Paper
                style={{ width: '50px', height: '50px', marginLeft: '50px' }}>
                <img
                  src={GambarJajan}
                  style={{ width: '50px', height: '50px' }}
                />
              </Paper>
              <Typography style={{color: '#A9A9A9', marginLeft: '50px'}}>jajanan</Typography>
            </Grid>
            <Grid item xs={3}>
              <Paper style={{ width: '50px', height: '50px' }}>
                <img
                  src={GambarBuah}
                  style={{ width: '50px', height: '50px' }}
                />
              </Paper>
              <Typography style={{ color: '#A9A9A9', marginLeft: '10px' }}>
                Buah
              </Typography>
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}></Grid>
          </Grid>
        </Grid>
        <Card stely={{paddingTop: '10px'}}>
            <img src={GambarPengiriman} style={{width: '424px', height: '212px', paddingTop: '-2px'}} />
        </Card>
      </Container>
    </React.Fragment>
  );
}

export default Kategori;
