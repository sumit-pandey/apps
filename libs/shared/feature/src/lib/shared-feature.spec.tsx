import { render } from '@testing-library/react';

import SharedFeature from './shared-feature';

describe('SharedFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedFeature />);
    expect(baseElement).toBeTruthy();
  });
});
