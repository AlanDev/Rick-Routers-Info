import React, { useState } from 'react';
import useCharacterData from '../hooks/api';
import Pagination from '../components/Pagination'
import Episodes from '../components/Episodes';

function EpisodesPage() {
  const { characters, info, error, isLoading, onNext, onPrevious } =
    useCharacterData();

  if (isLoading) {
    return (
      <p className="text-center mt-96 text-4xl font-bold text-[#60a85f]  ">
        Loading characters
      </p>
    );
  }

  if (error) {
    return (
      <div>
        <p className="text-center mt-96 text-4xl font-bold text-[#60a85f] ">
          Ha ocurrido un error
        </p>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <main className="bg-[#fbf976] h-full">
      <div className="flex justify-around mt-20">
        <div className="mt-18">
          <Pagination
            prev={info.prev}
            next={info.next}
            onPrevious={onPrevious}
            onNext={onNext}
          />
          <Episodes characters={characters} />
          <Pagination
            prev={info.prev}
            next={info.next}
            onPrevious={onPrevious}
            onNext={onNext}
          />
        </div>
      </div>
    </main>
  );
}

export default EpisodesPage;