import { Component } from 'react';

import { GlobalStyle } from './GlobalStyle';
import { Layout } from './GlobalStyle/Layout/Layout.styled';

import { Section } from './Section';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';

export class App extends Component {
  static defaultProps = {
    initialContacts: [],
  };

  state = {
    contacts: this.props.initialContacts,
  };

  addContact = e => {
    e.preventDefault();
  };

  render() {
    return (
      <Layout>
        <Section title="Phonebook">
          <ContactForm add={this.addContact} />
        </Section>
        {this.state.contacts.length > 0 && (
          <Section title="Contacts">
            <ContactList contacts={this.state.contacts} />
          </Section>
        )}

        <GlobalStyle />
      </Layout>
    );
  }
}
