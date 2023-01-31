import { List, ListItem } from './ContactList.styled';

export const ContactList = ({ contacts, onRemove }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <p>
            {name}: {number}
          </p>
          <button
            type="button"
            onClick={() => {
              onRemove(id);
            }}
          >
            Delete
          </button>
        </ListItem>
      ))}
    </List>
  );
};
