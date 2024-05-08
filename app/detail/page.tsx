import React, { FC, memo } from 'react';
import './index.scss';

interface IndexProps {
}

const DEFAUTL_PROPS: IndexProps = {
};

const Index: FC<IndexProps> = (props) => {
  const {
  } = props;

  return (
    <section className="detail-container">
      detail
      <p>text</p>
    </section>
  );
}

Index.defaultProps = DEFAUTL_PROPS;

export default memo(Index);
