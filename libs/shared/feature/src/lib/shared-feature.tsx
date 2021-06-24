import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SharedFeatureProps {}

const StyledSharedFeature = styled.div`
  color: green;
`;

export function SharedFeature(props: SharedFeatureProps) {
  return (
    <StyledSharedFeature>
      <h1>changed new component</h1>
    </StyledSharedFeature>
  );
}

export default SharedFeature;
