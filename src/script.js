const articlesListID = document.getElementById('articlesList');
const articlesId = document.getElementById('articlesId');

if (articlesListID){}
else{
    articlesId.setAttribute('class', 'withoutArticles');
    articlesId.innerHTML = "<h2>There aren't articles to show</h2><button class='btnAddArticle'>New article</button>";
}