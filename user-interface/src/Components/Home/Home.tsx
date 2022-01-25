import "../../Css/Home.css";

import React from "react";
import { IArticle } from "../InterfaceRepository/IArticle";
import { Loader } from "../Loader/Loader";

const FakeArticles: IArticle[] = [
  {
    articleId: "Sdfds",
    title: "Shkolla Hysni Zajmi me banjo të re",
    contents:
      "jdskfjd skfjs ds fksjd fjksd fjksd fjksd fjks dfkjsd fkjs dkjfs dkjf sdkjf sk dfkj. dfdsf sdf sdfs df sdf sd fsdf sdf sdfsdf s.d fsdf sdf sd.f s.df .sd. fs.d f.sf. sd. s.",
    datePublished: "12 janar 2022",
    school: "sdfsd",
    pictureUrl: "https://i.postimg.cc/Gtx3Dk02/E5j-Okb-WYAs-PAdh.jpg",
  },
  {
    articleId: "Sdfds",
    title: "Shkolla Hysni Zajmi me banjo të re",
    contents:
      "jdskfjd skfjs ds fksjd fjksd fjksd fjksd fjks dfkjsd fkjs dkjfs dkjf sdkjf sk dfkj",
    datePublished: "12 janar 2022",
    school: "sdfsd",
    pictureUrl: "https://i.postimg.cc/Gtx3Dk02/E5j-Okb-WYAs-PAdh.jpg",
  },
  {
    articleId: "Sdfds",
    title: "Shkolla Hysni Zajmi me banjo të re",
    contents:
      "jdskfjd skfjs ds fksjd fjksd fjksd fjksd fjks dfkjsd fkjs dkjfs dkjf sdkjf sk dfkj",
    datePublished: "12 janar 2022",
    school: "sdfsd",
    pictureUrl: "https://i.postimg.cc/Gtx3Dk02/E5j-Okb-WYAs-PAdh.jpg",
  },
  {
    articleId: "Sdfds",
    title: "Shkolla Hysni Zajmi me banjo të re",
    contents:
      "jdskfjd skfjs ds fksjd fjksd fjksd fjksd fjks dfkjsd fkjs dkjfs dkjf sdkjf sk dfkj",
    datePublished: "12 janar 2022",
    school: "sdfsd",
    pictureUrl: "https://i.postimg.cc/Gtx3Dk02/E5j-Okb-WYAs-PAdh.jpg",
  },
];

export const Home = () => {
  const [Articles, SetArticles] = React.useState<IArticle[]>([] as IArticle[]);

  return (
    <section onClick={() => SetArticles(FakeArticles)} id="Home">
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
    <article>
      <div className="article-yellow">
        <img src={article.pictureUrl} alt="" />
        <div className="article-tex">
          <h3>{article.title}</h3>
          <h5>{article.datePublished}</h5>
          <p>{article.contents}</p>
        </div>
      </div>
    </article>
  );
};
