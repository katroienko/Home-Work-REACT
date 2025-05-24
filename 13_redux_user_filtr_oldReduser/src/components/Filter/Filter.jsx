
import { useSelector, useDispatch } from 'react-redux';

function Filter({filtr}) {
  const dispatch = useDispatch();
  const filter = useSelector((store) => store.filter);

  const handleChange = (e) => {
    dispatch(filtr(e.target.value));
  };

  return (
    <div>
      <h2>Filter</h2>
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Search users..."
      />
    </div>
  );
}

export default Filter;
