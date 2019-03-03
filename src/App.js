import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class ErrorWrap extends Component {
    state = {
        error: null,
        errorInfo: null
    };
    componentDidCatch(error, errorInfo) {
        this.setState({ error: error, errorInfo: errorInfo });
    }

    render() {
        if (this.state.errorInfo) {
            return <h1>Oops something went wrong</h1>;
        }
        return this.props.children;
    }
}

class Counter extends Component {
    state = {
        count: 0,
        hasError: false
    };

    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    render() {
        if (this.state.count === 5) {
            throw new Error("I crashed");
        }
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>{this.state.count}</p>
                    <button className="app-button" onClick={this.handleClick}>
                        Click 5 times to generate an Error
                    </button>
                </header>
            </div>
        );
    }
}
function App() {
    return (
        <div>
            <ErrorWrap>
                <p>Sample Error boundary</p>
                <Counter />
            </ErrorWrap>
        </div>
    );
}
export default App;
