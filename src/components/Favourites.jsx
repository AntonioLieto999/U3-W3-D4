import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites);
  const dispatch = useDispatch();

  return (
    <div className="container mt-3">
      <h3>Favourites</h3>
      <ul className="list-group">
        {favourites.length === 0 && <li className="list-group-item">Favourite List</li>}
        {favourites.map((company) => (
          <li
            key={company}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <Link>
              to={`/${company}`}
              {company}
            </Link>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => dispatch(removeFavourite(company))}
            >
              remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Favourites;
