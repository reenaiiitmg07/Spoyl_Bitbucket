import React, { Component } from 'react';
import axios from 'axios';
import {getImageData} from './action/index';
import {getTermImageData} from './action/index';
import {connect} from 'react-redux';
var KEY = '107e71895c9750f469c84fbcee30b4dc5231bd3202dee18471253f16d36904d9';
class App extends Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
      page: 1,
      term: ''
    }
    this.loadMore = this.loadMore.bind(this);
  }
  componentDidMount() {
    this.props.getImageData(1);
  }

  onInputChange(term) {
    let page=this.state.page;
    this.setState({term})
    this.props.getTermImageData(term,page)
  }
  loadMore(e) {
    let term = this.state.term;
    let page=this.state.page;
    page=page+1;
    if(term){
      this.props.getTermImageData(term,page)
    }
    else{
      this.props.getImageData(this.state.page);
    }
    this.setState({ page});


  }

  render() {
    return (
      <div className="App">
        <div className="row search-bar" style={{ textAlign: 'center', padding: '10px' }}> <input onChange={event => this.onInputChange(event.target.value)} /></div>
        <ul className="list list-inline list-unstyled responsive" style={{ padding: '10px' }}>
          {this.props.data.map((item) => {
            return (
              <li style={{ border: '1px solid #80808038' }}>
              <div className="card">
                <img src={item.urls.thumb} className="card-img-top img-thumbnail"style={{width:'200px',height:'150px'}} />
                <div class="card-body">
                <h3 style={{ textAlign: 'center', padding: '10px' }}className="card-title">num of Likes:{item.likes}</h3>
                <p style={{ textAlign: 'center', padding: '10px',wordWrap:'break-word',width:'200px'}}>description:{item.description}</p>
              </div>
            </div>
          </li>
            )
          })}
        </ul>
        <div className="row" style={{ textAlign: 'center' }}><button onClick={this.loadMore} className="btn btn-primary">load more</button></div>
      </div>
    );
  }
}

function mapStateToProps(state){
console.log(state)
  return{
    data:state.data
  }

}
export default connect(mapStateToProps,{getImageData,getTermImageData})(App);
