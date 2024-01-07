import React, { Component } from 'react'
import Swal from 'sweetalert2';
import UserService from '../services/UserService'

class ListUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                users: [],
                search: ''
        }
        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.searchChange = this.searchChange.bind(this);
        this.searchSubmit = this.searchSubmit.bind(this);
    }

    deleteUser(id){
        UserService.deleteUser(id).then( res => {
            Swal.fire({
                title: "Anda Yakin?",
                text: "Nasi sudah menjadi bubur!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Ya, Hapus Saja!"
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "Dihapus!",
                    text: "Data telah dihapus.",
                    icon: "success"
                  });
                }
              });
            this.setState({users: 
                this.state.users.filter(user => user.id !== id)});
        });
    }
    viewUser(id){
        this.props.history.push(`/view-user/${id}`);
    }
    editUser(id){
        this.props.history.push(`/add-user/${id}`);
    }

    componentDidMount(){
        UserService.getUsers().then((res) => {
            if(res.data==null)
            {
                this.props.history.push('/add-user/_add');
            }
            this.setState({ users: res.data});
        });
    }

    addUser(){
        this.props.history.push('/add-user/_add');
    }

    searchChange(event){
        this.setState({ search: event.target.value });
    }

    searchSubmit(event){
        event.preventDefault();
        const searchResults = this.state.users.filter(
            (user) =>
            user.receiver.toLowerCase().includes(this.state.search.toLowerCase())
        );
        this.setState({ users: searchResults });
    }

    render() {
        return (
          <div>
            <h2 className="text-center text-white">Catatan Keuangan</h2>
            <div className="row mb-3">
              <button className="btn btn-primary" onClick={this.addUser}>
                {" "}
                Add User
              </button>
            </div>
            <br></br>
            <form
              onSubmit={this.searchSubmit}
              className="position-absolute top-0 translate-middle-x"
            >
              <div className="row g-3">
                <div className="col-auto">
                  <input
                    name="search"
                    type="search"
                    className="form-control p-2"
                    autoComplete="off"
                    placeholder="Masukan Nama"
                    value={this.state.search}
                    onChange={this.searchChange}
                  />
                </div>
                <div className="col-auto">
                  <button
                    onClick={this.searchSubmit}
                    name="cari"
                    type="submit"
                    className="btn btn-dark text-white"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
            <br></br>
            <br></br>
            <div className="row">
              <table className="table table-striped table-bordered table-light">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Receiver</th>
                    <th>Jenis Kelamin</th>
                    <th>No Telepon</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.date}</td>
                      <td>{user.description}</td>
                      <td>{user.amount}</td>
                      <td>{user.status}</td>
                      <td>{user.receiver}</td>
                      <td>{user.jk}</td>
                      <td>{user.no_telp}</td>
                      <td>{user.address}</td>
                      <td>
                        <td>
                          <button
                            onClick={() => this.editUser(user.id)}
                            className="btn btn-primary"
                          >
                            Update
                          </button>
                        </td>
                        <td>
                          <button
                            style={{ marginLeft: "10px" }}
                            onClick={() => this.deleteUser(user.id)}
                            className="btn btn-danger"
                          >
                            Delete
                          </button>
                        </td>
                        <td>
                          <button
                            style={{ marginLeft: "10px" }}
                            onClick={() => this.viewUser(user.id)}
                            className="btn btn-info"
                          >
                            View
                          </button>
                        </td>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
    }
}

export default ListUserComponent
