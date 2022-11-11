import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import { purpleRegular, openSeaNFTbuttonColor, whiteRegular} from '../constants/styles';

import { ButtonRegular } from '../components/buttons/ButtonRegular';
import OpenSeaNFTs from '../components/OpenSeaNFTs';

import openSeaWallpaper from '../assets/images/openseawallpaper.jpg';

import { openSeaCollections } from '../api/ApiService';

const OpenSeaLatestNFTs = styled.section`
  --section-bg-s1-margin: 0 auto;
  --section-bg-s1-min_height: auto;
  --section-bg-s1-max_height: auto;
  --section-bg-s1-padding: 20px 20px 60px;
  --section-bg-s1-bg_color: rgba(0,0,0, 0.3);
  --section-bg-s1-bg_image: url(${openSeaWallpaper});
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

const OpenSeaPage = () => {

  return (
    <>
      <OpenSeaLatestNFTs className="grid section">
        <header className="grid-col-all">
          <h1>NFTs on OpenSea</h1>
          <h2>Latest NFTs on OpenSea Marketplace</h2>
        </header>
        <OpenSeaNFTs dataVar={openSeaCollections} />
        <div className="grid-col-all center">
          <ButtonRegular className="center" linkRef="https://opensea.io/vanchoy" btnColor={whiteRegular} btnHover={purpleRegular} btnTextColor={openSeaNFTbuttonColor} btnTextHoverColor={whiteRegular} btnText="See more">
            <FontAwesomeIcon pull="right" icon={solid('circle-chevron-right')} size="1x" />
          </ButtonRegular>
        </div>
      </OpenSeaLatestNFTs>
    </>
  );

};

export default OpenSeaPage;