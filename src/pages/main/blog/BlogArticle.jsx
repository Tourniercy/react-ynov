import React, {useState, useEffect} from 'react';
import {useLocation, useParams} from 'react-router-dom'
import {blogService} from "../../../../../router/src/services";
import Article from "../../../../../router/src/components/blog/Article";

const BlogArticle = () => {
  const location = useLocation()
  const params = useParams()
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    if(location.state.article){
      setArticle(location.state.article)
      setLoading(false)
    } else {
      blogService.getArticleById(params.id).then(
        res => setArticle(res)
      ).finally(() => setLoading(false))
    }
  },[location,params])

  return (
    <div>
      {!loading && (
        <Article description={article.description} content={article.content} title={article.title}/>
      )}
    </div>
  );
};

export default BlogArticle;