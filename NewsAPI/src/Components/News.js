import React, { Component } from 'react'
import Newsitem from './Newsitem'
// import { wait } from '@testing-library/user-event/dist/utils';

export class News extends Component {

  constructor(){
    super();
    this.state ={
      articles: [],
      loading: false,
      page: 1,
    }
  }
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=b5ecd8824475473ca1adbfd02f47fddb&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({articles: parseData.articles , totalResults: parseData.totalResults})
  }

  
  hanClickPrevious = async () =>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=b5ecd8824475473ca1adbfd02f47fddb&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    let parseData = await data.json();

    this.setState({
      page:this.state.page - 1,
      articles: parseData.articles,
    })
  }
 

  hanClickNext = async () =>{
    
    if (this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)) {
      console.log("vishal");
      alert('News Tata Bye Bye')
    }
    else{
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=b5ecd8824475473ca1adbfd02f47fddb&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
      let data = await fetch(url);
      let parseData = await data.json();
  
      this.setState({
        page:this.state.page + 1,
        articles: parseData.articles,
  
      })
    }
    
  }
  render() {
    return (
      <>
       <div className='container my-5 '>
          <div className='row '>
            {this.state.articles.map((element)=>{
      return <div className='col-md-3 py-3' key={element.url}> <Newsitem title={element.title?element.title.slice(0,42): ""} Discription={element.description?element.description.slice(0,88):""} Imageurl={element.urlToImage} newsurl={element.url}/> </div>
            })}
              
          </div>
                <div className='container flex justify-between'>
                    <button disabled={this.state.page<=1} onClick={this.hanClickPrevious} type="button" className="btn btn-info">&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}onClick={this.hanClickNext} type="button" className="btn btn-warning">Next &rarr;</button>
                </div>
       </div>
       
      </>
    )
  }
}

export default News
