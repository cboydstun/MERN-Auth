import React from 'react';

import ArticleProvider from "../../components/Article/Context/articleContext.js";
import Articles from "../../containers/Articles.js"
import AddArticle from "../../components/Article/AddArticle.js";

function ArticlesPage() {
  return (
    <main>
      <ArticleProvider>
        <AddArticle />
        <Articles />
      </ArticleProvider>
    </main>
  );
}

export default ArticlesPage;
