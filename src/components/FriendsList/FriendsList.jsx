
import { Container, List, ListElem, FriendInfo, ShowDetalisBtn, RemoveFriendBtn } from "./FriendsList.styled";

const FriendsList = ({ newFriends, handleShowDetalis, removeFriend }) => {


  
  return (
    <Container>
      <List>
        {newFriends.map((contact) => (
          <ListElem key={contact.id}>
            <FriendInfo>name: {contact.name}</FriendInfo>
            <FriendInfo>email: {contact.email}</FriendInfo>
            <FriendInfo>phone: {contact.phone}</FriendInfo>
            <ShowDetalisBtn onClick={() => {handleShowDetalis(contact)}}>Show detalis</ShowDetalisBtn>
            <RemoveFriendBtn onClick={() => {removeFriend(contact.id)}}>Delete</RemoveFriendBtn>
          </ListElem>
        ))}
      </List>
    </Container>
  );
};

export default FriendsList;
