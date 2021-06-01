import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import styles from './Contacts.module.css';
import { operations } from '../redux/contacts';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';

const Contacts = () => {
  const dispatch = useDispatch(); //hook from redux
  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, []); //funct onvoked during mount = ComponentDiodMount 'cause [] (empty array)
  //  useEffect(dispatch(operations.fetchContacts()), []); // do not invoke func during mount
  // componentDidMount() {
  //   this.props.fetchContacts();
  // }

  return (
    <div className={styles.container}>
      <h1 className={styles.headTitle}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.title}>Contacts</h2>
      <ContactList />
    </div>
  );
};

// const mapDispatchToProps = dispatch => ({
//   fetchContacts: () => dispatch(operations.fetchContacts()),
// });

export default Contacts;
