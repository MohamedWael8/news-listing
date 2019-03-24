import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect , Switch } from "react-router-dom";
import LoginContainer from './LoginContainer'
import NewsContainer from './NewsContainer';
import CustomNewsFormContainer from './CustomNewsFormContainer'
import CustomNewsListingContainer from './CustomNewsListingContainer'

class RouterMain extends Component 
{
    state=
    {
        users : 
        [
            {email : "wael@wael.com" , password : "wael"},
            {email : "salma@salma.com" , password : "salma"},
            {email : "taher@taher.com" , password : "taher"}
        ],

        isAuth : false,

        apiFetched : false,

        news:[],

        customNews : 
        [
            {
                author:'john',
                title:'john',
                description:'john',
                urlToImage:'john.com',
                publishedAt:'22/3/2022'
            },
            {
                author:'john2',
                title:'john2',
                description:'john2',
                urlToImage:'john2.com',
                publishedAt:'22/3/2023'
            }
        ]

    }

    fetchNews = (newsFeed) =>
    {
        this.setState({news : newsFeed})
    }

    confirmAuth()
    {
        this.setState({isAuth : true});
    }
    
    //couldn't enter variable directly from the parameter | state not read properly
    appendCustomNews = (customArticle) =>
    {
        let currentState = customArticle;
        this.setState(previousState => ({
            customNews: [...previousState.customNews, currentState]
        }));
        console.log(this.state)
    }

    render() 
    {
        return (
            <Router>
               <Switch>
               <Route exact path="/">
                    <Redirect to="/signin" />
                </Route>
                <Route path="/signin" render={(props) => <LoginContainer {...props} users={this.state.users} /> }/>
                <Route path="/news" render={(props) => <NewsContainer {...props}  fetchNews={this.fetchNews}/> }/>
                <Route path="/customnewsform" render={(props) => <CustomNewsFormContainer {...props} appendCustomNews={this.appendCustomNews}/> }/>
                <Route path="/customnews" render={(props) => <CustomNewsListingContainer {...props} customNewsFeed={this.state.customNews}/> }/>
               </Switch>
            </Router>
        );
    }

}



export default RouterMain;
