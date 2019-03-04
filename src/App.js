import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class ErrorWrap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null
        };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error: error, errorInfo: errorInfo });
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <div>
                    <h1>Oops something went wrong</h1>
                    <details style={{ whiteSpace: "pre-wrap" }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }
        return this.props.children;
    }
}

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

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
                </header>
                <button className="app-button" onClick={this.handleClick}>
                    Click 5 times to generate an Error
                </button>
            </div>
        );
    }
}
function App() {
    return (
        <ErrorWrap>
            <Counter />
        </ErrorWrap>
    );
}
export default App;
