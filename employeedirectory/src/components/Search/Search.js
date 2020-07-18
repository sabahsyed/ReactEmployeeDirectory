import React , {Component} from "react";


export class Index extends Component {
    state = {
        search : "",
    }
    handleInputChange =(event =>{
        const {search,value } = event.target;

        this.setState({
            [search] : value,
        })
    })
    render() {
        return (
            <div>
                <form className = "form">
                    <input
                    value = {this.state.search}
                    search = "firstName"
                    onChange = {this.handleInputChange}
                    type = "text"
                    placeholder = "Search for employee"
                />
                </form>
                
            </div>
        )
    }
}

export default Index
