import React, { Component } from 'react';
import CustomNewsForm from './CustomNewsForm'


class CustomNewsFormContainer extends Component {
    constructor(props) {
        super(props);


        this.state = { 
            author:'',
            title:'',
            description:'',
            urlToImage:'',
            publishedAt:''
          
         }
    }
    
    addTimeStamp=()=>
    {
        var currentDate = new Date();
        currentDate = currentDate.toLocaleDateString();
        this.setState({publishedAt : currentDate});
    }
    //write code for modal pop-up upon sucessful entry | timestamp for first entry does not work.
    submitArticle=()=>
    {
        this.addTimeStamp();
        var article = this.state;
        console.log(article);
        this.props.appendCustomNews(article);
    }

    handleChange=(event)=> 
    {
        const { target } = event;
        const value =  target.value;
        const { name } = target;
        this.setState({[name]: value});
    }

    render() { 
        return ( 
            <CustomNewsForm handleChange={this.handleChange} submitArticle={this.submitArticle}/>
        );
    }
}
 
export default CustomNewsFormContainer;