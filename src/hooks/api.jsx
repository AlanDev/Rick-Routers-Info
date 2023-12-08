import React, { useState, useEffect, useReducer } from 'react';

const initialState = {
  characters: [],
  info: {},
  error: '',
  isLoading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'VALIDO':
      return {
        ...state,
        isLoading: false,
        error: '',
        characters: action.payload.results,
        info: action.payload.info,
      };
    case 'ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const useCharacterData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { characters, info, error, isLoading } = state;

  const url = 'https://rickandmortyapi.com/api/character';

  const fetchCharacters = (url) => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error en la base de datos');
        }
        return res.json();
      })
      .then((data) => {
        dispatch({ type: 'VALIDO', payload: data });
      })
      .catch((err) => {
        dispatch({ type: 'ERROR', payload: err.message });
      });
  };

  useEffect(() => {
    fetchCharacters(url);
  }, []);

  const onPrevious = () => {
    fetchCharacters(info.prev);
  };

  const onNext = () => {
    fetchCharacters(info.next);
  };

  return { characters, info, error, isLoading, onNext, onPrevious };
};

export default useCharacterData;
