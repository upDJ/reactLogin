import React from 'react';



class Initialize extends React.Component {
    constructor() {
        super();
        this.state = { response: false };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:5000/db/init')
            .then(res => res.status ? this.setState({ response: true }) : null)
            .catch(err => console.log(err), this.setState({ response: false }))
    }

    render() {
        return (
            <div>
                <button onClick={this.handleSubmit}>Initialize Db</button>
                {this.state.response ? <p>Sucessfully Initialized Database</p> : null}
            </div>

        );
    }
}

export default Initialize;