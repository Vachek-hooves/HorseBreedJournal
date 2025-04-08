import {createContext, useReducer} from 'react';
import {HORSES} from '../data/horses';
import {GALLERY} from '../data/gallery';
import {GalleryModal} from '../components/GalleryDcreenComponents';

export const BreedContext = createContext({
  gallery: [],
  breeds: [],
  addBreed: ({breed, image, care, location, description}) => {},
  deleteBred: id => {},
  updateBreed: (id, {breed, image, care, location, description}) => {},
  createPhoto: ({image, breed}) => {},
});

function breedReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = Math.random().toString();
      return [{...action.payload, id: id}, ...state];
    case 'UPDATE':
      // update existed breed.
      //   find the index of required item.
      const updatableBreedIndex = state.findIndex(breed => {
        breed.id === action.payload.id;
      });
      const updatableBreed = state[updatableBreedIndex];
      const updatedItem = {...updatableBreed, ...action.payload.data};
      const updatedBreed = [...state];
      updatedBreed[updatableBreedIndex] = updatedItem;
      return updatedBreed;
    case 'DELETE':
      return state.filter(breed => breed.id !== action.payload);

    default:
      return state;
  }
}

function galleryReducer(state, action) {
  switch (action.type) {
    case 'ADDIMAGE':
      const id = Math.random().toString();
      return [{...action.payload, id: id}, ...state];
    default:
      return state;
  }
}

function commentReducer(state, action) {
  switch (action.type) {
    case 'ADDCOMMENT':
      return [{...action.payload, id: id}, ...state];
    default:
      return state;
  }
}

function BreedContextProvider({children}) {
  const [breedState, dispatch] = useReducer(breedReducer, HORSES);
  const [galleryState, outlet] = useReducer(galleryReducer, GALLERY);
  const [commentState, source] = useReducer(commentReducer);

  function addBreed(breedData) {
    dispatch({type: 'ADD', payload: breedData});
  }

  function deleteBreed(id) {
    dispatch({type: 'DELETE', payload: id});
  }

  function updateBreed(id, breedData) {
    dispatch({type: 'UPDATE', payload: {id: id, data: breedData}});
  }
  function createPhoto(photoData) {
    outlet({type: 'ADDIMAGE', payload: photoData});
  }
  function createComment(text) {
    source({type: 'ADDCOMMENT', payload: text});
  }

  const value = {
    gallery: galleryState,
    breeds: breedState,
    addBreed: addBreed,
    deleteBreed: deleteBreed,
    updateBreed: updateBreed,
    createPhoto: createPhoto,
  };

  return (
    <BreedContext.Provider value={value}>{children}</BreedContext.Provider>
  );
}
export default BreedContextProvider;
