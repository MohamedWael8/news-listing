import React from 'react';
import NewsTemplate from './NewsTemplate'

const CustomNewsListing = (newsFeed) => {
    const news = newsFeed.newsFeed
    console.log(news);
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
                        Our Own Fake News
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
 
export default CustomNewsListing;