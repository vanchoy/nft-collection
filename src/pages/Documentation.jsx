import styled from 'styled-components';

import Dependencies from '../components/Dependencies';

const DocSection = styled.section`
  --section-bg-s1-margin: 0 auto;
  --section-bg-s1-min_height: auto;
  --section-bg-s1-max_height: auto;
  --section-bg-s1-padding: 20px;
  --section-bg-s1-bg_color: #f9f9f9;
  --section-bg-s1-bg_image: none;
  --section-bg-s1-bg_attachment: none;
  --section-bg-s1-bg_position: relative;
  --section-bg-s1-bg_repeat: none;
  --section-bg-s1-bg_blend_mode: none;
  --section-bg-s1-bg_size: border-box;
  --section-bg-s1-box_shadow: none;

    h1 {
      --section-text-margin: 0 auto;
      --section-text-padding: 20px 20px 10px 20px;
      --section-text-display: block;
      --section-text-color: #000;
      --section-font_family: inherit;
      --section-font_size: 26px;
      --section-font_weight: bold;
      --section-font_style: normal;
      --section-text_align: center;
      --section-text_decoration: none;
      --section-text_shadow: 1px 1px 1px #d2d2d2;
      --section-text-line_height: 1.5;
    }

    h2 {
      --section-text-margin: 0 auto;
      --section-text-padding: 0 20px 20px 20px;
      --section-text-display: block;
      --section-text-color: #333;
      --section-font_family: inherit;
      --section-font_size: 20px;
      --section-font_weight: normal;
      --section-font_style: oblique;
      --section-text_decoration: none;
      --section-text_align: center;
      --section-text_shadow: 1px 1px 1px #d2d2d2;
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

const Documentation = () => {

  return (
    <DocSection className="grid section">
      <header className="grid-col-all">
        <h1>
        Developer Documentation
        </h1>
        <h2>
         Developer documentation about this project
        </h2>
      </header>
      <div className="grid-col-3-7">
        <h3>List of all installed packages in this project</h3>
        <p>
        Click on a package's name to see the latest version documentation or on the currently installed version.
        </p>
        <Dependencies           
          tableWidth="100%" 
          tableMaxHeight="600px" 
          tableHeaderColor="#b26acf" 
          tableHeaderTextColor="#ffffff"
        />
      </div>
      <div className="grid-col-7-11">
        <h3>Useful commands</h3>
        <p>These are some useful commands you can use after downloading the project from its GitHub repository.</p>
        <p>To start the development server, run: "npm start"</p>
      </div>
    </DocSection>
  );
}

export default Documentation;
