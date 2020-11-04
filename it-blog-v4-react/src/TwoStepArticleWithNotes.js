import React from "react";

function TwoStepArticleWithNotes(props) {
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
    <div>{props.notes}</div>
   </div>
   <div class="article-right-subsection">
    <img src={props.img} alt={props.alt} />
   </div>
  </div>
 );
}

export default TwoStepArticleWithNotes;