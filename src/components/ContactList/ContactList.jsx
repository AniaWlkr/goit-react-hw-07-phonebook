import PropTypes from 'prop-types';
import store from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ContactList.module.css';
import { connect } from 'react-redux';
import { operations, selectors } from '../../redux/contacts';
import ContactFilter from '../ContactFilter/ContactFilter';
import Loader from '../Loader';
import Button from '../Button';

const ContactList = ({}) => {
  const state = store.getState();

  const dispatch = useDispatch();
  const contacts = selectors.getFilteredContacts(state);
  const isLoadingContacts = useSelector(state => state.contacts.loading);

  const onDelete = id => {
    console.log('id -', id);
    dispatch(operations.deleteContact(id));
  };

  return (
    <div className={styles.section}>
      <ContactFilter />
      {isLoadingContacts && <Loader />}
      {contacts?.length ? (
        <ul className={styles.list}>
          {contacts.map(contact => (
            <li key={contact.id} className={styles.item}>
              {contact.name}: {contact.number}
              <Button title="Delete" handleClick={onDelete} id={contact.id} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.notification}>
          <span role="img" aria-label="sad face icon">
            😔
          </span>{' '}
          No name in Phonebook
        </p>
      )}
    </div>
  );
};

ContactList.propTypes = {
  value: PropTypes.string,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  handleChange: PropTypes.func,
  handleDelete: PropTypes.func,
};

// const mapStateToProps = state => ({
//   contacts: selectors.getFilteredContacts(state),
//   isLoadingContacts: selectors.getLoading(state),
// });

export default ContactList;

// const mapDispatchToProps = dispatch => ({
//   handleDelete: contactId => dispatch(operations.deleteContact(contactId)),
// });
