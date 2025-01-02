import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import friendsData from "../../friends.json";
import FriendsList from "../FriendsList/FriendsList";
import AddProfileForm from "../AddProfileForm/AddProfileForm";
import ModalProfile from "../ModalProfile/ModalProfile";
import { v4 as uuidv4 } from "uuid";
import { SearchPage } from "pages/SearchPage/SearchPage";
import { RowContainer } from "components/App/App.styled";


export const App = () => {
  // const [friends, setFriends] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  // const [searchValue, setSaerchValue] = useState("");

  const friends = useSelector(store => store.profiles.friends)
  const friendsFilter = useSelector(store => store.profiles.filter)
  const dispatch = useDispatch()

  

  useEffect(() => {
    localStorage.setItem("friends", JSON.stringify(friends));
  }, [friends]);

  const handleAddProfile = (formData) => {
    const newFriend = { ...formData, id: uuidv4() };
    const action = {
      type: 'friends/addFriend',
      payload: newFriend
    }
    dispatch(action)
  };

  const handleRemoveProfile = (id) => {

    const updatedFriendsList = friends.filter(friend => friend.id !== id)

    const action = {
      type: 'friends/removeFriend',
      payload: id
    }
    dispatch(action);
    console.log(action);
    

    localStorage.setItem('friends', JSON.stringify(updatedFriendsList))
  }


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
    const action = {
      type: 'friends/setFilter',
      payload: value
    }
    dispatch(action)
  };

  const filter = () => {
    const filteredFriends = friends.filter((friend) =>
    friend.name.toLowerCase().includes(friendsFilter.toLowerCase())
  )

    return filteredFriends
  }

  const filteredFriends = filter()

  return (
    <>
      <RowContainer>
        <SearchPage onSubmit={handleSubmit}/>
        <AddProfileForm handleAddProfile={handleAddProfile} />
      </RowContainer>
      <FriendsList newFriends={filteredFriends} handleShowDetalis={handleShowDetalis} removeFriend={handleRemoveProfile}/>
      <ModalProfile
        isOpenModal={isOpenModal}
        closeModal={closeModal}
        contactData={selectedContact}
      />
    </>
  );
};
