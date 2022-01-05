import { Input } from '../../atoms/Input/Input';
import { InputWrapper, ResultItem, SearchBarWrapper, SearchingResults, StatusInfo } from './SearchBar.styles';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const SearchBar = () => {
  const [searchingPhrase, setSearchingPhrase] = useState('');
  const [matchingStudents, setMatchingStudents] = useState([]);

  useEffect(() => {
    axios
      .post('/students/search', {
        info: searchingPhrase,
      })
      .then(({ data }) => setMatchingStudents(data.students))
      .catch((e) => console.log(e));
  }, [searchingPhrase]);

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as: </p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <InputWrapper>
        <Input value={searchingPhrase} onChange={(e) => setSearchingPhrase(e.target.value)} />
        <SearchingResults isVisible={matchingStudents.length > 0 ? 'visible' : 'hidden'}>
          {matchingStudents.length > 0 ? matchingStudents.map(({ name }) => <ResultItem>{name}</ResultItem>) : null}
        </SearchingResults>
      </InputWrapper>
    </SearchBarWrapper>
  );
};
