import React from 'react';
import Apps from '../../component/appbar';
import Buttonnav from '../../component/bottom';
import BottomSearch from '../../component/search-bottom';
import Paper from '../../component/card-pasar';
import CardKategori from '../../component/card-kategori';

function Home() {
  return (
    <React.Fragment>
      <BottomSearch />
      <Paper />
      <Apps />
      <CardKategori />
      <Buttonnav />
    </React.Fragment>
  );
}

export default Home;
