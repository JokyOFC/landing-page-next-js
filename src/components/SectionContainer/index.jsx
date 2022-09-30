import P from 'prop-types';
import { SectionBackground } from '../SectionBackground';

import * as Styled from './styles';

export const SectionContainer = ({ children, background = false }) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>{children}</Styled.Container>;
    </SectionBackground>
  );
};

SectionContainer.propTypes = {
  children: P.node.isRequired,

  background: P.bool,
};
