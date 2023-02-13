import React, { Component } from 'react'
import axios from "axios";
import Loading from './Loading';
import { Container, Row, Col, Table} from "reactstrap";

export default class Users extends Component {
    state = {users: [], isLoaded:false};


    usersList(){
        axios
        .request("https://jsonplaceholder.typicode.com/users")
        .then((response) => this.setState({users: response.data}));

        this.setState({isLoaded: true});
    }


    componentDidMount(){
        setTimeout(() => {
            this.usersList();
        }, 3000);
    }
  render() {
    if(this.state.isLoaded){
        return(
            <div>
                <Container class="d-flex justify-content-center min-vh-100">
                    <Row>
                        <Col>
                        <h1>Users List</h1>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>UserName</th>
                                    <th>Website</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.users.map(user => (
                                    <tr>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.website}</td>
                                </tr>
                                ))}
                            </tbody>
                        </Table>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
    return <Loading/>
  }
}
