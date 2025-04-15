// 

import UserItem from '../UserItem/UserItem';
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import styles from "./Filter.module.css";

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const users = useSelector((store) => store.users);

  const onChange = values => {
    const searchValue = values.search.trim();
    if (searchValue) {
      setSearchParams({ search: searchValue });
    } else {
      setSearchParams({});
    }
    
  };

  const searchQuery = searchParams.get('search') || '';

  const filteredUsers = searchQuery
    ? users.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : users;

  return (
    <div>
      <h2>Filter</h2>
      <form onChange={handleSubmit(onChange)} className={styles.form}>
        <label htmlFor='searchId'>Search user</label>
        <input
          id='searchId'
          {...register("search")}
          placeholder="Search user"
        />
        {/* <button type="submit">Find</button> */}
        {errors.search && (
          <p className={styles.error}>{errors.search.message}</p>
        )}
      </form>
      <UserItem users={filteredUsers} />
    </div>
  );
}

export default Filter;
