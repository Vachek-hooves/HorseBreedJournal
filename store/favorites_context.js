import {createContext, useState} from 'react';

export const FavoriteContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoriteContextProvider({children}) {
  const [favoriteBreedsIds, setFavoriteBreedsIds] = useState([]);

  function addFavorite(id) {
    setFavoriteBreedsIds(currentFavId => [...currentFavId, id]);
  }

  function removeFavorite(id) {
    setFavoriteBreedsIds(currentFavId =>
      currentFavId.filter(breedId => breedId !== id),
    );
  }

  const value = {
    ids: favoriteBreedsIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContextProvider;
