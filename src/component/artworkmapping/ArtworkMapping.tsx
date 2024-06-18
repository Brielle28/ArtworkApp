// src/app/artworkmapping/artworkmapping.tsx
'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Artwork } from '../../types/art-api';

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
    <div className="flex flex-wrap items-center justify-center w-full min-h-screen">
      {isLoading ? (
        <div role="status">
          Loading...
        </div>
      ) : (
        artworks.map((artwork) => (
          <div key={artwork.id} className="flex flex-col items-center justify-center text-center bg-black border rounded-lg overflow-hidden m-4 px-6 py-6 max-w-[340px]">
            <Link href={{ pathname: "/artworkpage", query: { id: artwork.id }}} passHref>
             
                <img
                  src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
                  alt={artwork.title}
                  className="w-full h-64 object-cover rounded-lg"
                  style={{ maxHeight: '340px' }}
                />
                <h2 className="font-semibold text-white mt-4">{artwork.title}</h2>
                <p className="text-gray-400 mt-2">View More</p>
             
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default ArtworkMapping;
