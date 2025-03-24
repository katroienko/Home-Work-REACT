import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './DynamicForm.module.css';

function DynamicForm() {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    const onSubmit = (values) => {
        console.log(values);
        reset();
    };

    const firstField = watch('firstField');

    return (
        <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)} >
                <div className={styles.input}>
                    <label htmlFor="inputField">First field</label>
                    <input
                        {...register("firstField", { required: 'First field is required' })}
                        type="text"
                        placeholder='First field'
                        id="inputField"
                    />
                    {errors.firstField && <p style={{ color: 'red' }}>{errors.firstField.message}</p>}
                </div>
                {firstField && (
                    <div className={styles.input}>
                        <label htmlFor="inputField2">Second field</label>
                        <input
                            {...register('secondField', { required: 'Second field is required' })}
                            type="text"
                            placeholder='Second field'
                            id="inputField2"
                        />
                        {errors.secondField && <p style={{ color: 'red' }}>{errors.secondField.message}</p>}
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default DynamicForm;
