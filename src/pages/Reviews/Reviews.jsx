import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchReviews } from "service/api";

export const Reviews = () => {
    const { movieId } = useParams();
    const [revInfo, setRevInfo] = useState([]);
    useEffect(() => {
      fetchReviews(movieId).then(({ data }) => setRevInfo(data.results));
    });
  
    return (
      <>
        {revInfo.length !== 0 ? (
          <ul>
            {revInfo.map(({ author, content }) => {
              return (
                <li key={author}>
                  <h2>
                    Autor:
                    <span> {author}</span>
                  </h2>
                  <p>{content}</p>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>
            <br />
            Sorry, we dont have any reviews for this movie.
          </p>
        )}
      </>
    );
  };