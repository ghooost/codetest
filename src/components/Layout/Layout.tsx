import React, { FC } from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Menu } from '../Menu';
import { Title } from '../Title';

import './styles.css';

type LayoutProps = {
  title: string;
  description: string;
  ico?: string;
}

export const Layout: FC<LayoutProps> = (props) => {
  const {
    title, description, ico, children,
  } = props;
  return (
    <div className="page">
      <Header />
      <div className="page-wrap">
        <Menu />
        <section className="page-content-wrap">
          <div className="page-content-main">
            <Title
              title={title}
              subTitle={description}
              ico={ico}
            />
            {children}
          </div>
          <Footer />
        </section>
      </div>
    </div>
  );
};
