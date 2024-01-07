import React, { Component } from "react";
import Swal from 'sweetalert2';
import UserService from "../services/UserService";

class CreateUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // step 2
      id: this.props.match.params.id,
      date: "",
      description: "",
      amount: "",
      status: "",
      receiver: "",
      jk: "",
      no_telp: "",
      address: "",
    };
    this.changeDate = this.changeDate.bind(this);
    this.changeDesc = this.changeDesc.bind(this);
    this.changeAmount = this.changeAmount.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeReceiver = this.changeReceiver.bind(this);
    this.changeJk = this.changeJk.bind(this);
    this.changeNoTelp = this.changeNoTelp.bind(this);
    this.changeAddress = this.changeAddress.bind(this);
    this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
  }

  // step 3
  componentDidMount() {
    // step 4
    if (this.state.id === "_add") {
      return;
    } else {
      UserService.getUserById(this.state.id).then((res) => {
        let user = res.data;
        this.setState({
            date: user.date,
            description: user.description,
            amount: user.amount,
            status: user.status,
            receiver: user.receiver,
            jk: user.jk,
            no_telp: user.no_telp,
            address: user.address,
        });
      });
    }
  }
  saveOrUpdateUser = (e) => {
    e.preventDefault();
    let user = {
        date: this.state.date,
        description: this.state.description,
        amount: this.state.amount,
        status: this.state.status,
        receiver: this.state.receiver,
        jk: this.state.jk,
        no_telp: this.state.no_telp,
        address: this.state.address,
    };
    console.log("user => " + JSON.stringify(user));

    // step 5
    if (this.state.id === "_add") {
      UserService.createUser(user).then((res) => {
        Swal.fire({
          title: "Good job!",
          text: "Data telah dimasukan!",
          icon: "success"
        });
        this.props.history.push("/users");
      });
    } else {
      UserService.updateUser(user, this.state.id).then((res) => {
        Swal.fire({
          title: "Good job!",
          text: "Data telah diperbaharui!",
          icon: "success"
        });
        this.props.history.push("/users");
      });
    }
  };

  changeDate = (event) => {
    this.setState({ date: event.target.value });
  };

  changeDesc = (event) => {
    this.setState({ description: event.target.value });
  };

  changeAmount = (event) => {
    this.setState({ amount: event.target.value });
  };

  changeStatus = (event) => {
    this.setState({ status: event.target.value });
  };

  changeReceiver = (event) => {
    this.setState({ receiver: event.target.value });
  };

  changeJk= (event) => {
    console.log(event.target.value);
    this.setState({ jk: event.target.value });
  };

  changeNoTelp= (event) => {
    this.setState({ no_telp: event.target.value });
  };

  changeAddress= (event) => {
    this.setState({ address: event.target.value });
  };

  cancel() {
    this.props.history.push("/users");
  }

  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center">Add Mahasiswa</h3>;
    } else {
      return <h3 className="text-center">Update Pengguna</h3>;
    }
  }
  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Date: </label>
                    <input
                      type="date"
                      placeholder="Date"
                      name="Date"
                      className="form-control"
                      value={this.state.date}
                      onChange={this.changeDate}
                    />
                  </div>
                  <div className="form-group">
                    <label> Description: </label>
                    <input
                      placeholder="Description"
                      name="Descrription"
                      className="form-control"
                      value={this.state.description}
                      onChange={this.changeDesc}
                    />
                  </div>
                  <div className="form-group">
                    <label> Amount: </label>
                    <input
                      placeholder="Amount"
                      name="Amount"
                      className="form-control"
                    value={this.state.amount}
                      onChange={this.changeAmount}
                    />
                  </div>
                  <div className="form-group">
                    <label> Status: </label>
                    <select
                      name="Status"
                      className="form-control"
                      value={this.state.status}
                      onChange={this.changeStatus}
                    >
                      <option value="kredit">kredit</option>
                      <option value="debit">debit</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label> Receiver: </label>
                    <input
                      placeholder="Receiver"
                      name="Receiver"
                      className="form-control"
                      value={this.state.receiver}
                      onChange={this.changeReceiver}
                    />
                  </div>
                  <div className="form-group">
                    <label> Jenis Kelamin: </label>
                    <select
                      name="jk"
                      className="form-control"
                      value={this.state.jk}
                      onChange={this.changeJk}
                    >
                      <option value="laki">laki</option>
                      <option value="perempuan">perempuan</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label> No Telepon: </label>
                    <input
                      placeholder="No Telp"
                      name="No Telp"
                      className="form-control"
                      value={this.state.no_telp}
                      onChange={this.changeNoTelp}
                    />
                  </div>
                  <div className="form-group">
                    <label> Address: </label>
                    <input
                      placeholder="address"
                      name="address"
                      className="form-control"
                      value={this.state.address}
                      onChange={this.changeAddress}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdateUser}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateUserComponent;
