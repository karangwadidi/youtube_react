import React from "react";
class SearchBar extends React.Component{

    state={term:''};

    onIputChange= event =>{
     this.setState({term:event.target.value})
    }
    onFormSubmit=event=>{
                      event.preventDefault();
            // make sure we call callback from parent component passed to the child-component(Searchbar vs App) via a props
            //we then just have to reference the name of the props with the this and props

            this.props.onFormSubmit(this.state.term);
    }
    render(){
        return(
            <div className=" search-bae ui segment">
             <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input 
                    type="text" 
                    value={this.state.term}
                    onChange={this.onIputChange}
                    />
                </div>
             </form>
            </div>
        )
    }
}
export default SearchBar;