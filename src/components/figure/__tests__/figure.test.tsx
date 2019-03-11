import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Figure } from '..';

describe('Figure', () => {
  it('renders correctly', () => {
    const json = renderer.create(
      <Figure figcaption="Depression. By: Darren Harris">
        <span>
          Depression is running through my head,<br/>
          These thoughts make me think of death,<br/>
          A darkness which blanks my mind,<br/>
          A walk through the graveyard, what can I find?....
        </span>
      </Figure>
    ).toJSON();
    expect(json).toMatchSnapshot();
  });
});
