import React, { Component } from 'react'

export class UserCredentialsForm extends Component {


    continue = (e) => {
        e.preventDefault()
        const { values } = this.props
        const { firstName, lastName, email } = values

        if (firstName !== "" && lastName !== "" && email !== "") {
            this.props.nextStep()
        }

    }

    render() {
        const { values } = this.props
        return (
            <React.Fragment>
                <label>
                    First Name:
                <input type="text" placeholder="First Name" onChange={this.props.handleChange("firstName")} value={values.firstName} />
                </label>
                <label>
                    Last Name:
                <input type="text" placeholder="Last Name" onChange={this.props.handleChange("lastName")} value={values.lastName} />
                </label>
                <label>
                    Email:
                <input type="email" placeholder="email" onChange={this.props.handleChange("email")} value={values.email} />
                </label>
                <button onClick={this.continue}>Continue</button>
            </React.Fragment>
        )
    }
}

export default UserCredentialsForm
