
import styled from 'styled-components';
import '../styles/blurb.scss';

import checkExternal from '../UIController/urlPathCheck';

import { BlurbCardButton } from './buttons/BlurbCardButton';

const BlurbBox = styled.section`
/* ====== Blurb Style 2 Settings ====== */
    /* ~  (Box Styling)  ~ */
        --blurb-s1-padding: 20px 20px 70px 20px;
        --blurb-s1-width: 99%;
        --blurb-s1-height: 99%;
        --blurb-s1-max-height: 100%;
        --blurb-s1-bg-color: #ffffffB3;
        --blurb-s1-border: none;
        --blurb-s1-border-radius: 10px 10px 26px 26px;
        --blurb-s1-box-shadow: none;
        --blurb-s1-margin: 1px 1px 10px 1px;
        transition: transform 0.3s ease-in, box-shadow 0.6s ease-in; 
        backdrop-filter: blur(3px);
        cursor: pointer;
    /* ----------~(end)~---------- */

    /* ~  (Box Hover Styling)  ~ */
        --blurb-s1-hover-bg-color: #f1f1f1;
        --blurb-s1-hover-box-shadow: 0 0 6px 0 #fff;
    /* ----------~(end)~---------- */

    :hover {
      transform: translate(0, -9px);
      transition: opacity 0.3s, transform 0.3s ease-in; 
    }
    
    /* ~  (Featured image)  ~ */
        --blurb-s1-img-width: 100%;
        --blurb-s1-img-height: auto;
        --blurb-s1-img-max_width: 200px;
        --blurb-s1-img-max_height: 100%;
        --blurb-s1-img-padding: 5px;
    /* ----------~(end)~---------- */

    /* ~  (Title Style)  ~ */
        --blurb-s1-title-padding: 0 10px 5px 10px;
        --blurb-s1-title-font-size: 24px;
        --blurb-s1-title-font-family: "Calibri";
        --blurb-s1-title-text-color: #333;
        --blurb-s1-title-text-align: center;      
        --blurb-s1-title-text-shadow: 0.5px 0.9px 1px #666;
    /* ----------~(end)~---------- */

    /* ~  (Text paragraph)  ~ */
      --blurb-s1-p-padding: 0 5px 0 5px;
      --blurb-s1-p-text-align: left;
      --blurb-s1-p-font-size: 18px;
      --blurb-s1-p-line-height: 1;
      --blurb-s1-p-text-color: #333;
      --blurb-s1-p-font-family: "Calibri";
      --blurb-s1-p-text-shadow: 0.5px 0.9px 1px #888;   
      --blurb-s1-last-p-margin: none; 
      --blurb-s1-p-span-text-align: left;
    /* ----------~(end)~---------- */

/* =================|END|================= */
`;

const SingleNFT = (props) => {

  return (
    <BlurbBox className={`${props.gridColumn} blurb-style-s`}  
      onClick={ event => { checkExternal(props.linkRef) ? window.open(props.linkRef) : window.location.href = props.linkRef }}
    >
      <header>
        <h3>{props.name}</h3>
      </header>
      <div className="section-image center">
        <img src={`${props.img}`} alt={`${props.description}`} />
      </div>
      <p>
        {props.descr}
      </p>
      <BlurbCardButton 
        id={props.id} 
        key={props.id}
        linkRef={props.linkRef} 
        btnColor={props.btnColor} 
        btnHovColor={props.btnHovColor} 
        btnText={props.btnText} 
        btnTextColor={props.btnTextColor}
        btnTextHovColor={props.btnTextHovColor}
      />
    </BlurbBox>
  );
};

export default SingleNFT;