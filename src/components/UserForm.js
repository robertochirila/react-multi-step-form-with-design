import React, { Component } from 'react'
import { UserCredentialsForm } from './UserCredentialsForm'
import { UserPersonalDetailsForm } from './UserPersonalDetailsForm'
import { Confirm } from './Confirm'
import { Success } from './Success'


export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        bio: '',
        occupation: ''
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({ step: step + 1 })
    }

    previousStep = () => {
        const { step } = this.state
        this.setState({ step: step - 1 })
    }

    handleChange = input => (e) => {
        this.setState({ [input]: e.target.value })
    }

    render() {

        const { step } = this.state;
        const { firstName, lastName, email, occupation, age, bio } = this.state;
        const values = { firstName, lastName, email, occupation, age, bio };

        switch (step) {
            case 1:
                return (
                    <UserCredentialsForm
                        nextStep={this.nextStep}
                        previousStep={this.previousStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <UserPersonalDetailsForm
                        nextStep={this.nextStep}
                        previousStep={this.previousStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        previousStep={this.previousStep}
                        handleChange={this.handleChange}
                        values={values}

                    />
                )
            case 4:
                return (
                    <Success />
                )
        }

    }
}

export default UserForm
