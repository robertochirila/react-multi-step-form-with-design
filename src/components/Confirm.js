import React, { Component } from 'react'

export class Confirm extends Component {
    continue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }
    render() {
        const { values } = this.props
        return (
            <React.Fragment>
                <h3>Please confirm the data below</h3>
                <label>
                    First Name:
                <h4>{values.firstName}</h4>
                </label>
                <label>
                    Last Name:
                <h4>{values.lastName}</h4>
                </label>
                <label>
                    Email:
                <h4>{values.email}</h4>
                </label>
                <label>
                    Age:
                <h4>{values.age}</h4>
                </label>
                <label>
                    Bio:
                <h4>{values.bio}</h4>
                </label>
                <label>
                    Occupation:
                <h4>{values.occupation}</h4>
                </label>
                <button onClick={this.continue} className="button--form">Confirm</button>
            </React.Fragment>
        )
    }
}

export default Confirm
