'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Artwork } from '../../../types/art-api';
import '../../../app/globals.css';

type ParamsType = {
  id: number;
};

const ArtworkPage = ({ params }: { params: ParamsType }) => {
  const { id } = params;
  const [artworkById, setArtworkById] = useState<Artwork | null>(null);

  const fetchArtworkById = async (): Promise<void> => {
    try {
      const res = await fetch(`https://api.artic.edu/api/v1/artworks/${id}`);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data: { data: Artwork } = await res.json();
      setArtworkById(data.data);
    } catch (error) {
      console.error('Failed to fetch artwork:', error);
    }
  };

  useEffect(() => {
    fetchArtworkById();
  }, [id]);

  console.log(artworkById, 'api response');

  return (
    <>
      <div className="flex w-full items-center justify-center bg-black pb-20 ">
        {artworkById ? (
          <div className="flex w-[85%] flex-row items-center justify-between px-[20px] pt-[30px]">
            <div className="flex w-[50%] flex-col items-start justify-center text-start ">
              <img
                src={`https://www.artic.edu/iiif/2/${artworkById.image_id}/full/843,/0/default.jpg`}
                alt={artworkById.title}
                className="size-[550px] rounded-lg object-cover"
              />
              <div className="flex w-full flex-row items-start justify-between pr-2 text-start">
                <h1 className="mt-4 font-serif text-lg font-semibold uppercase text-white">
                  {artworkById.title}
                </h1>
                <h1 className="mt-4  font-serif text-lg font-semibold uppercase text-white">
                  {artworkById.fiscal_year}
                </h1>
              </div>
            </div>
            <div className="flex w-[45%] flex-col items-center justify-center gap-2 text-center">
              <p className="text-[13px] font-bold text-white">
                {artworkById.copyright_notice}
              </p>
              <p className="w-full font-serif text-[14px] text-white">
                {artworkById.description ||
                  artworkById.exhibition_history ||
                  'This artwork has no description or exhibition history.'}
              </p>
              <Link href="/ArtworkPage">
                <button className="w-[50px] rounded-[5px] bg-white">
                  Back
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex h-screen w-full items-center justify-center">
            <span className="loader"></span>
          </div>
        )}
      </div>
    </>
  );
};

export default ArtworkPage;
