import { List } from './ContactList.styled';

export const ContactList = ({ contacts }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
        </li>
      ))}
    </List>
  );
};
