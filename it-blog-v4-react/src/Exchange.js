import React from "react";
import articleData from "./articledata";
import ArticleWithNotes from "./ArticleWithNotes";
import FourStepArticle from "./FourStepArticle";

function Exchange() {
  return (
    <div>
      {articleData.map(item => {
        if (item.category === "EXCHANGE") {
          if (item.title === "How To Customize Mailbox Size") {
            return (
              <ArticleWithNotes
                category={item.category}
                title={item.title}
                subtitle={item.subtitle}
                description={item.description}
                instructions={item.instructions.map(item => (
                  <li>{item}</li>
                ))}
                notes={item.notes.map(item => (
                  <p class="article-notes">{item}</p>
                ))}
                img={item.img}
                alt={item.alt}
              />
            );
          } else if (item.title === "How To Create A Retention Policy") {
            return (
              <FourStepArticle
                category={item.category}
                title={item.title}
                subtitleOne={item.subtitleOne}
                descriptionOne={item.descriptionOne}
                instructionsOne={item.instructionsOne.map(item => (
                  <li>{item}</li>
                ))}
                subtitleTwo={item.subtitleTwo}
                descriptionTwo={item.descriptionTwo}
                instructionsTwo={item.instructionsTwo.map(item => (
                  <li>{item}</li>
                ))}
                subtitleThree={item.subtitleThree}
                descriptionThree={item.descriptionThree}
                instructionsThree={item.instructionsThree.map(item => (
                  <li>{item}</li>
                ))}
                subtitleFour={item.subtitleFour}
                descriptionFour={item.descriptionFour}
                instructionsFour={item.instructionsFour.map(item => (
                  <li>{item}</li>
                ))}
                img1={item.img1}
                alt1={item.alt1}
                img2={item.img2}
                alt2={item.alt2}
                img3={item.img3}
                alt3={item.alt3}
              />
            );
          } else {
            return null;
          }
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default Exchange;
