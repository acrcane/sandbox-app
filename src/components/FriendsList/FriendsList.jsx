import { Container, List, ListElem, FriendInfo, ShowDetalisBtn } from "./FriendsList.styled";

const FriendsList = ({ newFriends, handleShowDetalis }) => {

  return (
    <Container>
      <List>
        {newFriends.map((contact) => (
          <ListElem key={contact.id}>
            <FriendInfo>name: {contact.name}</FriendInfo>
            <FriendInfo>email: {contact.email}</FriendInfo>
            <FriendInfo>phone: {contact.phone}</FriendInfo>
            <ShowDetalisBtn onClick={() => {handleShowDetalis(contact)}}>Show detalis</ShowDetalisBtn>
          </ListElem>
        ))}
      </List>
    </Container>
  );
};

export default FriendsList;
