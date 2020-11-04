import React from "react";

function FourStepArticle(props) {
  return (
    <div class="article operating-systems">
      <div class="article-left-subsection">
        <p class="category">CATEGORY: {props.category}</p>
        <h1 class="article-title">{props.title}</h1>
        <p class="article-subtitle bold">{props.subtitleOne}</p>
        <p class="article-instructions">{props.descriptionOne}</p>
        <ol>{props.instructionsOne}</ol>
        <p class="article-subtitle bold">{props.subtitleTwo}</p>
        <p class="article-instructions">{props.descriptionTwo}</p>
        <ol>{props.instructionsTwo}</ol>
        <p class="article-subtitle bold">{props.subtitleThree}</p>
        <p class="article-instructions">{props.descriptionThree}</p>
        <ol>{props.instructionsThree}</ol>
        <p class="article-subtitle bold">{props.subtitleFour}</p>
        <p class="article-instructions">{props.descriptionFour}</p>
        <ol>{props.instructionsFour}</ol>
      </div>
      <div class="article-right-subsection">
        <img src={props.img1} alt={props.alt1} />
        <img src={props.img2} alt={props.alt2} />
        <img src={props.img3} alt={props.alt3} />
      </div>
    </div>
  );
}

export default FourStepArticle;
