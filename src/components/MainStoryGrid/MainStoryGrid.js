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
  gap: 1rem;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-areas: 
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories';
    grid-template-columns: 2fr 1fr;

  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-areas: 
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';
      grid-template-columns: 3fr 2fr 1.8fr;
      grid-template-rows: 1fr 0.25fr;

  }

`;

const MainStorySection = styled.section`
  grid-area: main-story;
  @media ${QUERIES.tabletAndUp}{
    border-right: 2px solid ${COLORS.gray[300]};
    padding-right: 1rem;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  @media ${QUERIES.tabletAndUp}{

  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  @media ${QUERIES.laptopAndUp}{
    border-right: 2px solid ${COLORS.gray[300]};
    padding-right: 1rem;
  }
  `;
  

 const OpinionStoryList = styled(StoryList)`
  @media ${QUERIES.tabletOnly} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
  }

  @media ${QUERIES.laptopAndUp} {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-right: none;
  }
 `; 
  const OpinionSection = styled.section`
  grid-area: opinion-stories;
  
  `;

  const OpinionStoryWrapper = styled.div`
    &:not(:last-of-type){
      border-bottom: 1px solid ${COLORS.gray[300]};
      
    }
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    @media ${QUERIES.tabletOnly} {
      margin-bottom: 1rem;
      padding-bottom: 1rem;
      flex: 1;
      &:not(:last-of-type){
        border-bottom: none;
        
      }
    }

    @media ${QUERIES.laptopAndUp} {
    }
  `;
  
  const AdvertisementSection = styled.section`
  grid-area: advertisement;
  @media ${QUERIES.laptopAndUp}{
    border-top: 2px solid ${COLORS.gray[300]};
    padding-top: 1rem;
  } 
  `;
  
  
  const SecondaryStoryWrapper = styled.div`
  &:not(:last-of-type){
    border-bottom: 1px solid ${COLORS.gray[300]};
  }
  padding-bottom: 1rem;
  margin-bottom: 1rem;
`;

export default MainStoryGrid;
