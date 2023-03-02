import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-slice';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';

import css from 'components/Phonebook/phonebook.module.css';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const onDeleteContact = idForDelete => {
    dispatch(deleteContact(idForDelete));
  };

  return (
    <>
      <h2 className={css.title}>Contacts</h2>
      <ul className={css.buttonWrapper}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={css.contact}>
            <p className={css.text}>
              {name} {number}
            </p>
            <button
              type="button"
              className={css.btnDel}
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;

// import PropTypes from 'prop-types';
// import css from 'components/Phonebook/phonebook.module.css';

// const ContactList = ({ contacts, onDeleteContact }) => {
//   return (
//     <>
//       <h2 className={css.title}>Contacts</h2>
//       <ul className={css.buttonWrapper}>
//         {contacts.map(({ id, name, number }) => (
//           <li key={id} className={css.contact}>
//             <p className={css.text}>
//               {name} {number}
//             </p>
//             <button
//               type="button"
//               className={css.btnDel}
//               onClick={() => onDeleteContact(id)}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default ContactList;

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDeleteContact: PropTypes.func.isRequired,
// };

// ContactList.defaultProps = {
//   contacts: [],
// };
