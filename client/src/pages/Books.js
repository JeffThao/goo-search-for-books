import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  // const [formObject, setFormObject] = useState({})
  const [userInput, setuserInput] = useState("");

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])


  const handleInputChange = event => {
    const { value } = event.target;
    setuserInput(value);
  };


  const handleFormSubmit = event => {
    event.preventDefault();
    API.findBook(userInput)
      .then(res => setBooks(res.data.items))
      .catch(err => console.log(err));
  };

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md">
            <form>
              <h4>Book Search</h4>
              <Input
                name="bookSearch"
                value={userInput}
                onChange={handleInputChange}
                placeholder="Search For a Book by title"
              
              />
              <FormBtn
                onClick={handleFormSubmit}
              >
                Submit Book
              </FormBtn>

            </form>

            <div>
              {books.map((currentbooks) => (
              <tr key={currentbooks.id} style={{marginLeft: 5}}>
                <th scope="row">
                </th>
                <td><img className="bookImg" src={currentbooks.volumeInfo.imageLinks.smallThumbnail} style={{paddingTop: 20}}/></td>
                <td >
                  {currentbooks.volumeInfo.title}
                  <button className="btn saveBtn"
                   onClick={saveBook(currentbooks.id)}
                  >Save</button>
                   <tr>{currentbooks.volumeInfo.authors}</tr>
              
              <tr>{currentbooks.volumeInfo.description}</tr>
                </td>
              </tr>
              ))}</div>

          </Col>
        </Row>
      </Container>
    );
  }

export default Books;
