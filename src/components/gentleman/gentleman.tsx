import React, { useState } from 'react';
import { gentlemanData } from '../../data/data';
import { GentlemanType } from '../../types/types';

type Props = {
  cards: GentlemanType[];
};

export function Gentleman({ cards }: Props) {
  // const handleAddButton = (ev: SyntheticEvent) => {
  //   return '😺';
  // };

  const [newGenList, setGentList] = useState(cards);

  const handleDeleteButton = (cardId: number) => {
    const userToDelete = newGenList.filter((user) => user.id !== cardId);
    setGentList(userToDelete);
  };

  return (
    <main className="main">
      <ul className="gentlemen">
        {newGenList.map((card) => (
          <li key={card.name} className="gentleman">
            <div className="gentleman__avatar-container">
              <img
                className="gentleman__avatar"
                src={'img/' + card.picture}
                alt="The Fary pointing at you"
              />
              <span className="gentleman__initial">F</span>
            </div>
            <div className="gentleman__data-container">
              <h2 className="gentleman__name">{card.name}</h2>
              <ul className="gentleman__data-list">
                <li className="gentleman__data">
                  <span className="gentleman__data-label">Profession:</span>
                  {card.profession}
                </li>
                <li className="gentleman__data">
                  <span className="gentleman__data-label">Status:</span>{' '}
                  {card.status}
                </li>
                <li className="gentleman__data">
                  <span className="gentleman__data-label">Twitter:</span>{' '}
                  {card.twitter}
                </li>
              </ul>
            </div>
            <i className="icon gentleman__icon fas fa-check"></i>
            <i
              onClick={() => handleDeleteButton(card.id)}
              className="icon gentleman__icon gentleman__icon--delete fas fa-times"
            ></i>
          </li>
        ))}
      </ul>
    </main>
  );
}
