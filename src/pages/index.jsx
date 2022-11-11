import { useRef } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import { ButtonRegular } from '../components/buttons/ButtonRegular';
import OpenSeaNFTs from '../components/OpenSeaNFTs';
import RaribleNFTs from '../components/RaribleNFTs';

import ButtonArrow from '../components/buttons/ButtonArrow';

import heroWallpaper from '../assets/images/rariblewallpaper2.jpg';
import raribleWallpaper from '../assets/images/rariblewallpaper.jpg';
import nftmarketplaces from '../assets/images/nftmarketplaces-wallpaper.jpg';

import {openSeaNFTbuttonColor, whiteRegular, raribleNFTbuttonColor} from '../constants/styles';
import { openSeaAPI } from '../api/ApiService';

const HeroSectionStyle = styled.section`
  --section-bg-s1-margin: 0 auto;
  --section-bg-s1-min_height: 100vh;
  --section-bg-s1-max_height: auto;
  --section-bg-s1-padding: 20px;
  --section-bg-s1-bg_color: rgba(0,0,0, 0.6);
  --section-bg-s1-bg_image: url(${heroWallpaper});
  --section-bg-s1-bg_attachment: fixed;
  --section-bg-s1-bg_position: center;
  --section-bg-s1-bg_repeat: no-repeat;
  --section-bg-s1-bg_blend_mode: darken;
  --section-bg-s1-bg_size: cover;
  --section-bg-s1-box_shadow: none;

    h1 {
      --section-text-margin: 0 auto;
      --section-text-padding: 0px;
      --section-text-display: block;
      --section-text-color: #fff;
      --section-font_family: inherit;
      --section-font_size: 64px;
      --section-font_weight: bold;
      --section-font_style: normal;
      --section-text_align: center;
      --section-text_decoration: none;
      --section-text_shadow: 1px 1px 1px #8B4513;
      --section-text-line_height: 1.5;
    }

    h2 {
      --section-text-margin: 0 auto;
      --section-text-padding: 0 20px 20px 20px;
      --section-text-display: block;
      --section-text-color: #fff;
      --section-font_family: inherit;
      --section-font_size: 46px;
      --section-font_weight: normal;
      --section-font_style: oblique;
      --section-text_decoration: none;
      --section-text_align: center;
      --section-text_shadow: 1px 1px 1px #666;
      --section-text-line_height: 1.3;
    }

    h3 {
      --section-text-margin: 0 auto;
      --section-text-padding: none;
      --section-text-display: block;
      --section-text-color: #000;
      --section-font_family: inherit;
      --section-font_size: 20px;
      --section-font_weight: bold;
      --section-font_style: normal;
      --section-text_decoration: none;
      --section-text_align: center;
      --section-text_shadow: 1px 1px 1px #d2d2d2;
      --section-text-line_height: 1.5;
    }

    p {
      --section-text-margin: 0 auto;
      --section-text-padding: 10px;
      --section-text-display: block;
      --section-text-color: #000;
      --section-font_family: inherit;
      --section-font_size: 16px;
      --section-font_weight: normal;
      --section-font_style: normal;
      --section-text_decoration: none;
      --section-text_align: center;
      --section-text_shadow: none;
      --section-text-line_height: 1.5;
    }

    a {
      --section-text-margin: 0 auto;
      --section-text-padding: none;
      --section-text-display: inline-block;
      --section-text-color: #5C5D5D;
      --section-font_family: inherit;
      --section-font_size: inherit;
      --section-font_weight: normal;
      --section-font_style: normal;
      --section-text_align: center;
      --section-text_shadow: 1px 1px 1px #d2d2d2;
      --section-text-line_height: 1.5;
      --section-text_decoration: underline;

      &:hover {
        --section-text-hover-color: #990000;
      }
    }
    /* For more settings go to ["styles/index.scss"] */
`;

