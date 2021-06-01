import { Component } from 'react';
import Contacts from '../Pages/Contacts';

class App extends Component {
  render() {
    return (
      // <div className={styles.container}>
      //   <h1 className={styles.headTitle}>Phonebook</h1>
      //   <ContactForm />
      //   <h2 className={styles.title}>Contacts</h2>
      //   <ContactList />
      // </div>
      <Contacts />
    );
  }
}

export default App;
