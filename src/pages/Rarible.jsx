import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import RaribleNFTs from '../components/RaribleNFTs';
import raribleWallpaper from '../assets/images/rariblewallpaper.jpg';

import { ButtonRegular } from '../components/buttons/ButtonRegular';

import {whiteRegular, raribleNFTbuttonColor, purpleRegular} from '../constants/styles';

const RaribleLatestNFTs = styled.section`
  --section-bg-s1-margin: 0 auto;
  --section-bg-s1-min_height: auto;
  --section-bg-s1-max_height: auto;
  --section-bg-s1-padding: 20px 20px 60px;
  --section-bg-s1-bg_color: rgba(0,0,0, 0.6);
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

/* =================|END|================= */
`;

const RariblePage = () => (
  <RaribleLatestNFTs className="grid section">
    <header className="grid-col-all">
      <h1>NFTs on Rarible</h1>
      <h2>Latest NFTs on Rarible Marketplace</h2>
    </header>
    <RaribleNFTs />
    <div className="grid-col-all center">
      <ButtonRegular className="center" linkRef="https://rarible.com/istoyanov" btnColor={whiteRegular} btnHover={purpleRegular} btnTextColor={raribleNFTbuttonColor} btnTextHoverColor={whiteRegular} btnText="See more">
        <FontAwesomeIcon pull="right" icon={solid('circle-chevron-right')} size="1x" />
      </ButtonRegular>
    </div>
  </RaribleLatestNFTs>
);


export default RariblePage;
