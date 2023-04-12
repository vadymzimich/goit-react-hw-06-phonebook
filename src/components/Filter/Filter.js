import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/phoneBook';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <label className={css.filterLabel}>
        Find contacts by Name
        <input
          className={css.filterName}
          type="text"
          name="filter"
          placeholder="Enter name"
          onChange={e => dispatch(filterContacts(e.target.value.toLowerCase()))}
        />
      </label>
    </div>
  );
};

export default Filter;
