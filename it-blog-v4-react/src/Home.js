import React from "react";
import Headline from "./Headline";
import articleData from "./articledata";
import Article from "./Article";
import ArticleWithNotes from "./ArticleWithNotes";
import TwoStepArticle from "./TwoStepArticle";
import TwoStepArticleWithNotes from "./TwoStepArticleWithNotes";
import FourStepArticle from "./FourStepArticle";

function Home() {
  return (
    <div>
      <Headline />
      {articleData.map(item => {
        if (item.title === "How To Create A Retention Policy") {
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
        } else if (item.title === "I need access to a network drive") {
          return (
            <TwoStepArticleWithNotes
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
              notes={item.notes.map(item => (
                <p class="article-notes">{item}</p>
              ))}
              img={item.img}
              alt={item.alt}
            />
          );
        } else if (item.title === "How to add a Printer by IP Address") {
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
        } else if (item.title === "How To Customize Mailbox Size") {
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
      })}
    </div>
  );
}

export default Home;
