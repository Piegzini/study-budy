import React, { useEffect, useState } from 'react';
import { ArticleWrapper, ContentWrapper, NewsSectionHeader, TitleWrapper, Wrapper } from './NewsSection.styles';
import { Button } from '../../atoms/Button/Button';
import axios from 'axios';

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getArticles = async () => {
      try {
        console.log(process.env.REACT_APP_API);
        const {
          data: { data },
        } = await axios.get(`${process.env.REACT_APP_API_LINK}/api/articles`, {
          params: {
            fields: 'title,content,category',
            populate: 'photo',
          },
        });
        setArticles(data);
      } catch (e) {
        setError(`Sorry, we couldn't load articles for you`);
      }
    };
    getArticles().then();
  }, []);
  return (
    <Wrapper>
      <NewsSectionHeader>University news feed</NewsSectionHeader>

      {articles.length > 0 ? (
        articles.map(({ id, attributes }) => (
          <ArticleWrapper key={id}>
            <TitleWrapper>
              <h3>{attributes.title}</h3>
              <p>{attributes.category}</p>
            </TitleWrapper>
            <ContentWrapper>
              <p>{attributes.content}</p>
              {attributes.photo.data ? <img src={process.env.REACT_APP_API_LINK + attributes.photo.data.attributes.url} alt="" /> : null}
            </ContentWrapper>
            <Button isBig>Read more</Button>
          </ArticleWrapper>
        ))
      ) : (
        <NewsSectionHeader>{error ? error : 'Loading...'}</NewsSectionHeader>
      )}
    </Wrapper>
  );
};

export default NewsSection;
