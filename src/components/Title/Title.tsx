import React, { FC } from 'react';

import './styles.css';

type TitleProps = {
    title: string;
    subTitle: string;
    ico: string;
}

export const Title: FC<TitleProps> = (props) => {
  const { title, subTitle, ico } = props;
  return (
    <div className="title">
      <div className="title-icon">
        <img src={ico} alt="" />
      </div>
      <h1 className="title-pri">{title}</h1>
      <h2 className="title-sec">{subTitle}</h2>
    </div>
  );
};
