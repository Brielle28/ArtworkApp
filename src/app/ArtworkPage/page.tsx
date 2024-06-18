// src/app/artworkpage/page.tsx
'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FetchArtworks } from '../artworkmapping/artworkmapping';
import { Artwork } from '../../types/art-api';

const ArtworkPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [artwork, setArtwork] = useState<Artwork | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchArtworkById = async (id: string) => {
      setIsLoading(true);
      try {
        const artworks = await FetchArtworks();
        const selectedArtwork = artworks.find(art => art.id === parseInt(id));
        setArtwork(selectedArtwork || null);
      } catch (error) {
        console.error('Failed to fetch artwork details:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchArtworkById(id as string);
    }
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!artwork) {
    return <div>Artwork not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">{artwork.title}</h1>
      <img
        src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
        alt={artwork.title}
        className="w-full h-auto mb-8"
      />
      <p className="mt-4">{artwork.description || 'No description available.'}</p>
    </div>
  );
};

export default ArtworkPage;


{/* <button
        onClick={() => setShowDescription(!showDescription)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {showDescription ? 'Hide' : 'Show'} Description
      </button>
      {showDescription && <p className="mt-4">{artwork.description}</p>}
    </div> */}
