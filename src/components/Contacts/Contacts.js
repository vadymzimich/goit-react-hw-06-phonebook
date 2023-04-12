import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/phoneBook';
import css from './Contacts.module.css';

const Contacts = () => {
  const contacts = useSelector(state => state.phoneBook.items);
  const filter = useSelector(state => state.phoneBook.filter);
  const dispatch = useDispatch();

  return (
    <div className={css.wraperContactList}>
      <ul className={css.contactList}>
        {contacts
          .filter(el => el.name.toLowerCase().includes(filter))
          .map(({ id, number, name }) => (
            <li className={css.contactListItem} key={id}>
              {name}: {number}
              <button
                className={css.contactListItemBtn}
                type="button"
                onClick={() => dispatch(deleteContact({ id }))}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Contacts;
