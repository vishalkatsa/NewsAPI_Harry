import React, { Component } from 'react'
import Newsitem from './Newsitem'
// import Loding from './Loding';
import  PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

  // static defaultProps = {
  //   country: 'in',
  //   pageSize: 8,
  //   category: 'general',
  //   heading: 'general'
  // }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    heading: PropTypes.string,
  }
  
  async Update(){
    this.props.changeProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    // this.setState({loading: true});
    this.props.changeProgress(30)

    let data = await fetch(url);
    this.props.changeProgress(40)

    let parseData = await data.json();
    this.props.changeProgress(60)

    this.setState({
      articles: parseData.articles , 
      totalResults: parseData.totalResults,
      // loading: false
    }) // then send data in parseData variables 
    // this.setState({});
    this.props.changeProgress(100)

  }
  constructor(props){
    super(props);
    this.state ={
      articles: [],
      loading: false,
      totalResults: 0,
      page: 1,
    }
    document.title = `${this.firstLatterCapitel(this.props.category)} - Go News`;

  }
  firstLatterCapitel = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  async componentDidMount(){ 
  
    this.Update()
    
  }
  fetchMoreData = async () => { //scroll bar 
    this.props.changeProgress(10)

    this.setState({page: this.state.page + 1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    // this.setState({loading: true});
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles:this.state.articles.concat(parseData.articles) , 
      totalResults: parseData.totalResults,
      // loading: false

    }) // then send data in parseData variables 
    // this.setState({});
    console.log(this.props.apiKey);
    this.props.changeProgress(100)

  };
  
  // hanClickPrevious = async () =>{
    
  //   this.setState({
  //     page:this.state.page - 1,
  //   });
  //   this.Update()
  // }
 

  // hanClickNext = async () =>{
    
  //   this.setState({
  //     page:this.state.page + 1,
  //   });
  //   this.Update()
    
  // }
  render() {
    return (
      <>
      
      
                <h1 className='text-center font-bold text-4xl'>{`${this.props.heading} Go News`}</h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={'loading...'} 
        >    
            <div className='container '>
                <div className='row '>
                      {!this.state.loading && this.state.articles.map((element,index)=>{ /// json format data map and display on html page 
                          return <div className='col-md-3 py-3' key={index}> <Newsitem title={element.title?element.title.slice(0,42): ""} Discription={element.description?element.description.slice(0,88):""} Imageurl={element.urlToImage} newsurl={element.url} authorName={element.author} DateTime={element.publishedAt}/> </div>
                      })}
                        {/* {this.state.loading && <Loding/>} */}
                </div>
                      {/* <div className='container flex justify-between'>
                          <button disabled={this.state.page<=1} onClick={this.hanClickPrevious} type="button" className="btn btn-info">&larr; Previous</button>
                          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}onClick={this.hanClickNext} type="button" className="btn btn-warning">Next &rarr;</button>
                      </div> */}
            </div>
          </InfiniteScroll>
      
       
      </>
    )
  }
}

export default News
