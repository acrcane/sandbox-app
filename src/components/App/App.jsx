// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FriendsList from "../FriendsList/FriendsList";
import AddProfileForm from "../AddProfileForm/AddProfileForm";
import ModalProfile from "../ModalProfile/ModalProfile";
import { v4 as uuidv4 } from "uuid";
import { SearchPage } from "pages/SearchPage/SearchPage";
import { RowContainer } from "components/App/App.styled";
import {
  addProfile,
  removeProfile,
  setProfile,
} from "../../redux/friendsReducer";
import { openModal, closeModal } from "../../redux/ modalSlice";

export const App = () => {
  const isOpenModal = useSelector((store) => store.modal.isOpenModal);
  const selectedContact = useSelector((store) => store.modal.selectedContact);
  const friends = useSelector((store) => store.profiles.friends);
  const friendsFilter = useSelector((store) => store.profiles.filter);
  const dispatch = useDispatch();

//   console.log("Modal Open: ", isOpenModal);
// console.log("Selected Contact: ", selectedContact);

  // useEffect(() => {
  //   localStorage.setItem("friends", JSON.stringify(friends));
  // }, [friends]);

  const handleAddProfile = (formData) => {
    const newFriend = { ...formData, id: uuidv4() };
    const action = addProfile(newFriend);
    dispatch(action);
  };

  const handleRemoveProfile = (id) => {
    const updatedFriendsList = friends.filter((friend) => friend.id !== id);

    const action = removeProfile(id);
    dispatch(action);

    localStorage.setItem("friends", JSON.stringify(updatedFriendsList));
  };

  const handleShowDetalis = (profileId) => {
    const selectedProfile = friends.find((friend) => friend.id === profileId.id);
    if (selectedProfile) {
      dispatch(openModal(selectedProfile)); 
    }
  };

  const isCloseModal = () => {
    dispatch(closeModal());
  };

  const handleSubmit = (value) => {
    const action = setProfile(value);
    dispatch(action);
  };

  const filter = () => {
    const filteredFriends = friends.filter((friend) =>
      friend.name.toLowerCase().includes(friendsFilter.toLowerCase())
    );

    return filteredFriends;
  };

  const filteredFriends = filter();

  return (
    <>
      <RowContainer>
        <SearchPage onSubmit={handleSubmit} />
        <AddProfileForm handleAddProfile={handleAddProfile} />
      </RowContainer>
      <FriendsList
        newFriends={filteredFriends}
        handleShowDetalis={handleShowDetalis}
        removeFriend={handleRemoveProfile}
      />
      {selectedContact && (
        <ModalProfile
          isOpenModal={isOpenModal}
          closeModal={isCloseModal}
          contactData={selectedContact}
        />
      )}
    </>
  );
};
