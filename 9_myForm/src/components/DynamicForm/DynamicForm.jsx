import { useForm } from 'react-hook-form';
import styles from './DynamicForm.module.css';

function DynamicForm() {
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm({ mode: 'onSubmit' });

    const firstField = watch('firstField', '');

    const onSubmit = (data) => {
        console.log(data);
        reset();
    };

    return (
        <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.input}>
                    <p className={styles.hint}>Мinimum 5 characters.</p>
                    <label htmlFor="inputField"></label>
                    <input
                        {...register('firstField', {
                            required: 'First field is required',
                            minLength: {
                                value: 5,
                                message: 'Minimum 5 characters required',
                            },
                        })}
                        type="text"
                        placeholder="First field"
                        id="inputField"
                    />
                    {errors.firstField && (
                        <div className={styles.error}>
                            <p>{errors.firstField.message}</p>
                        </div>
                    )}
                </div>
                 {firstField.length >= 5 &&  (
                    <div className={styles.input}>
                        <label htmlFor="inputField2"></label>
                        <input
                            {...register('secondField', {
                                required: 'Second field is required',
                                minLength: {
                                value: 5,
                                message: 'Minimum 5 characters required',
                            },
                            })}
                            type="text"
                            placeholder="Second field"
                            id="inputField2"
                        />
                        {errors.secondField && (
                            <p style={{ color: 'red' }}>{errors.secondField.message}</p>
                        )}
                    </div>
                )}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default DynamicForm;
