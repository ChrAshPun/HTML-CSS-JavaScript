import React from "react";
import articleData from "./articledata";
import Article from "./Article";
import TwoStepArticle from "./TwoStepArticle";

function Printers() {
  return (
    <div>
      {articleData.map(item => {
        if (item.category === "PRINTERS") {
          if (item.title === "How to add a Printer by IP Address") {
            return (
              <TwoStepArticle
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
                img={item.img}
                alt={item.alt}
              />
            );
          } else {
            return (
              <Article
                category={item.category}
                title={item.title}
                subtitle={item.subtitle}
                description={item.description}
                instructions={item.instructions.map(item => (
                  <li>{item}</li>
                ))}
                img={item.img}
                alt={item.alt}
              />
            );
          }
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default Printers;