const LatestNFTs = styled.section`
  --section-bg-s1-margin: 0 auto;
  --section-bg-s1-min_height: auto;
  --section-bg-s1-max_height: auto;
  --section-bg-s1-padding: 20px 20px 60px;
  --section-bg-s1-bg_color: rgba(0,0,0, 0.3);
  --section-bg-s1-bg_image: url(${raribleWallpaper});
  --section-bg-s1-bg_attachment: fixed;
  --section-bg-s1-bg_position: center;
  --section-bg-s1-bg_repeat: no-repeat;
  --section-bg-s1-bg_blend_mode: darken;
  --section-bg-s1-bg_size: cover;
  --section-bg-s1-box_shadow: none;

    h1 {
      --section-text-margin: 0 auto;
      --section-text-padding: 20px 20px 10px 20px;
      --section-text-display: block;
      --section-text-color: #fff;
      --section-font_family: inherit;
      --section-font_size: 36px;
      --section-font_weight: bold;
      --section-font_style: normal;
      --section-text_align: center;
      --section-text_decoration: none;
      --section-text_shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
      --section-text-line_height: 1.5;
    }

    h2 {
      --section-text-margin: 0 auto;
      --section-text-padding: 0 20px 20px 20px;
      --section-text-display: block;
      --section-text-color: #fff;
      --section-font_family: inherit;
      --section-font_size: 20px;
      --section-font_weight: normal;
      --section-font_style: oblique;
      --section-text_decoration: none;
      --section-text_align: center;
      --section-text_shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
      --section-text-line_height: 1.3;
    }

    h3 {
      --section-text-margin: 0 auto;
      --section-text-padding: none;
      --section-text-display: block;
      --section-text-color: #000;
      --section-font_family: inherit;
      --section-font_size: 20px;
      --section-font_weight: bold;
      --section-font_style: normal;
      --section-text_decoration: none;
      --section-text_align: center;
      --section-text_shadow: 1px 1px 1px #d2d2d2;
      --section-text-line_height: 1.5;
    }

    p {
      --section-text-margin: 0 auto;
      --section-text-padding: 10px;
      --section-text-display: block;
      --section-text-color: #000;
      --section-font_family: inherit;
      --section-font_size: 16px;
      --section-font_weight: normal;
      --section-font_style: normal;
      --section-text_decoration: none;
      --section-text_align: center;
      --section-text_shadow: none;
      --section-text-line_height: 1.5;
    }

    a {
      --section-text-margin: 0 auto;
      --section-text-padding: none;
      --section-text-display: inline-block;
      --section-text-color: #5C5D5D;
      --section-font_family: inherit;
      --section-font_size: inherit;
      --section-font_weight: normal;
      --section-font_style: normal;
      --section-text_align: center;
      --section-text_shadow: 1px 1px 1px #d2d2d2;
      --section-text-line_height: 1.5;
      --section-text_decoration: underline;

      &:hover {
        --section-text-hover-color: #990000;
      }
    }
    /* For more settings go to ["styles/index.scss"] */
`;

