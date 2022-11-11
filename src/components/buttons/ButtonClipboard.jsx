import { useState } from 'react';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClone } from '@fortawesome/free-solid-svg-icons';
import '../../styles/btn-clipboard.scss';

const BtnClipboardStyle = styled.div`
    --button_clipboard-container-margin: 0 auto;
    --button_clipboard-container-text_align: center;
    --button_clipboard-container-display: block;

    --btn_clipboard-text-box-padding: 10px;
    --btn_clipboard-text-box-min_width: 120px;
    --btn_clipboard-text-box-bg_color: #fff;
    --btn_clipboard-text_color: #333;
    --btn_clipboard-text-box-box_shadow: inset 0 0 1px 1px rgba(0, 0, 0, 0.1);

    --btn_clipboard-button-padding: 8px;
    --btn_clipboard-button-bg_color: #278cd4;
    --btn_clipboard-button-hover-bg_color: #EBBA00;
    --btn_clipboard-button-icon-color: #fff;

    /* For more Cliboard button settings go to ["styles/btn-clipboard.scss"]*/
`;

const ButtonClipboard = (props) => {
  const { id, textToCopy } = props;
  const [, setClipboard] = useState

  return (
    <BtnClipboardStyle className="button_clipboard-container">
      <div className="button-copy_text">{textToCopy}</div>
      <button
        key={id}
        type="button"
        title="Copy to clipboard"
        onClick={() => {
          setClipboard(textToCopy);
        }}
      >
        <FontAwesomeIcon icon={faClone} size="1x" />
      </button>
    </BtnClipboardStyle>
  );
};

export default ButtonClipboard;
