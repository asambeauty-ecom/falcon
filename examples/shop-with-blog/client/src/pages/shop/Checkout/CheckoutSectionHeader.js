import React from 'react';
import PropTypes from 'prop-types';
import { Box, H2, Button, Summary, Icon } from '@deity/falcon-ui';
import { CheckoutSectionHeaderLayout, CheckoutSectionHeaderLayoutArea } from './CheckoutSectionHeaderLayout';

export const CheckoutSectionHeader = ({ complete, open, title, summary, editLabel, onActionClick }) => (
  <Summary onClick={e => e.preventDefault()} defaultTheme={CheckoutSectionHeaderLayout}>
    {(complete || open) && (
      <Icon
        size="lg"
        gridArea={CheckoutSectionHeaderLayoutArea.icon}
        src={complete ? 'check' : 'arrowRight'}
        css={{ cursor: 'default' }}
      />
    )}
    <H2 fontSize="lg" gridArea={CheckoutSectionHeaderLayoutArea.title}>
      {title}
    </H2>
    {summary && (
      <Box ml="lg" pt="xs" gridArea={CheckoutSectionHeaderLayoutArea.summary}>
        {summary}
      </Box>
    )}
    {complete && (
      <Button
        gridArea={CheckoutSectionHeaderLayoutArea.button}
        fontSize="xs"
        onClick={() => {
          onActionClick();
        }}
      >
        {editLabel}
      </Button>
    )}
  </Summary>
);
CheckoutSectionHeader.propTypes = {
  complete: PropTypes.bool,
  open: PropTypes.bool,
  title: PropTypes.string,
  summary: PropTypes.shape({}),
  editLabel: PropTypes.string,
  onActionClick: PropTypes.func
};
