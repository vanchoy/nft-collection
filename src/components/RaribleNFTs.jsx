import { useEffect, useState } from 'react';

import { raribleAPI } from '../api/ApiService';

import gridColumns from '../UIController/gridColumns';

import {
  purpleRegular, raribleNFTbuttonColor, whiteRegular, raribleNFTbuttonTextHoverColor
} from '../constants/styles';

import SingleNFT from './SingleNFT';

const RaribleNFTs = () => {
  const [raribleData, setRaribleData] = useState([]);

  useEffect(() => {

    async function getRari() {
      const response = await fetch(raribleAPI);
      let result = await response.json();
      setRaribleData(result.items);
      console.log(result.items);
    }
    getRari();

    return (
      setRaribleData([])
    );
  }, []);

  const data = () => {

    return raribleData.map((item, id) => 
    {   
      let img = item.meta.content[0].url;
      let nftId = item.id;

      if (nftId.includes("ETHEREUM:")) {
        nftId = nftId.replace("ETHEREUM:","");
      }

      if (img.includes("ipfs.infura.io")) {
        img = img.replace("ipfs.infura.io", "ipfs.io");
      } 

      return (
        <SingleNFT 
          id={item.id} 
          gridColumn={gridColumns(raribleData, 1, id)} 
          name={item.meta.name}  
          key={item.id} 
          descr={item.meta.description} 
          img={img} 
          linkRef={`https://rarible.com/token/` + nftId}
          btnColor={raribleNFTbuttonColor} 
          btnHovColor={purpleRegular} 
          btnText={"Buy here"} 
          btnTextColor={whiteRegular}
          btnTextHovColor={raribleNFTbuttonTextHoverColor}
        />
      );
    }
    );
  };

  return (
    <>
      { data() }
    </>
  )
};

export default RaribleNFTs;