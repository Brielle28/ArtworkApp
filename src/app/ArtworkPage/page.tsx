// src/app/page.tsx

import ArtworkMapping from "@/component/artworkmapping/ArtworkMapping";

const Home: React.FC = () => {
  return (
    <main className="absolute flex w-full flex-col items-center justify-center text-center">
      <div className="flex flex-col items-center justify-center mt-[50px] gap-[5px] ">
        <h1 className="text-[50px] text-black font-mono font-medium">
          DISCOVER
        </h1>
        <h1 className="text-[50px] text-black font-mono font-medium">
          <b>ARTISTIC</b> TAPESTRY 
        </h1>
      </div>

      <div className="flex flex-row items-center justify-center mb-10 gap-[70px]">
        <ArtworkMapping/>
      </div>
    </main>
  );
}

export default Home;






















// // src/app/artworkpage/page.tsx
// 'use client'
// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import { FetchArtworks } from '../artworkmapping/artworkmapping';
// import { Artwork } from '../../types/art-api';

// const ArtworkPage: React.FC = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const [artwork, setArtwork] = useState<Artwork | null>(null);
//   const [isLoading, setIsLoading] = useState<boolean>(false);

//   useEffect(() => {
//     const fetchArtworkById = async (id: string) => {
//       setIsLoading(true);
//       try {
//         const artworks = await FetchArtworks();
//         const selectedArtwork = artworks.find(art => art.id === parseInt(id));
//         setArtwork(selectedArtwork || null);
//       } catch (error) {
//         console.error('Failed to fetch artwork details:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     if (id) {
//       fetchArtworkById(id as string);
//     }
//   }, [id]);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (!artwork) {
//     return <div>Artwork not found.</div>;
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold mb-8">{artwork.title}</h1>
//       <img
//         src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
//         alt={artwork.title}
//         className="w-full h-auto mb-8"
//       />
//       <p className="mt-4">{artwork.description || 'No description available.'}</p>
//     </div>
//   );
// };

// export default ArtworkPage;


// {/* <button
//         onClick={() => setShowDescription(!showDescription)}
//         className="bg-blue-500 text-white px-4 py-2 rounded"
//       >
//         {showDescription ? 'Hide' : 'Show'} Description
//       </button>
//       {showDescription && <p className="mt-4">{artwork.description}</p>}
//     </div> */}
