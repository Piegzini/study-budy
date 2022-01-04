import React from 'react';
import { Wrapper } from './MainTemplate.styles';
import Navigation from '../../organisms/Navigation/Navigation';
import { SearchBar } from '../../organisms/SearchBar/Searchbar';
import NewsSection from '../NewsSection/NewsSection';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {children}
      <NewsSection />
    </Wrapper>
  );
};

export default MainTemplate;
