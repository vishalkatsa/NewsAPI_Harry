import React, { Component } from 'react'
export class Newsitem extends Component {
  render() {
    let {title , Discription , Imageurl , newsurl ,authorName ,DateTime} =this.props;

    const convertTo12HourFormat = (hours) => {
      return (hours % 12 || 12).toString(); // 0 should be converted to 12
    };
    
    // Function to get AM/PM
    
    return (
    <>
<div className="card  " >
        <img  src={Imageurl?Imageurl : "https://images.cnbctv18.com/wp-content/uploads/2023/05/alexander-grey-8lnbXtxFGZw-unsplash-1019x573.jpg" } className="card-img-top h-40" alt="..."/>
      <div className="card-body">
      <strong>  <h5 className="card-title">{title}...</h5> </strong>
        <p className="card-text">{Discription}...</p>
        <p className="card-text text-muted">{authorName} <strong>Date:</strong> {new Date(DateTime).getDate()}<span>/{new Date(DateTime).getMonth()}</span> <span>/{new Date(DateTime).getFullYear()} </span> <span> <strong>Time</strong>{convertTo12HourFormat(new Date(DateTime).getHours())}</span>:<span>{new Date(DateTime).getMinutes()}</span> </p>
        <a href={newsurl} target='_blank' rel="noreferrer" className="btn btn-primary">Go somewhere</a>
        
      </div>
</div>
     </>
    )
  }
}

export default Newsitem
