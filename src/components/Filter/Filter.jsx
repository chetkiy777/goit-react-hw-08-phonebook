import { FilteredBlock } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations'

const Filter = () => {
  const filterValue = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const onChange = e => {
    return dispatch(contactsOperations.filterName(e.currentTarget.value));
  };

  return (
    <div>
      <FilteredBlock>Find contacts by name</FilteredBlock>
      <input
        name="filter"
        value={filterValue}
        onChange={onChange}
      />
    </div>
  );
};

export default Filter
