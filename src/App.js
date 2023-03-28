import React, { Component } from "react";
import formatNumber from "format-number";
import photographer from "./images/girl.png";
import "./App.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { accountActions } from "./actions/accountActions";

class App extends Component {
state = {
      username: 'swetha'
    };
  
  componentDidMount() {
    this.props.actions.getBalances();
  }

 handleDecrement=(e) => {
    this.props.actions.reduceBalance(
      this.props.balance.amount,
      e.target.dataset.amount
    )
  };

  render() {
    const { username } = this.state;
    const { amount: totalAmount } = this.props.balance;

    return (
      <div className="App">
        <img className="App__userpic" src={photographer} alt="user" />
        <p className="App__username">Hello, {username}! </p>
        <div className="App__amount">
          {formatNumber({ prefix: "$" })(totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>
        <section className="App__buttons">
          <button data-amount={10000} onClick={this.handleDecrement}>
            WITHDRAW $10,000
          </button>
          <button data-amount={5000} onClick={this.handleDecrement}>
            WITHDRAW $5,000
          </button>
        </section>
        <p className="App__giveaway">Give away all your cash to charity</p>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
  balance: state.account
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(accountActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
