import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar' /// top loading bar

export default class App extends Component {
  pageSize= 8;
  // apiKey='e9976df59472494abd9fffbe56f6f8b3'
  apiKey = process.env.REACT_APP_NEWS_API
   state ={
    progress: 0
   }
   setProgress = (progress) =>{
    this.setState({progress : progress})
   }
  render() {
    return (
      <>
        <BrowserRouter>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
        // {onLoaderFinished={() => setProgress(0)}}
      />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News apiKey={this.apiKey}  changeProgress={this.setProgress} key={'general'} pageSize={this.pageSize} country={"in"} category={"general"} heading={'General'}/>} />
            <Route exact path="business" element={<News apiKey={this.apiKey} changeProgress={this.setProgress} key={'business'} pageSize={this.pageSize} country={"in"} category={"business"} heading={'Business'}/>} />
            <Route exact path="entertainment" element={<News apiKey={this.apiKey} changeProgress={this.setProgress} key={'entertainment'} pageSize={this.pageSize} country={"in"} category={"entertainment"} heading={'Entertainment'}/>} />
            <Route exact path="health" element={<News  apiKey={this.apiKey}changeProgress={this.setProgress} key={'health'} pageSize={this.pageSize} country={"in"} category={"health"} heading={'Health'}/>} />
            <Route exact path="science" element={<News  apiKey={this.apiKey}changeProgress={this.setProgress} key={'science'} pageSize={this.pageSize} country={"in"} category={"science"} heading={'Science'}/>} />
            <Route exact path="sports" element={<News  apiKey={this.apiKey}changeProgress={this.setProgress} key={'sports'} pageSize={this.pageSize} country={"in"} category={"sports"}heading={'Sports'} />} />
            <Route exact path="technology" element={<News apiKey={this.apiKey} changeProgress={this.setProgress} key={'technology'} pageSize={this.pageSize} country={"in"} category={"technology"} heading={'Technology'}/>} />
            

          </Routes>
        </BrowserRouter>
      </>
    );
  }

}
