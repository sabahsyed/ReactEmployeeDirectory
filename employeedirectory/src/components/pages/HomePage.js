import React , {Component} from "react";
import API from "../../utils/API";

class HomePage extends Component{
    state = {
        search : "",
        results:[]
    };
componentDidMount(){
    this.searchAPI();
}

searchAPI = query =>{
    console.log("This is query" + query);
    console.log("This is API -->>" + JSON.stringify(API))
        API.getUsers(query)
        .then(res => this.setState({results : res}))
        .catch(err => console.log(err));
    }
render(){
        return(
            <div>
                search = {this.state.search}
            </div>
        );
    }
}


export default HomePage;