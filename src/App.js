import React, { Component } from "react";
import Container from "./components/Container";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

class App extends Component {
  // componentDidMount() {
  //   const localContacts = JSON.parse(localStorage.getItem("contacts"));

  //   if (localContacts) {
  //     this.setState({ contacts: [...localContacts] });
  //   }
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   const prevContacts = prevProps.contacts;
  //   const nextContacts = this.props.contacts;

  //   if (prevContacts !== nextContacts) {
  //     console.log("обновилось поле ");
  //     localStorage.setItem("contacts", JSON.stringify(nextContacts));
  //   }
  // }

  render() {
    return (
      <div className="App">
        <Container>
          <h1>Phonebook</h1>
          <ContactForm />
          <div>
            <h2>Contacts</h2>
            <Filter />
            <ContactList />
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
