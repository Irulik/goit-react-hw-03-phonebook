import React, { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";

class App extends Component {
    state = {
        contacts: [
            { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
            { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
            { id: "id-3", name: "Eden Clements", number: "645-17-79" },
            { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
        ],
        filter: "",
        name: "",
        number: ""
    };

 componentDidMount() {
        const contactsFromLocalStorage = localStorage.getItem("contactList");
        const parsedContacts = JSON.parse(contactsFromLocalStorage);

        if (parsedContacts) {
           this.setState({ contacts: parsedContacts });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const prevStateContacts = prevState.contacts;
        const nextStateContacts = this.state.contacts;

        if (prevStateContacts !== nextStateContacts) {
            localStorage.setItem("contactList", JSON.stringify(nextStateContacts));
        }
    }


    handleAddContact = newContact => {
        const { name, number } = newContact;
        const contactsList = [...this.state.contacts];

        if (contactsList.some(contact => contact.name === name)) {
            alert(`${name} is already in contacts.`);
        } else {
            const newContactItem = { id: nanoid(), name, number };
            contactsList.push(newContactItem);
            this.setState({ contacts: contactsList });
        }
    };

    handleDeleteContact = contactId => {
        const updatedContacts = this.state.contacts.filter(
            contact => contact.id !== contactId
        );
        this.setState({ contacts: updatedContacts });
    };

    handleFilterChange = filterValue => {
        this.setState({ filter: filterValue });
    };

    getFilteredContacts = () => {
        return this.state.contacts.filter(contact =>
            contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
        );
    };

    render() {
        const filteredContacts = this.getFilteredContacts();

        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 20,
                    color: "#010101"
                }}
            >
                <h1>Phonebook</h1>
                <ContactForm onAddContact={this.handleAddContact} />
                <h2>Contacts</h2>
                <Filter
                    value={this.state.filter}
                    handleChange={this.handleFilterChange}
                />
                <ContactList
                    contacts={filteredContacts}
                    handleDelete={this.handleDeleteContact}
                />
            </div>
        );
    }
}

export default App;