const MarketPlaces = styled.section`
  --section-bg-s1-margin: 0 auto;
  --section-bg-s1-min_height: 50vh;
  --section-bg-s1-max_height: auto;
  --section-bg-s1-padding: 20px 20px 60px;
  --section-bg-s1-bg_color: rgba(0,0,0, 0.6);
  --section-bg-s1-bg_image: url(${nftmarketplaces});
  --section-bg-s1-bg_attachment: fixed;
  --section-bg-s1-bg_position: center;
  --section-bg-s1-bg_repeat: no-repeat;
  --section-bg-s1-bg_blend_mode: darken;
  --section-bg-s1-bg_size: cover;
  --section-bg-s1-box_shadow: none;

    h1 {
      --section-text-margin: 0 auto;
      --section-text-padding: 20px 20px 10px 20px;
      --section-text-display: block;
      --section-text-color: #fff;
      --section-font_family: inherit;
      --section-font_size: 36px;
      --section-font_weight: bold;
      --section-font_style: normal;
      --section-text_align: center;
      --section-text_decoration: none;
      --section-text_shadow: 1px 1px 1px #111;
      --section-text-line_height: 1.5;
    }

    h2 {
      --section-text-margin: 0 auto;
      --section-text-padding: 0 20px 20px 20px;
      --section-text-display: block;
      --section-text-color: #fcfcfc;
      --section-font_family: inherit;
      --section-font_size: 20px;
      --section-font_weight: normal;
      --section-font_style: oblique;
      --section-text_decoration: none;
      --section-text_align: center;
      --section-text_shadow: 1px 1px 1px #111;
      --section-text-line_height: 1.3;
    }

    h3 {
      --section-text-margin: 0 auto;
      --section-text-padding: none;
      --section-text-display: block;
      --section-text-color: #000;
      --section-font_family: inherit;
      --section-font_size: 20px;
      --section-font_weight: bold;
      --section-font_style: normal;
      --section-text_decoration: none;
      --section-text_align: center;
      --section-text_shadow: 1px 1px 1px #d2d2d2;
      --section-text-line_height: 1.5;
    }

    p {
      --section-text-margin: 0 auto;
      --section-text-padding: 10px;
      --section-text-display: block;
      --section-text-color: #fff;
      --section-font_family: inherit;
      --section-font_size: 16px;
      --section-font_weight: normal;
      --section-font_style: normal;
      --section-text_decoration: none;
      --section-text_align: center;
      --section-text_shadow: none;
      --section-text-line_height: 1.5;
    }

    a {
      --section-text-margin: 0 auto;
      --section-text-padding: none;
      --section-text-display: inline-block;
      --section-text-color: #5C5D5D;
      --section-font_family: inherit;
      --section-font_size: inherit;
      --section-font_weight: normal;
      --section-font_style: normal;
      --section-text_align: center;
      --section-text_shadow: 1px 1px 1px #d2d2d2;
      --section-text-line_height: 1.5;
      --section-text_decoration: underline;

      &:hover {
        --section-text-hover-color: #990000;
      }
    }

/* =================|END|================= */
`;

const MainPage = () => {
  const latestNFTs = useRef(0);

  return (
    <>
      <HeroSectionStyle className="grid section">
        <header className="grid-col-3-11 grid-col-center">
          <h1>
            Hey, <em className="oblique-text">Aesthete!</em> Are you looking for original and unique art?
          </h1>
          <h2>
          Explore my latest NFTs :)
          </h2>
        </header>
        <ButtonArrow className="grid-col-all center" onClick={latestNFTs} />
      </HeroSectionStyle>
      <LatestNFTs className="grid section" ref={latestNFTs}>
        <header className="grid-col-all">
          <h1>Latest NFTs</h1>
          <h2>These are my latest NFTs on OpenSea and Rarible marketplaces</h2>
        </header>
        <OpenSeaNFTs dataVar={openSeaAPI} />
        <RaribleNFTs />
      </LatestNFTs>
      <MarketPlaces className="grid section">
        <header className="grid-col-all">
          <h1>NFT Marketplaces</h1>
          <h2>Explore all of my unique NFTs on OpenSea and Rarible platforms</h2>
        </header>
        <div className="grid-col-4-7 center">
          <ButtonRegular linkRef="https://opensea.io/vanchoy" btnColor={openSeaNFTbuttonColor} btnHover={whiteRegular} btnTextColor={whiteRegular} btnTextHoverColor={openSeaNFTbuttonColor} btnText="OpenSea Profile">
            <FontAwesomeIcon pull="left" icon={solid('ship')} size="1x" />
          </ButtonRegular>
        </div>
        <div className="grid-col-7-10 center">
          <ButtonRegular linkRef="https://rarible.com/istoyanov" btnColor={raribleNFTbuttonColor} btnHover={whiteRegular} btnTextColor={whiteRegular} btnTextHoverColor={raribleNFTbuttonColor} btnText="Rarible Profile">
            <FontAwesomeIcon pull="left" icon={solid('r')} size="1x" />
          </ButtonRegular>
        </div>
      </MarketPlaces>
    </>
  );
};

export default MainPage;