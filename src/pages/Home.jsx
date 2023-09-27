import Heading from "../components/Heading"


const Home = () => {
  return (
    <div className="bg-blue-500 w-full h-screen">
     <div className="bg-blue-500 min-h-screen flex justify-center items-center">
      <div className="bg-white max-w-md w-full h-800 p-8 rounded-lg shadow-lg">
      <Heading/>
        <p className="mt-4">This content is centered on a white background with a fixed height.</p>
      </div>
     </div>
    </div>
  )
}

export default Home