'use client';
import React, { FC, memo } from 'react';
import { useRouter } from 'next/navigation';
import './index.scss';

interface IndexProps {
}

const DEFAUTL_PROPS: IndexProps = {
};

const Index: FC<IndexProps> = (props) => {
  const {
  } = props;
  const router = useRouter();

  return (
    <section className="detail-container">
      <p>detail</p>
      <button
        onClick={() => {
          router.back();
        }}
      >back</button>
    </section>
  );
}

Index.defaultProps = DEFAUTL_PROPS;

export default memo(Index);
