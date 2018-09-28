import React, { Component } from 'react';
import axios from 'axios';
var KEY='107e71895c9750f469c84fbcee30b4dc5231bd3202dee18471253f16d36904d9';
class App extends Component {
  constructor(props){
    super();
    this.state={
        data:[],
        page:1,
        term:''
    }
    this.loadMore=this.loadMore.bind(this);
  }
  componentDidMount() {
    axios.get('https://api.unsplash.com/photos/?client_id=107e71895c9750f469c84fbcee30b4dc5231bd3202dee18471253f16d36904d9&page='+this.state.page)
   .then(response=>{
    // console.log(response.data);
     this.setState({
       data:response.data
     });
   })
   .catch(error=>{
     console.log(error);
   });
 }
 onInputChange(term){
    axios.get("https://api.unsplash.com/search/photos/?client_id=107e71895c9750f469c84fbcee30b4dc5231bd3202dee18471253f16d36904d9&query="+term+"&page="+this.state.page)
   .then(response=>{
     //console.log(response.data.results);
     this.setState({
       data:response.data.results
     });
   })
   .catch(error=>{
     console.log(error);
   });
   this.setState({term:term});
  }
  loadMore(e){
    let term=this.state.term;
    this.setState({ page: this.state.page + 1 });
    console.log(this.state.page);
    axios.get("https://api.unsplash.com/search/photos/?client_id=107e71895c9750f469c84fbcee30b4dc5231bd3202dee18471253f16d36904d9&query="+term+"&page="+this.state.page)
   .then(response=>{
     console.log(response.data.results);
     let prevdata=this.state.data;
     this.setState({
       data:prevdata.concat(response.data.results)
     });
   })
   .catch(error=>{
     console.log(error);
   });
   console.log(this.state.data);
  }

  render() {
    //console.log("render",this.state.data);
    return (
      <div className="App">
      <div className="row search-bar"style={{textAlign:'center',padding: '10px'}}> <input  onChange={event => this.onInputChange(event.target.value)} /></div>
      <ul className="list list-inline list-unstyled responsive"style={{padding:'10px'}}>
      {this.state.data.map((item)=>{
        return(
        <li style={{border: '1px solid #80808038'}}>
        <img src={item.urls.thumb} className="img-thumbnail"/>
        <p style={{textAlign:'center',padding: '10px'}}>num of Likes:{item.likes}</p>
        <p style={{textAlign:'center',padding: '10px'}}>description:{item.description}</p>
        </li>

      )
      })}
       </ul>
       <div className="row"style={{textAlign:'center'}}><button onClick={this.loadMore}className="btn btn-primary">load more</button></div>
      </div>
    );
  }
}

export default App;
