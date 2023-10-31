import React from 'react';
import { gentlemanData } from '../../data/data';

export function Button() {
  const handleClickButton = () => {
    gentlemanData.forEach((user) => (user.selected = true));
  };

  return (
    <section className="controls">
      <p className="info">{} gentlemen pointing at you</p>
      <button onClick={handleClickButton} className="button button--select">
        Select all
      </button>
    </section>
  );
}
