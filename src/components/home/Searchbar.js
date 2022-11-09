import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default class Searchbar extends Component {
  constructor() {
    super();
    this.state = {
      filteredData: []
    }
  }

  render() {


    // const [filteredData, setFiltered] = useState([]);
    const handleFilter = (event) => {
      const searchWord = event.target.value
      const newFilter = this.state.data.filter((value) => {
        return value.title.toLowerCase().includes(searchWord.toLowerCase());
      });

      if (searchWord === "") {
        this.setState({ filteredData: [] })
      } else {
        this.setState({ filteredData: newFilter });
      }
    };

    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Search for a song. </Form.Label>
          <Form.Control type="input" placeholder="Enter Song Name" onChange={handleFilter} />
          <Form.Text className="text-muted">
            Powered by Spotify ©
          </Form.Text>
          {this.state.filteredData.length !== 0 && (
            <div className='dataResults'>
              {this.state.filteredData.slice(0, 15).map((value, key) => {
                return <a className='dataItem' href={value.link} target="_blank">
                  <p>{value.title}</p>
                </a>
              })}
            </div>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Artist / Band Name</Form.Label>
          <Form.Control type="input" placeholder="Enter Artist / Band Name" />
          <Form.Text className="text-muted">
            Powered by Spotify ©
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Form.Group className="mb-3" ></Form.Group>
      </Form>
    );
  }
};