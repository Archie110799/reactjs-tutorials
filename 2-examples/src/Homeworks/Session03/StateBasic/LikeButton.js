import React from 'react';
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';

function LikeButton() {
  // State
  const [like, setLike] = React.useState(false); 

  return (
    <h1>
      {like && (
        <AiFillLike
          onClick={() => {
            setLike(false);
          }}
        />
      )}
      {!like && (
        <AiOutlineLike
          onClick={() => {
            setLike(true);
          }}
        />
      )}
    </h1>
  );
}

export default LikeButton;
