import s from "./ContactList.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import phoneBookActions from "../../redux/phonebook/phonebook-actions";

const ContactList = ({ contacts, deleteContact, filter }) => {
  const filterContacts = () => {
    const normalizedName = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedName)
    );
  };

  return (
    <ul className={s.list}>
      {filterContacts().map((item) => (
        <li className={s.item} key={item.id}>
          {item.name}:<span className={s.phoneNumber}>{item.number}</span>
          <button className={s.button} onClick={() => deleteContact(item.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  contacts: state.phonebook.contacts,
  filter: state.phonebook.filter,
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => dispatch(phoneBookActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
