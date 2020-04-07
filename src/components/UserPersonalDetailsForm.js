import React, { Component } from 'react'

export class UserPersonalDetailsForm extends Component {

    continue = (e) => {
        e.preventDefault()
        const { values } = this.props
        const { age, occupation, bio } = values

        if (age !== "" && occupation !== "" && bio !== "") {
            this.props.nextStep()
        }

    }
    back = (e) => {
        e.preventDefault()
        this.props.previousStep()
    }

    render() {
        const { values } = this.props

        return (
            <div className="wrapper">
                <label className="label--form">
                    Age:
                <input type="text" placeholder="Age" onChange={this.props.handleChange("age")} value={values.age} className="input--form" />
                </label>
                <label className="label--form">
                    Occupation:
                <input type="text" placeholder="Occupation" onChange={this.props.handleChange("occupation")} value={values.occupation} className="input--form" />
                </label>
                <label className="label--form">
                    Bio:
                <input type="text" placeholder="Bio" onChange={this.props.handleChange("bio")} value={values.bio} className="input--form" />
                </label>
                <button onClick={this.continue} className="button--form">Continue</button>
                <button onClick={this.back} className="button--form">Back</button>
            </div>
        )
    }
}

export default UserPersonalDetailsForm
