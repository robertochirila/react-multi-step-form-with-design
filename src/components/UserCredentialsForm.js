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
            <div className="wrapper">
                <label className="label--form">
                    First Name:
                <input type="text" placeholder="First Name" onChange={this.props.handleChange("firstName")} value={values.firstName} className="input--form" />
                </label>
                <label className="label--form">
                    Last Name:
                <input type="text" placeholder="Last Name" onChange={this.props.handleChange("lastName")} value={values.lastName} className="input--form" />
                </label>
                <label className="label--form">
                    Email:
                <input type="email" placeholder="Email" onChange={this.props.handleChange("email")} value={values.email} className="input--form" />
                </label>
                <button onClick={this.continue} className="button--form">Continue</button>
            </div>
        )
    }
}

export default UserCredentialsForm
