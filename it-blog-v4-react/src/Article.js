import React from "react";

function Article(props) {
  return (
    <div class="article operating-systems">
      <div class="article-left-subsection">
        <p class="category">CATEGORY: {props.category}</p>
        <h1 class="article-title">{props.title}</h1>
        <p class="article-subtitle bold">{props.subtitle}</p>
        <p class="article-instructions">{props.description}</p>
        <ol>{props.instructions}</ol>
      </div>
      <div class="article-right-subsection">
        <img src={props.img} alt={props.alt} />
      </div>
    </div>
  );
}

export default Article;
