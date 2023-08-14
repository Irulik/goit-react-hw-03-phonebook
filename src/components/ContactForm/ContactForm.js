import React, { Component } from "react";
import { Form, FormName, FormNumber, FormButton } from "./ContactForm.styled";

class ContactForm extends Component {
    state = {
        name: "",
        number: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();
        const { name, number } = this.state;
        this.props.onAddContact({ name, number });
        this.setState({ name: "", number: "" });
    };

    render() {
        const { name, number } = this.state;

        return (
            <Form onSubmit={this.handleSubmit}>
                <FormName>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleInputChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces."
                        required
                    />
                </FormName>
                <FormNumber>
                    <label>Number:</label>
                    <input
                        type="tel"
                        name="number"
                        value={number}
                        onChange={this.handleInputChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </FormNumber>
                <FormButton type="submit">Add Contact</FormButton>
            </Form>
        );
    }
}

export default ContactForm;
