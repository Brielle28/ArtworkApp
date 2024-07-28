import React from 'react';
import '../app/globals.css';
import Link from 'next/link';

const Page = () => {
  return (
    <>
      {/* <div className="marquee flex h-screen w-full items-center justify-center"> */}
      {/* <div className="marquee-content"> */}
      <div>
        <div className='flex flex-col items-center text-center justify-center p-[100px]'>
          <h1 className="text-[50px] font-extrabold">
            HOME PAGE IS COMING SOON. CURRENTLY WORKING ON DYNAMIC ROUTING PAGE
          </h1>
          <Link href="/ArtworkPage">
            <button className="mt-4 rounded bg-blue-500 px-4 py-2 text-white">
              Click to Visit Artwork Page
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page;
