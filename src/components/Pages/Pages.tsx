import React, { FC, useCallback } from 'react';

import './styles.css';

export type PagesProps = {
  numberOfPages: number;
  pageId: number;
  onPageSelect: (id: number) => void;
}

export const Pages: FC<PagesProps> = (props) => {
  const { numberOfPages, pageId, onPageSelect } = props;
  const previousPage = pageId > 1 ? pageId - 1 : 1;
  const nextPage = pageId < numberOfPages ? pageId + 1 : numberOfPages;
  const handleClick = useCallback((newPageId: number) => {
    onPageSelect(newPageId);
  }, [onPageSelect]);
  const links = [{
    action: () => handleClick(previousPage),
    className: 'pages-item pages-item-left',
    label: '<',
  }];
  for (let cnt = 1; cnt <= numberOfPages; cnt += 1) {
    links.push({
      action: () => handleClick(cnt),
      className: `pages-item ${cnt === pageId ? 'pages-item__selected' : ''}`,
      label: `${cnt}`,
    });
  }
  links.push({
    action: () => handleClick(nextPage),
    className: 'pages-item pages-item-right',
    label: '>',
  });
  if (numberOfPages === 0) {
    return null;
  }
  return (
    <div className="pages">
      { links.map((page) => (
        <button type="button" key={page.label} className={page.className} onClick={page.action}>
          <span>{page.label}</span>
        </button>
      ))}
    </div>
  );
};
