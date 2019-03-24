import React ,{Component} from 'react';
import CustomNewsListing from './CustomNewsListing'

class CustomNewsListingContainer extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {  
            customNewsFeed : this.props.customNewsFeed
        }
    }

     
    componentDidUpdate(nextProps)
    {
        console.log(nextProps)
    }

    render() { 
        return ( <CustomNewsListing newsFeed={this.props.customNewsFeed}/> );
    }
}
 
export default CustomNewsListingContainer;
