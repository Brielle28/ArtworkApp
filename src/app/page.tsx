import React from 'react';
import '../app/globals.css';
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaRegCopyright } from 'react-icons/fa';
const Page = () => {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center text-center">
        <div className="flex w-[95%] flex-col items-center justify-center text-center">
          <div className="mt-5 flex w-full flex-row items-center justify-between">
            {/* section 1 */}
            <div className="flex flex-row items-center justify-center gap-2 text-center">
              <RxHamburgerMenu />
              <h1 className="text-[20px] font-bold">Galleria</h1>
            </div>
            <div>
              <a
                href="#"
                className="font-sans font-bold underline underline-offset-8 "
              >
                {' '}
                BOOK TICKET{' '}
              </a>
            </div>
          </div>
          {/* section 2 */}
          <div className="mr-[600px] mt-[50px] flex flex-row items-start justify-center gap-1 text-center">
            <h1 className="text-[17px] font-bold"> UNLOCK YOUR </h1>
            <hr className="mt-3 h-[2px] w-[60px] border-0 bg-black" />

            <h1 className="text-[17px] font-bold"> IMAGINATION </h1>
          </div>
          {/* section 3 */}
          <div className="mr-[30px] flex w-[70%] flex-row items-center justify-between">
            <h1 className="font-sans text-[95px] font-normal">
              A <b> JOURNEY </b>
            </h1>
            <p className="mt-3 w-[25%] font-sans text-[15px] leading-6 text-gray-400">
              step into a space where creativity is celebrated
            </p>
          </div>
          {/* section 4 */}
          <div className="flex items-center justify-center gap-2">
            <h5 className="text-[100px] leading-[90px]"> THROUGH ARTS </h5>
            <FaRegCopyright className="mb-[48px] size-[30px]" />
          </div>
          {/* section 5 */}
          <div className="mt-[50px] flex flex-row items-center justify-center">
            <img src="/art1.jpeg" alt="art1" className=" size-[370px]" />
            <img src="/art2.jpeg" alt="art2" className="size-[370px]" />
            <img src="/art3.jpg" alt="art3" className="size-[370px]" />
          </div>
          {/* section 6 */}
          <div className="relative mt-[70px] flex w-full flex-row items-start justify-between">
            <div className="flex w-[50%] flex-col items-start justify-center ">
              <img src="/art14.jpg" alt="art14" className="size-[550px]" />
              <h1 className="ml-2 mt-[50px] font-sans text-[14px] font-medium uppercase">
                current expendition
              </h1>
              <h5 className="mt-5 w-[30%] font-sans text-[70px] font-extralight uppercase leading-[70px]">
                ephemeral <b> beauty </b>
              </h5>
            </div>
            <div className="flex w-[50%] flex-col items-center justify-center text-center">
              <div className="w-full flex-col items-center justify-center">
                <div className="mb-4 flex w-[90%] flex-row items-center justify-between border-b-[1px] border-black">
                  <h3>500+</h3>
                  <h3 className="uppercase">unique artworks</h3>
                </div>
                <div className="mb-4 flex w-[90%] flex-row items-center justify-between border-b-[1px] border-black">
                  <h3>100</h3>
                  <h3 className="uppercase"> featured artists </h3>
                </div>
                <div className="flex w-[90%] flex-row items-center justify-between border-b-[1px] border-black">
                  <h3>20</h3>
                  <h3 className="uppercase"> years of excellence </h3>
                </div>
              </div>
              {/* pictures lining */}
              <div className="mt-[50px] flex flex-row items-start justify-center gap-5">
                <div className="mt-[70px] flex w-[60%] flex-col items-center justify-center">
                  <img
                    src="/art13.jpg"
                    alt="art13"
                    className="mb-4 h-[200px] w-[450px]"
                  />
                  <img
                    src="/art15.jpg"
                    alt="art15"
                    className="h-[200px] w-[450px]"
                  />
                </div>
                <div>
                  <img
                    src="/art16.jpg"
                    alt="art16"
                    className="h-[650px] w-[400px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <Link href="/ArtworkPage">
            <button className="w-[300px] h-[80px] rounded bg-black px-4 py-2 text-white ">
              Click to View More Artistic Displays
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page;
