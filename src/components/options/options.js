import React from 'react';
import { BLOCKS } from '@contentful/rich-text-types'
import { Typography, typographyRef } from '../atoms'

export const optionsTypography = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      const { nodeType } = node;
      console.log({nodeType})
      return <Typography  size="sm" tag={typographyRef[nodeType]}>{children}</Typography>
    }
  }
}