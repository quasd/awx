import React from 'react';
import { TextList, TextListVariants } from '@patternfly/react-core';
import styled from 'styled-components';

const DetailList = ({ children, stacked, compact, ...props }) => (
  <TextList component={TextListVariants.dl} {...props}>
    {children}
  </TextList>
);

export default styled(DetailList)`
  display: grid;
  align-items: start;
  ${(props) => (props.compact ? `column-gap: 20px;` : `grid-gap: 20px;`)}
  ${(props) =>
    props.stacked
      ? `
    grid-template-columns: auto 1fr;
  `
      : `
    --column-count: 1;
    grid-template-columns: repeat(var(--column-count), auto minmax(10em, 1fr));

    @media (min-width: 920px) {
      --column-count: 2;
    }

    @media (min-width: 1210px) {
      --column-count: 3;
    }
  `}
`;
