import React, { FC } from 'react';
import { Title } from '../Title';

import ico from './img/title.svg';

export const HomeContent: FC = () => (
  <>
    <Title
      title="Home"
      subTitle="Managing all your documents in one place"
      ico={ico}
    />
  </>
);
