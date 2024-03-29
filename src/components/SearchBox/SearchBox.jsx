import { useId } from 'react';
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../../redux/filtersSlicer';
import { selectFilter } from '../../redux/contacts/selector';

export const SearchBox = () => {
  const filterId = useId();
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectFilter);

  return (
    <div className={css.bar}>
      <label htmlFor={filterId} className={css.label}>
        Find contacts by name or number
      </label>
      <input
        autoComplete="off"
        type="text"
        value={nameFilter}
        onChange={evt => dispatch(filterContact(evt.target.value))}
        id={filterId}
        className={css.input}
      />
    </div>
  );
};
