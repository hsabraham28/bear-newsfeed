import React from 'react';
import { Component } from 'react';
import { MDBFormInline } from "mdbreact";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';
import news from './newsimage.jpg';

console.log(news);


class Posts extends Component {
  render() {
    return (
    <div className="postArea">

      <h1>
      Recent Posts
      </h1>
      
      

 <div className="result-section">
  <div className="rowOne">      
 <MDBRow>
      <MDBCol md='2' className="carded">
      
        <MDBCard wide cascade>
        <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>Title</strong>
            </MDBCardTitle>



            <MDBCol md='12' className='d-flex justify-content-center'>
              
            </MDBCol>
          </MDBCardBody>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-bottom'
              src={news}
              alt='Card cap'
            />

          </MDBView>

          
        </MDBCard>
      </MDBCol>

      <MDBCol md='2' className="carded">
        <MDBCard wide cascade>
        <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>Title</strong>
            </MDBCardTitle>



            <MDBCol md='12' className='d-flex justify-content-center'>
              
            </MDBCol>
          </MDBCardBody>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-bottom'
              src={news}
              alt='Card cap'
            />

          </MDBView>

          
        </MDBCard>
      </MDBCol>

      <MDBCol md='2' className="carded">
        <MDBCard wide cascade>
        <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>Title</strong>
            </MDBCardTitle>



            <MDBCol md='12' className='d-flex justify-content-center'>
              
            </MDBCol>
          </MDBCardBody>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-bottom'
              src={news}
              alt='Card cap'
            />

          </MDBView>

          
        </MDBCard>
      </MDBCol>

      <MDBCol md='2' className="carded">
        <MDBCard wide cascade>
        <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>Title</strong>
            </MDBCardTitle>



            <MDBCol md='12' className='d-flex justify-content-center'>
              
            </MDBCol>
          </MDBCardBody>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-bottom'
              src={news}
              alt='Card cap'
            />

          </MDBView>

          
        </MDBCard>
      </MDBCol>

      <MDBCol md='2' className="carded">
        <MDBCard wide cascade>
        <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>Title</strong>
            </MDBCardTitle>



            <MDBCol md='12' className='d-flex justify-content-center'>
              
            </MDBCol>
          </MDBCardBody>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-bottom'
              src={news}
              alt='Card cap'
            />

          </MDBView>

          
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </div>

<div className="rowTwo">  
    <MDBRow>
      <MDBCol md='2' className="carded">
        <MDBCard wide cascade>
        <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>Title</strong>
            </MDBCardTitle>



            <MDBCol md='12' className='d-flex justify-content-center'>
              
            </MDBCol>
          </MDBCardBody>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-bottom'
              src={news}
              alt='Card cap'
            />

          </MDBView>

          
        </MDBCard>
      </MDBCol>

      <MDBCol md='2' className="carded">
        <MDBCard wide cascade>
        <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>Title</strong>
            </MDBCardTitle>



            <MDBCol md='12' className='d-flex justify-content-center'>
              
            </MDBCol>
          </MDBCardBody>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-bottom'
              src={news}
              alt='Card cap'
            />

          </MDBView>

          
        </MDBCard>
      </MDBCol>

      <MDBCol md='2' className="carded">
        <MDBCard wide cascade>
        <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>Title</strong>
            </MDBCardTitle>



            <MDBCol md='12' className='d-flex justify-content-center'>
              
            </MDBCol>
          </MDBCardBody>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-bottom'
              src={news}
              alt='Card cap'
            />

          </MDBView>

          
        </MDBCard>
      </MDBCol>

      <MDBCol md='2' className="carded">
        <MDBCard wide cascade>
        <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>Title</strong>
            </MDBCardTitle>



            <MDBCol md='12' className='d-flex justify-content-center'>
              
            </MDBCol>
          </MDBCardBody>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-bottom'
              src={news}
              alt='Card cap'
            />

          </MDBView>

          
        </MDBCard>
      </MDBCol>

      <MDBCol md='2' className="carded">
        <MDBCard wide cascade>
        <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>Title</strong>
            </MDBCardTitle>



            <MDBCol md='12' className='d-flex justify-content-center'>
              
            </MDBCol>
          </MDBCardBody>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-bottom'
              src={news}
              alt='Card cap'
            />

          </MDBView>

          
        </MDBCard>
      </MDBCol>
    </MDBRow>
      </div>

   </div>



      </div>


      );
  }
}


export default Posts;
