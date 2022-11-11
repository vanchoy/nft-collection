import styled from 'styled-components';

import toolsImage from '../assets/images/tools-background.jpg';
import { purpleRegular } from '../constants/styles';

const AboutSection = styled.section`
    --section-bg-s1-margin: 0 auto;
    --section-bg-s1-min_height: auto;
    --section-bg-s1-max_height: auto;
    --section-bg-s1-padding: 20px 20px 40px 20px;
    --section-bg-s1-bg_color: rgba(0,0,0, 0.2);
    --section-bg-s1-bg_image: url(${toolsImage});
    --section-bg-s1-bg_attachment: fixed;
    --section-bg-s1-bg_position: center;
    --section-bg-s1-bg_repeat: no-repeat;
    --section-bg-s1-bg_blend_mode: normal;
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
    --section-text-padding: 0 20px 10px 20px;
    --section-text-display: block;
    --section-text-color: #000;
    --section-font_family: inherit;
    --section-font_size: 26px;
    --section-font_weight: normal;
    --section-font_style: oblique;
    --section-text_decoration: none;
    --section-text_align: center;
    --section-text_shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
    --section-text-line_height: 1.3;
  }

  h3 {
    --section-text-margin: 0 auto;
    --section-text-padding: 0 20px 0 10px;
    --section-text-display: block;
    --section-text-color: ${purpleRegular};
    --section-font_family: inherit;
    --section-font_size: 18px;
    --section-font_weight: bold;
    --section-font_style: oblique;
    --section-text_decoration: none;
    --section-text_align: left;
    --section-text_shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    --section-text-line_height: 1.3;
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
    --section-text_align: left;
    --section-text_shadow: none;
    --section-text-line_height: 1.5;
  }

  article {
      padding: 60px 40px;
      background: rgba(255, 255, 255, 0.9);
      border-radius: 20px;
  
      backdrop-filter: blur(1px);
      box-shadow: 9px 9px 13px 0 rgb(255 255 255 / 25%), -9px -9px 13px 0 rgb(255 255 255 / 25%);
  }

    /* For more settings go to ["styles/index.scss"] */
`;

const AboutPage = () => {
  return (
    <AboutSection className="grid section">
      <header className="grid-col-all">
        <h1>More about this project</h1>
      </header>
      <article className="grid-col-4-10">
        <h2>Website info</h2>
        <h3>What is Lorem Ipsum?</h3>
        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <h3>Why do we use it?</h3>
        <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </p>
        <h2>About the author</h2>
        <h3>
            Where does it come from?
        </h3>
        <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        </p>
        <h3>
            Where can I get some?
        </h3>
        <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        </p>
      </article>
    </AboutSection>
  )
};

export default AboutPage;