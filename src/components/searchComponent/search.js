import React from 'react';
import { Component } from 'react';
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";


class Search extends Component {
  render() {
    return (

      
      <div className="searchSpace">
      <div className="searchbar">
      <MDBCol md="4">
      <MDBFormInline className="md-form">
        <input className="form-control form-control-lg ml-5 w-50" type="text" placeholder="Club Name" aria-label="Search" />
        <div className="sicon">
      <button type="button" className="btn-light">Search</button>
      </div>
      </MDBFormInline>
      </MDBCol>
      </div>
</div>

      );
  }
}


export default Search;
