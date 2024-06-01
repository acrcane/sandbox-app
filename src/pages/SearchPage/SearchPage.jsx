import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, InputSearch, SearchBtn } from "./SearchPage.style";

export const SearchPage = ({ onSubmit }) => {
  const [isSearch, setIsSearch] = useState("");
  const navigate = useNavigate();

  const onInputChange = (e) => {
    setIsSearch(e.target.value);
  };

  const onClickSearchBtn = (e) => {
    e.preventDefault();
    const trimSearchValue = isSearch.trim().toLowerCase();
    if (trimSearchValue) {
      onSubmit(trimSearchValue);
      setIsSearch("");
      navigate("/search/result");
    }
  };

  return (
    <Container>
      <Form onSubmit={onClickSearchBtn}>
        <InputSearch
          type="text"
          name="searchInput"
          value={isSearch}
          onChange={onInputChange}
          placeholder="Search..."
        />
        <SearchBtn type="submit">Search</SearchBtn>
      </Form>
    </Container>
  );
};
