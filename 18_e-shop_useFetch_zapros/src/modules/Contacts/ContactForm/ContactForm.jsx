import { useForm } from "react-hook-form";
import TextField from "../../../shared/components/TextField/TextField";
import Button from "../../../shared/components/Button/Button";
import fields from "./fields";

const ContactForm = ({ submitForm }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    submitForm(values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ width: '767px' }} >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
             width: '767px',
           }}>
          <TextField 
          {...fields.email} register={register} error={errors.email}
          style={{ height: '66px', width: '364px' }}
           />
        <TextField
          {...fields.username}
          register={register}
          error={errors.username}
          style={{ height: '66px', width: '364px' }}
        />
      </div>
      <TextField
        {...fields.masage}
        register={register}
        error={errors.masage}
        multiline
        maxRows={4}
        style={{ height: '116px', width: '767px' }}
      />
      <Button>Отправить</Button>
    </div>
    </form >
  );
};

export default ContactForm;
