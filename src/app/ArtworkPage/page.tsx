'use client'
// src/pages/artwork/[id].tsx

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

type Artwork = {
  id: number;
  title: string;
  image_id: string;
  description: string;
};

const ArtworkPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [artwork, setArtwork] = useState<Artwork | null>(null);
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    if (id) {
      const fetchArtwork = async () => {
        const res = await fetch(`https://api.artic.edu/api/v1/artworks/${id}`);
        const data = await res.json();
        setArtwork({
          id: data.data.id,
          title: data.data.title,
          image_id: data.data.image_id,
          description: data.data.thumbnail.alt_text || 'No description available.'
        });
      };

      fetchArtwork();
    }
  }, [id]);

  if (!artwork) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">{artwork.title}</h1>
      <img
        src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
        alt={artwork.title}
        className="w-full h-auto mb-8"
      />
      <button
        onClick={() => setShowDescription(!showDescription)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {showDescription ? 'Hide' : 'Show'} Description
      </button>
      {showDescription && <p className="mt-4">{artwork.description}</p>}
    </div>
  );
};

export default ArtworkPage;
