export const VideoDiv = () => {
    return (
      <div className="flex justify-center items-center ">
        <div className="relative w-[80vw] max-w-[800px] h-[45vw] max-h-[450px] flex items-center justify-center 
            bg-transparent rounded-2xl text-center text-4xl overflow-hidden border-glow border-2 border-[#3d527c]">
          
          {/* Video Placeholder */}
          <span className="text-white text-7xl opacity-30 font-extrabold z-0">AdTask.ai</span>
          
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <img src="/src/assets/utube.png" alt="Video" width={75} height={75} />
          </div>
        </div>
      </div>
    );
  };
  