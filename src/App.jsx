import GarryLogo from '../public/Garry.svg'
function App() {
  return (
    <div className="bg-black gap-4 w-full flex-col h-screen flex items-center justify-center ">
      <div className="  ">
        <img src={GarryLogo} className=' relative z-20' alt="GarryLogo" ></img>

        <div className="absolute inset-0 blur-lg opacity-20  w-full h-full bg-gradient-to-tr from-[#4093e6] via-[#71cff4] to-[#2ef66d] "></div>
        
      </div>
      <p className="text-4xl text-white font-thin font-raleway">
        Welcome to Boilterplate of React + Vite + Tailwindcss 
        <span>- made by Garry</span>
        </p>  

    </div>
  )
}

export default App
