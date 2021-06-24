import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SharedFeatureProps {}

const StyledSharedFeature = styled.div`
  color: pink;
`;

export function SharedFeature(props: SharedFeatureProps) {
  return (
    <StyledSharedFeature>
      <h1>Another shared comp | comp</h1>
    </StyledSharedFeature>
  );
}

export default SharedFeature;
