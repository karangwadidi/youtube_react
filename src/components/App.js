import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./videoList";
import VideoDetail from "./VideoDetail";
// we make here the class-based component (to hold all the states!!!)
class App extends React.Component{

    // our state
    state={videos:[],selectedVideo:null};

    componentDidMount(){
      this.onTermSubmit('classical music')
    }

    onTermSubmit= async term=>{
      
      const response= await youtube.get('/search',{params:{q:term}})
      this.setState({
        videos:response.data.items,
        selectedVideo:response.data.items[0]
      });
    } 
    // we add here a new callback
    onVideoSelect=(video)=>{
      this.setState({selectedVideo:video});
    }

    render(){
        return(

        <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit}/>

            <div className="ui grid">
              <div className="ui row">

                <div className="eleven wide column">
            <VideoDetail video={this.state.selectedVideo}/>
                </div>
            
                <div className="five wide column">
            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>

            </div>
            
              </div>

            </div>

            </div>
        
        ) 
    }
}
export default App;