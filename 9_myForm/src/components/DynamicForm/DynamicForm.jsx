import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './DynamicForm.module.css';

function DynamicForm() {
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm({ mode: 'onChange' });

    const firstField = watch('firstField');

    const onSubmit = (data) => {
        console.log(data);
        reset();
    };

    return (
        <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.input}>
                    <label htmlFor="inputField">First Field</label>
                    <input
                        {...register('firstField', {
                            required: 'First field is required',
                            minLength: {
                                value: 3,
                                message: 'Minimum 3 characters required',
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
                {firstField && !errors.firstField && (
                    <div className={styles.input}>
                        <label htmlFor="inputField2">Second Field</label>
                        <input
                            {...register('secondField', {
                                required: 'Second field is required',
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
