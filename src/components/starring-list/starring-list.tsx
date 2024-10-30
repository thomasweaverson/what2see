import React from 'react';

type StarringListProps = {
  actors: string[];
};

function StarringList({ actors }: StarringListProps): JSX.Element {

  return (
    <span className="film-card__details-value">
      {actors.map((actor, index) => (
        <React.Fragment key={actor}>
          {actor}
          {index < actors.length - 1 && <>, <br /></>}
        </React.Fragment>
      ))}
    </span>
  );
}

export default StarringList;
