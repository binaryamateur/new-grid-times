import React from 'react';
import styled from 'styled-components/macro';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';
import { COLORS, QUERIES } from '../../constants';

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;

  @media ${QUERIES.laptopAndUp} {
    grid-template-areas: 
    'markets sports';
    grid-template-columns: 1fr 1fr;
  }
`;

const MarketsSection = styled.section`
@media ${QUERIES.laptopAndUp}{
  grid-area: markets;
  border-right: 2px solid ${COLORS.gray[300]};
  padding-right: 1rem;
}
`;

const MarketCards = styled.div`
  --min-column-width: min(150px, 100%);
  display: grid;
  grid-template-columns:
    repeat(auto-fill, minmax(var(--min-column-width), 1fr));
  gap: 16px;
  padding: 16px;

`;

const SportsSection = styled.section`


@media ${QUERIES.tabletAndUp}{
  overflow: scroll;
}
@media ${QUERIES.laptopAndUp}{
  grid-area: sports;
  margin-left: 1rem;
}
`;

const SportsStories = styled.div`

  --min-column-width: min(150px, 100%);
  display: grid;
  grid-template-columns:
    repeat(auto-fill, minmax(var(--min-column-width), 1fr));
  gap: 16px;
  padding: 16px;

  @media ${QUERIES.tabletAndUp}{
    display: flex;
  }

`;

export default SpecialtyStoryGrid;
