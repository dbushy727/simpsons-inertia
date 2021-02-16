import React from 'react'
import { Pane, majorScale } from 'evergreen-ui';

export default ({ children }: { children: React.ReactNode }) => (
  <Pane padding={majorScale(5)}>
    {children}
  </Pane>
);