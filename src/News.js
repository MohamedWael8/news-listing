import React from 'react'; 
import NewsTemplate from './NewsTemplate';
import 'bootstrap/dist/css/bootstrap.css';

const News = (newsFeed) => 
{
    const news = Array.from(newsFeed.newsFeed)
    if(news === 0)
    {
        return (<h1>No Data</h1>)
    }
    else
    {
        return (
            <div className="container">
                <div className="jumbotron justify-content">
                    <h1>
                        What's happening in Egypt
                    </h1>
                </div>
                <div className="row"  id="news-list">
                    <ul>
                        {news.map(
                            (article,i) => <NewsTemplate 
                                            key={i} 
                                            urlToImage={article.urlToImage} 
                                            title={article.title} 
                                            description={article.description}
                                            author={article.author}
                                            publishedAt = {article.publishedAt}/>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default News;