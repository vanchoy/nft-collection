import { useEffect, useState } from 'react';

import gridColumns from '../UIController/gridColumns';

import {
  purpleRegular, openSeaNFTbuttonColor, whiteRegular, openSeaNFTbuttonTextHoverColor
} from '../constants/styles';

import SingleNFT from './SingleNFT';

const OpenSeaNFTs = (props) => {
  const [openSeaData, setOpenSeaData] = useState([]);
  
  useEffect(() => {
    async function getData() {
      const response = await fetch(props.dataVar);
      let result = await response.json();
      setOpenSeaData(result.assets);
      console.log(result.assets);
    }
    getData();

    return (
      setOpenSeaData([])
    );
  }, [props.dataVar]);

  const data = () => {
    
    return openSeaData.map((item, id) => (
      <SingleNFT 
        id={item.id} 
        gridColumn={gridColumns(openSeaData, 1, id)} 
        name={item.name}  
        key={item.id} 
        descr={item.description} 
        img={item.image_url} 
        linkRef={item.permalink}
        btnColor={openSeaNFTbuttonColor} 
        btnHovColor={purpleRegular} 
        btnText={"Make offer"} 
        btnTextColor={whiteRegular}
        btnTextHovColor={openSeaNFTbuttonTextHoverColor}
      />
    ));
    
  };

  return (
    <>
      { data() }
    </>
  )
};

export default OpenSeaNFTs;