import React, {useState, useEffect, useRef} from "react";
import { Bg, ModalContent, CloseModalBtn, Text, TabBtn, Container, TabBtnContainer, InputAdd } from "./ModalProfile.styled";
const ModalProfile = ({isOpenModal, closeModal, contactData}) => {

  const [isTabs, setIsTabs] = useState('users')

  useEffect(() => {
    const handleEsc = (e) => {
      if(e.keyCode === 27) {
        closeModal()
      }
      
    }
    document.addEventListener('keydown', handleEsc)

    return () => {
      document.removeEventListener('keydown', handleEsc)
    }
  }, [closeModal])


  const inputRef = useRef(null)

  useEffect(() => {
    
    if (isOpenModal && inputRef.current){
      inputRef.current.focus()
    }
  }, [isOpenModal])

  const handleClickOver = (e) => {
    if(e.target === e.currentTarget) {
      closeModal()
    }
  }

  const handleFocus = () => {
    inputRef.current.focus()
  }

    if(!isOpenModal) return null
  return (
    <Bg onClick={handleClickOver}>
      <ModalContent >
        <CloseModalBtn onClick={closeModal}>&times;</CloseModalBtn>
        <TabBtnContainer>
        <TabBtn onClick={handleFocus}>Add</TabBtn>
        <InputAdd type="text" placeholder="Some text" ref={inputRef}/>
        </TabBtnContainer>
        <TabBtnContainer>
          <TabBtn onClick={() => {setIsTabs('users')}}>Users</TabBtn>
          <TabBtn onClick={() => {setIsTabs('groops')}}>Groops</TabBtn>
          <TabBtn onClick={() => {setIsTabs('comments')}}>Comments</TabBtn>
        </TabBtnContainer>
        {isTabs === 'users' && <Container>
          <Text>Name: {contactData.name}</Text>
          <Text>Email: {contactData.email}</Text>
          <Text>Phone: {contactData.phone}</Text>
        </Container>}
        {isTabs === 'groops' && <Container>
          <Text>Please enter or create groop</Text>
        </Container>}
        {isTabs === 'comments' && <Container>
          <Text>You don't have messages</Text>
        </Container>}
      </ModalContent>
    </Bg>
  );
};

export default ModalProfile;
