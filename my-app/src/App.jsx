import React from "react";

class App extends React.Component {
    state = {
        username: '',
        password: '',
        comment: '',
        remember: true,
        color: 'green',
        sex: 'f'
    }

    handleChange = (event) => {
        const {
            name, value, type, checked
        } = event.target;
        this.setState({
            [name]: type === 'checkbox'
                ? checked
                : value
        })
    }

    render() {
        return (
            <div className="App">
                <h1>Mate academy</h1>

                <form onSubmit={(event) => {
                    event.preventDefault()
                    console.log(this.state)
                }}>
                    <div>
                        <label htmlFor="sex_m">Male</label>
                        <input
                            type="radio"
                            name="sex"
                            id="sex_m"
                            value="m"
                            checked={this.state.sex === 'm'}
                            onChange={this.handleChange}
                        />

                        <label htmlFor="sex_f">Female</label>
                        <input
                            type="radio"
                            name="sex"
                            id="sex_f"
                            value="f"
                            checked={this.state.sex === 'f'}
                            onChange={this.handleChange}
                        />
                    </div>
                    <select
                        name="color"
                        value={this.state.color}
                        onChange={this.handleChange}
                    >
                        <option value="">
                            Choose a color
                        </option><option value="red">
                            Red
                        </option>
                        <option value="green">
                            Green
                        </option>
                        <option value="blue">
                            Blue
                        </option>
                    </select>
                    <input
                        type="checkbox"
                        id="remember"
                        name="remember"
                        checked={this.state.remember}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="remember">
                        Remember me
                    </label>
                    <textarea
                        name="comment"
                        value={this.state.comment}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />

                    <button type="submit">Sign in</button>
                </form>
            </div>
        )
    }

}

export default App;
