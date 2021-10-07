import React, { useState, useCallback, useEffect } from 'react';
import { RiUserSearchLine } from 'react-icons/ri';
import { useDebouncedCallback } from 'use-debounce';

import { useUsers } from '../../hooks/users';

import { Container } from './styles';

const SearchBar: React.FC = () => {
  const { searchUsers } = useUsers();
  const [inputText, setInputText] = useState('');

  const debouncedFunction = useDebouncedCallback(
    useCallback((value: string) => {
      setInputText(value);
    }, []),
    1000,
    { maxWait: 1500 },
  );

  useEffect(() => {
    function handleDebounce() {
      if (inputText.length > 1) {
        searchUsers(inputText);
      }
    }
    handleDebounce();
  }, [inputText]);

  return (
    <Container>
      <input
        onChange={({ target }) => debouncedFunction(target.value)}
        type="text"
        placeholder="Searching"
      />
      <RiUserSearchLine />
    </Container>
  );
};

export default SearchBar;
