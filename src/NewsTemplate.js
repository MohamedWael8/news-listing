import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './css/NewsTemplate.css'

const NewsTemplate = ({urlToImage, title , description , author , publishedAt}) => {
    return ( 
        <li>
            <div className="card cardNews">
            <div className = "row">
                <div className="col-sm-4 card-img-news">
                    <img className="newsImage" src={urlToImage}></img>
                </div>
                <div className="col-sm-8"> 
                    <div className="card-block card-block-news">
                        <h4 className="card-title newsTitle">{title}</h4>
                        <p className="card-text"> {description}</p>
                        <div className="meta">
                            <p>{author} &nbsp; {publishedAt}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </li>
    );
}
 
export default NewsTemplate;