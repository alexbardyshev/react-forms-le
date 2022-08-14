import React from "react";

class App extends React.Component {
    state = {
        username: '',
        password: '',
    }
    render() {
        return (
            <div className="App">
                <h1>Mate academy</h1>

                <form onSubmit={(event) => {
                    event.preventDefault()
                    console.log(this.state)
                }}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={(event) => {
                            this.setState({ username: event.target.value })
                        }}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={(event) => {
                            this.setState({ password: event.target.value })
                        }}
                    />

                    <button type="submit">Sign in</button>
                </form>
            </div>
        )
    }

}

export default App;
