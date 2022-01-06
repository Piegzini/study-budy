import { Input } from '../../atoms/Input/Input';
import { InputWrapper, ResultItem, SearchBarWrapper, SearchingResults, StatusInfo } from './SearchBar.styles';
import { useEffect, useState } from 'react';
import useStudents from '../../../hooks/useStudents';
import debounce from 'lodash.debounce';
export const SearchBar = () => {
  const [searchingPhrase, setSearchingPhrase] = useState('');
  const [matchingStudents, setMatchingStudents] = useState([]);
  const { findStudents } = useStudents();

  const getMatchingStudents = debounce(async (e) => {
    console.log('hej');
    const { students } = await findStudents(searchingPhrase);
    setMatchingStudents(students);
  }, 300);

  useEffect(() => {
    if (!searchingPhrase) return;
    getMatchingStudents();
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
        {searchingPhrase && matchingStudents.length ? (
          <SearchingResults>
            {matchingStudents.length > 0 ? matchingStudents.map(({ name, id }) => <ResultItem key={id}>{name}</ResultItem>) : null}
          </SearchingResults>
        ) : null}
      </InputWrapper>
    </SearchBarWrapper>
  );
};
