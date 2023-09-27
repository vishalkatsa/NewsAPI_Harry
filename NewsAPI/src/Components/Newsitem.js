import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title , Discription , Imageurl , newsurl} =this.props
    return (
    <>
<div className="card " style={{width: "18rem"}}>
        <img  src={Imageurl?Imageurl : "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2023/09/25/2608954-mukesh-ambani.jpg" } className="card-img-top h-40" alt="..."/>
      <div className="card-body">
      <strong>  <h5 className="card-title">{title}...</h5> </strong>
        <p className="card-text">{Discription}...</p>
        <a href={newsurl} target='_blank' rel="noreferrer" className="btn btn-primary">Go somewhere</a>
      </div>
</div>
     </>
    )
  }
}

export default Newsitem
