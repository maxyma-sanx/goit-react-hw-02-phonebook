import { Form, Label, Input } from './ContactForm.styled';

export const ContactForm = ({ add }) => {
  return (
    <Form onSubmit={add}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        ></Input>
      </Label>
      <button type="submit">Add contact</button>
    </Form>
  );
};
