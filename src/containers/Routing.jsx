import { Route, Routes } from 'react-router-dom';

import IndexPage from '../pages/index';
import RariblePage from '../pages/Rarible';
import OpenSeaPage from '../pages/OpenSea';
import AboutPage from '../pages/About';
import Documentation from '../pages/Documentation';
import NotFoundPage from '../pages/404';

const Routing = () => (
  <Routes>
    <Route exact path="/" element={<IndexPage/>} />
    <Route exact path="/nfts-on-opensea" element={<OpenSeaPage/>} />
    <Route exact path="/nfts-on-rarible" element={<RariblePage/>} />
    <Route exact path="/about" element={<AboutPage/>} />
    <Route exact path="/documentation" element={<Documentation/>} />
    
    <Route path="" element={<NotFoundPage/>} />
    <Route path="*" element={<NotFoundPage/>} />
    <Route exact path="/404" element={<NotFoundPage/>} />
    <Route element={<NotFoundPage/>} />
  </Routes>
);

export default Routing;
