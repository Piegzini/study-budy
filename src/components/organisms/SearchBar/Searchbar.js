import { Input } from '../../atoms/Input/Input';
import { InputWrapper, ResultItem, SearchBarWrapper, SearchingResults, StatusInfo } from './SearchBar.styles';
import { useState } from 'react';
import useStudents from '../../../hooks/useStudents';
import { useCombobox } from 'downshift';
import debounce from 'lodash.debounce';
export const SearchBar = () => {
  const [matchingStudents, setMatchingStudents] = useState([]);
  const { findStudents } = useStudents();

  const getMatchingStudents = debounce(async ({ inputValue }) => {
    const { students } = await findStudents(inputValue);
    setMatchingStudents(students);
  }, 300);

  const { isOpen, selectedItem, getToggleButtonProps, getLabelProps, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps } =
    useCombobox({
      items: matchingStudents,
      onInputValueChange: getMatchingStudents,
    });

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as: </p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <InputWrapper {...getComboboxProps()}>
        <Input {...getInputProps()} placeholder="Search" />

        <SearchingResults isVisible={isOpen && matchingStudents.length > 0} {...getMenuProps()}>
          {isOpen &&
            matchingStudents.map((item, index) => (
              <ResultItem isHighlightedItem={highlightedIndex === index} key={item.id} {...getItemProps({ item, index })}>
                {item.name}
              </ResultItem>
            ))}
        </SearchingResults>
      </InputWrapper>
    </SearchBarWrapper>
  );
};
