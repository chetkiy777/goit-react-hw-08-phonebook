import { useSelector, useDispatch } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations'
import { FilterBlock } from 'styles/Filter.styled';

const Filter = () => {
  const filterValue = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const onChange = e => {
    return dispatch(contactsOperations.filterName(e.currentTarget.value));
  };

  return (
    <FilterBlock>
      <h3>мои контакты</h3>
      <input
        name="filter"
        value={filterValue}
        onChange={onChange}
        placeholder="поиск"
      />
    </FilterBlock>
  );
};

export default Filter
