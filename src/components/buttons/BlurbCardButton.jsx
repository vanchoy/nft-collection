import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import '../../styles/blurb.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import checkExternal from '../../UIController/urlPathCheck';

const sharedBlurbButtonStyle = css`
/* ~  (Button Style)  ~ */
    --blurb-s1-btn-width: 100%;
    --blurb-s1-btn-height: auto;
    --blurb-s1-btn-padding: 23px 30px 23px 30px;
    --blurb-s1-btn-color: ${(props) => props.btnColor};
    --blurb-s1-btn-text-align: center;
    --blurb-s1-btn-text-color: ${(props) => props.btnTextColor};
    --blurb-s1-btn-text-shadow: -1px 0 #949494;
    --blurb-s1-btn-font-size: 18px;
    --blurb-s1-btn-border: none;
    --blurb-s1-btn-border-top-left-radius: none;
    --blurb-s1-btn-border-top-right-radius: none;
    --blurb-s1-btn-border-bottom-left-radius: 26px;
    --blurb-s1-btn-border-bottom-right-radius: 26px;
    --blurb-s1-btn-box-shadow: inset 0px 9px 8px -9px #666, inset 0 0 0 0 #000;
    --blurb-s1-btn-trasition: all 0.4s;

    .icon-center {
      text-align: center;
      vertical-align: middle;
      display: block;
    }
    
    /* ----------~(end)~---------- */

    /* ~  (Button Hover Style)  ~ */
    --blurb-s1-btn-hover-color: ${(props) => props.btnHovColor};
    --blurb-s1-btn-hover-opacity: 1;
    --blurb-s1-btn-hover-text-color: ${(props) => props.btnTextHovColor};
    --blurb-s1-btn-hover-text-shadow: none;
    --blurb-s1-btn-hover-box-shadow: inset 0px 11px 8px -10px #5c5c5c, inset 0 0 0 0 #000; 
/* ----------~(end)~---------- */
`;

const TypeBlurbButton = styled.button`
  ${sharedBlurbButtonStyle}
`;

const TypeRouterLink = styled(Link)`
  ${sharedBlurbButtonStyle}
`;

const BlurbCardButton = (props) => {
  let button, ifExternal = checkExternal(props.linkRef);

  if (ifExternal) {
    button = 
      <TypeBlurbButton
        key={props.id} 
        className="blurb-button"
        btnColor={props.btnColor} 
        btnHovColor={props.btnHovColor}
        btnTextColor={props.btnTextColor}
        btnTextHovColor={props.btnTextHovColor}
        as="a"
        href={props.linkRef}
        target="_blank"  
        rel="noopener noreferrer"
      >
        {props.btnText}
        <FontAwesomeIcon 
          pull="right"
          icon={solid('circle-chevron-right')}
          size="1x" 
          fade
        />
      </TypeBlurbButton>
    ;
  }

  else {
    button = 
      <TypeRouterLink 
        to={props.linkRef}
        key={props.id} 
        className="blurb-button" 
        btnColor={props.btnColor} 
        btnHovColor={props.btnHovColor}
        btnTextColor={props.btnTextColor}
        btnTextHovColor={props.btnTextHovColor}
      >
        {props.btnText}
        <FontAwesomeIcon 
          pull="right"
          icon={solid('circle-chevron-right')}
          size="1x" 
          fade
        />
      </TypeRouterLink>;
  }

  return button;
};

export { BlurbCardButton };