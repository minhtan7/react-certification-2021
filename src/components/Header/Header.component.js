import React, { useState } from 'react';

import { FaListUl, FaUser, FaSearch } from 'react-icons/fa';
import {
  StyledHeader,
  Button,
  Wrapper,
  Gap,
  NavGroup,
  SearchBar,
  FaSearchBar,
  ButtonUser,
  Label,
} from './Header.styled';

const Header = () => {
  const [search, setSearch] = useState('wizeline');
  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <StyledHeader>
      <Wrapper>
        <Button>
          <FaListUl />
        </Button>
        <SearchBar>
          <FaSearchBar>
            <FaSearch />
          </FaSearchBar>
          <input placeholder="Search..." value={search} onChange={handleOnChange} />
        </SearchBar>
        <Gap></Gap>
        <NavGroup>
          <div>
            <Label>
              <input type="checkbox" />
              <span className="slider"></span>
            </Label>
            <small>Dark mode</small>
            <ButtonUser>
              <FaUser />
            </ButtonUser>
          </div>
        </NavGroup>
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
