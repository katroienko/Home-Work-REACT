import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import {setUserInfo} from  "../../../redux/actionCreators"
import styles from './UserForm.module.css'


function UserForm() {
    const { register, handleSubmit, formState: { errors } } = useForm("");
    const dispatch = useDispatch();

   const onSubmit = values => {
        const action = setUserInfo(values);
        dispatch(action);

    }

    return (
        <>
            <h2>UserForm</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Name</label>
                <input {...register('name', {required: "enter the name"})} type="text" id="name" />
                {errors.name && <p className={styles.error}>{errors.name.message}</p>}
                <label htmlFor="status" id="Status">Status</label>
                <input {...register('status', {required: "enter the Status"})}type="text" />
                <button>Save</button>
                {errors.status && <p className={styles.error}>{errors.status.message}</p>}
            </form>
        </>

    )
}

export default UserForm