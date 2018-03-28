import ReactDOM from 'react-dom';
import React, { Component, PropTypes } from 'react';
import {
  FacebookShareButton,
} from 'react-social-buttons';
 
export default class TestComponent extends Component {
 
  isBrowser () {
    return !(typeof document === "undefined" || typeof window === "undefined");
  }
 
 render () {
   let url = ''
   if (this.isBrowser()) { url = window.location.href; }
 console.log(url);
   return (
     <div id="buttons">
       <FacebookShareButton url={url} />
     </div>
   )
 }
}
 
ReactDOM.render( <TestComponent />, document.getElementById('root') )