import "../../Css/Home.css";

import React, { useEffect } from "react";
import { IArticle } from "../InterfaceRepository/IArticle";
import { Loader } from "../Loader/Loader";
import agent from "../../Agent/Agent";
import { GetDate } from "../../Util";

export const Home = () => {
  const [Articles, SetArticles] = React.useState<IArticle[]>([] as IArticle[]);

  useEffect(() => {
    const getArticles = async () => {
      let articles = await agent.Articles.list();
      SetArticles(articles);
    };
    getArticles();
  }, [Articles]);

  return (
    <section id="Home">
      {Articles.length === 0 ? (
        <Loader />
      ) : (
        <ArticlesList articles={Articles} />
      )}
    </section>
  );
};

interface ArticlesListProps {
  articles: IArticle[];
}

const ArticlesList: React.FunctionComponent<ArticlesListProps> = ({
  articles,
}) => {
  return (
    <>
      <h2>Lajmet më të reja</h2>
      {articles.map((article) => {
        return <ArticleItem article={article} />;
      })}
    </>
  );
};

interface ArticleItemProps {
  article: IArticle;
}

const ArticleItem: React.FunctionComponent<ArticleItemProps> = ({
  article,
}) => {
  return (
    <article key={article.articleId}>
      <div className="article-yellow">
        <img src={article.pictureUrl} alt="" />
        <div className="article-tex">
          <h3>{article.title}</h3>
          <h5>{GetDate(article.datePublished)}</h5>
          <p>{article.contents}</p>
        </div>
      </div>
    </article>
  );
};
