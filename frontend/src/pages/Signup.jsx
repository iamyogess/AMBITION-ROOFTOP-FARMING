import { Link } from "react-router-dom"

const Signup = () => {
  return (
    <div className='w-full max-container padding-container h-screen flex justify-center items-center  '>
      <div className=" h-[500px] w-[1000px] flex justify-center items-center border-[1px]">
        <div className='bg-[#2AAA8A] w-[500px] h-full flex flex-col justify-center items-center'>
          <h1 className='p-4 text-center text-white bold-20'>Hello friends <br />Lets create a new account!</h1>
          <span className='regular-16 text-white'>Already Registered? <Link className='regular-14 text-blue-600' to="/login">Login</Link></span>
        </div>
        <div className='w-[500px] flex flex-col justify-center items-center'>
          <h2 className='p-3 bold-32 text-[#2AAA8A]'>Signup Here</h2>
          <form action="" className='flex flex-col gap-4'>
            <input type="text" className='py-2 px-6 border border-gray-300 ' placeholder='Enter your full name.' />
            <input type="text" className='py-2 px-6 border border-gray-300 ' placeholder='Enter your email.' />
            <input type="text" className='py-2 px-6 border border-gray-300 ' placeholder='Enter your password.' />
            <input type="number" min="1" className='py-2 px-6 border border-gray-300 ' placeholder='Enter your house number.' />
            <input type="number" min="1" className='py-2 px-6 border border-gray-300 ' placeholder='Enter your ward number.' />
            <button className="py-2 px-6 bg-[#2AAA8A] text-white border border-transparent hover:border-[#2AAA8A]  hover:bg-transparent transition ease-in-out duration-300 hover:text-[#2AAA8A]">
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup