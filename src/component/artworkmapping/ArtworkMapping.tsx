// src/app/artworkmapping/artworkmapping.tsx
'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Artwork } from '../../types/art-api';
import '../artworkmapping/ArtworkMapping.css'; // Remove if you are not using custom CSS

export const FetchArtworks = async (): Promise<Artwork[]> => {
  try {
    const res = await fetch('https://api.artic.edu/api/v1/artworks');
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const data: { data: Artwork[] } = await res.json();
    return data.data;
  } catch (error) {
    console.error('Failed to fetch artworks:', error);
    return [];
  }
};

const ArtworkMapping: React.FC = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const date = new Date();
  console.log(date);
  console.log(date.getFullYear(), "year")
  console.log(date.getDate(), "date")
  console.log(date.getTime(), "time")
  console.log(date.getMonth(), "month")
  console.log(date.getHours(), "hour")




  useEffect(() => {
    const fetchArtworks = async () => {
      setIsLoading(true);
      const data = await FetchArtworks();
      setArtworks(data);
      setIsLoading(false);
    };

    fetchArtworks();
  }, []);

  return (
    <div className="mt-10 grid grid-cols-2 gap-6 px-4">
      {isLoading ? (
        <span className="mt-10 loader"></span>
      ) : (
        artworks.map((artwork) => (
          <div
            key={artwork.id}
            className="flex size-[550px] flex-col items-center justify-center overflow-hidden rounded-lg border bg-black p-4"
          >
            <Link href={`/ArtworkPage/${artwork.id}`}>
              <div className="block ">
                <div className="flex flex-col items-center justify-center text-center">
                  <img
                    src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
                    alt={artwork.title}
                    className="size-[400px] rounded-lg object-cover"
                  />
                  <h2 className="mt-4 max-w-[350px] text-lg font-semibold text-white">
                    {artwork.title}
                  </h2>
                  <a className="mt-2 text-gray-400">View More</a>
                </div>
              </div>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default ArtworkMapping;
