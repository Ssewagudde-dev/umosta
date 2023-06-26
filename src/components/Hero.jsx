import sample from '../assets/illustration-intro.svg'

export const Hero = () => {
  return (
    <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row ">
      <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
        <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
         Lorem ipsum dolor sit amet.
        </h1>
        <p className="max-w-sm text-center text-gray-800 md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quae perferendis explicabo dolore repellendus sequi recusandae repudiandae iste necessitatibus harum?
        </p>
      </div>

      <div className="md:w-1/2">
        <img src={sample} alt="" />
      </div>
    </div>
 

  )
}
