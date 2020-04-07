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
            <React.Fragment>
                <label>
                    Age:
                <input type="text" placeholder="Age" onChange={this.props.handleChange("age")} value={values.age} />
                </label>
                <label>
                    Occupation:
                <input type="text" placeholder="Occupation" onChange={this.props.handleChange("occupation")} value={values.occupation} />
                </label>
                <label>
                    Bio:
                <input type="text" placeholder="Bio" onChange={this.props.handleChange("bio")} value={values.bio} />
                </label>
                <button onClick={this.continue}>Continue</button>
                <button onClick={this.back}>Back</button>

            </React.Fragment>
        )
    }
}

export default UserPersonalDetailsForm
