import sample from '../assets/react.svg'

export const Partners = () => {
  return (
    
    <div className="container mx-auto mt-24">
      <h1 className="text-3xl text-center font-bold p-8 md:text-4xl">Trusted Partners</h1>
        <div className="flex flex-col flex-wrap space-y-3 justify-around items-center md:flex-row">
          <img src={sample} className="h-auto w-24" alt=""/>
          <img src={sample} className="h-auto w-24" alt=""/>
          <img src={sample} className="h-auto w-24" alt=""/>
          <img src={sample} className="h-auto w-24" alt=""/>
          <img src={sample} className="h-auto w-24" alt=""/>
          <img src={sample} className="h-auto w-24" alt=""/>
        </div>
     
     </div>


  )
}
