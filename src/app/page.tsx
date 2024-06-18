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

      <div className="flex flex-row items-center justify-center mt-5 mb-10 gap-[70px]">
        <ArtworkMapping/>
      </div>
    </main>
  );
}

export default Home;
