import { useState, useEffect } from "react";
// import friendsData from "../friends.json";
import friendsData from "../../friends.json";
import FriendsList from "../FriendsList/FriendsList";
import AddProfileForm from "../AddProfileForm/AddProfileForm";
import ModalProfile from "../ModalProfile/ModalProfile";
import { v4 as uuidv4 } from "uuid";
import { SearchPage } from "pages/SearchPage/SearchPage";
import { RowContainer } from "components/App/App.styled";

export const App = () => {
  const [friends, setFriends] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [searchValue, setSaerchValue] = useState("");

  useEffect(() => {
    setFriends(friendsData);
  }, []);

  const handleAddProfile = (formData) => {
    const newFriend = { ...formData, id: uuidv4() };
    setFriends([...friends, newFriend]);
  };

  const handleShowDetalis = (contact) => {
    const { id, ...contactData } = contact;
    setSelectedContact(contactData);
    setIsOpenModal(true);
    // console.log(contactData);
  };

  const closeModal = () => {
    setSelectedContact(null);
    setIsOpenModal(false);
  };

  const handleSubmit = (value) => {
    setSaerchValue(value);
    console.log(value);
  };

  const filter = () => {
    const filteredFriends = friends.filter((friend) =>
    friend.name.toLowerCase().includes(searchValue.toLowerCase())
  )
  // if(filteredFriends.length === 0){
  //   console.log('Not found');
  // }
    return filteredFriends
  }

  const filteredFriends = filter()

  return (
    <>
      <RowContainer>
        <SearchPage onSubmit={handleSubmit}/>
        <AddProfileForm handleAddProfile={handleAddProfile} />
      </RowContainer>
      <FriendsList newFriends={filteredFriends} handleShowDetalis={handleShowDetalis} />
      <ModalProfile
        isOpenModal={isOpenModal}
        closeModal={closeModal}
        contactData={selectedContact}
      />
    </>
  );
};
