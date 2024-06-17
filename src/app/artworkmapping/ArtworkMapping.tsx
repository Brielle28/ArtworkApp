// src/pages/index.tsx

'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Artwork } from '../../types/art-api';

const ArtworkMapping: React.FC = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const res = await fetch('https://api.artic.edu/api/v1/artworks');
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data: { data: Artwork[] } = await res.json();
        setArtworks(data.data);
      } catch (error) {
        console.error('Failed to fetch artworks:', error);
      }
    };

    fetchArtworks();
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center w-full min-h-screen">
      {artworks.map((artwork) => (
        <div key={artwork.id} className="flex flex-col items-center justify-center text-center bg-black border rounded-lg overflow-hidden m-4 px-6 py-6 max-w-[340px]">
          <Link href={`/artwork/${artwork.id}`} passHref>
            <div className="block">
              <img
                src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
                alt={artwork.title}
                className="w-full h-64 object-cover rounded-lg"
                style={{ maxHeight: '340px' }}
              />
              <h2 className="font-semibold text-white mt-4">{artwork.title}</h2>
            </div>
          </Link>
          <Link href="/pages">
            view more
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ArtworkMapping;
