import React from 'react';
import styled from 'styled-components/macro';
import { COLORS, QUERIES } from '../../constants';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStoryWrapper  key={story.id}>
              <SecondaryStory {...story} />
            </SecondaryStoryWrapper>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStoryWrapper>
              <OpinionStory key={story.id} {...story} />
            </OpinionStoryWrapper>
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;
`;

const MainStorySection = styled.section`
  grid-area: main-story;
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
  `;
  

 const OpinionStoryList = styled(StoryList)`
  @media ${QUERIES.tabletOnly} {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 2rem;
  }
 `; 
  const OpinionSection = styled.section`
  grid-area: opinion-stories;
  `;

  const OpinionStoryWrapper = styled.div`
    &:not(last-of-type){
      border-bottom: 1px solid ${COLORS.gray[300]};
      margin-bottom: 1rem;
      padding-bottom: 1rem;
    }

    @media ${QUERIES.tabletOnly} {
      &:not(last-of-type){
        border-bottom: none;
        margin-bottom: 1rem;
        padding-bottom: 1rem;
        flex: 1;
      }
    }
  `;
  
  const AdvertisementSection = styled.section`
  grid-area: advertisement;
  `;
  
  
  const SecondaryStoryWrapper = styled.div`
  &:not(:last-of-type){
    border-bottom: 1px solid ${COLORS.gray[300]};
  }
  padding-bottom: 1rem;
  margin-bottom: 1rem;
`;

export default MainStoryGrid;
