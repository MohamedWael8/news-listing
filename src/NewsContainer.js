import React, { Component } from 'react'; 
import News from './News'
import Axios from 'axios'

class NewsContainer extends Component 
{
    constructor(props) 
    {
 
        super(props);

        this.state = {
            newsFeed : []
           
        }
    }

    fetchNewsFeed()
    {
        Axios.get(`https://newsapi.org/v2/top-headlines` ,{ params : {country: 'eg', apiKey: '48343c6a20234e9c82fdd8d1c139c0d8'}})
        .then(res => {
          this.props.fetchNews(res.data.articles);
          this.setState({newsFeed : res.data.articles})

        })

    }

    componentDidMount()
    {
        this.fetchNewsFeed();

    }

    render() { 
        return ( <News newsFeed={this.state.newsFeed}/> );
    }
}
 
export default NewsContainer;