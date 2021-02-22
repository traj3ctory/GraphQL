import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getBookQuery = gql`{
    books {
        name
        id
    }
}`

/**
* @author traj3ctory
* @class BookList
**/

class BookList extends Component {
 state = {}

 displayBooks() {
     let data = this.props.data;
     if(data.loading){
         return (<div>Loading Books...</div>)
     } else {
         return data.books.map(book => {
             return (
                 <li key={book.id}>{ book.name }</li>
             )
         })
     }
 }
 render() {
  return(
   <>
       <ul id="book-list">
           { this.displayBooks() }
       </ul>
   </>
    )
   }
 }

 export default graphql(getBookQuery)(BookList);