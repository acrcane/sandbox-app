import React from "react";
import {
  Container,
  Form,
  Label,
  Input,
  SubButton,
} from "./AddProfileForm.styled";

const AddProfileForm = ({ handleAddProfile }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const elements = form.elements;
    const name = elements.profileName.value;
    const email = elements.profileEmail.value;
    const phone = elements.profilePhone.value;

    const formData = {
      name,
      email,
      phone: Number(phone),
    };

    handleAddProfile(formData);
    form.reset()
  };

  return (
    <Container>
      <Form onSubmit={handleFormSubmit}>
        <Label>
          <Input 
            type="text" 
            name="profileName" 
            placeholder="Name" 
            required 
          />
        </Label>
        <Label>
          <Input
            type="email"
            name="profileEmail"
            placeholder="Email"
            required
          />
        </Label>
        <Label>
          <Input
            type="phone"
            name="profilePhone"
            placeholder="Phone"
            required
          />
        </Label>
        <SubButton type="submit">Add Friend</SubButton>
      </Form>
    </Container>
  );
};

export default AddProfileForm;
