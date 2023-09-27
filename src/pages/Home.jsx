import Heading from "../components/Heading"


const Home = () => {
  return (
    <div className="bg-blue-500 w-full h-screen">
     <div className="bg-blue-500 min-h-screen flex justify-center items-center">
      <div className="bg-white max-w-md w-full h-800 p-8 rounded-lg shadow-lg space-y-4">
      <Heading/>
        <p className="mt-4">This content is centered on a white background with a fixed height.</p>

        <div className="bg-gray-300 w-340 h-123 rounded-lg flex  p-4 space-x-4">
          <div className="w-80">
            <h1>35 degree celsius</h1>
          </div>
          <div className="w-30">
            <img src="https://tse2.mm.bing.net/th?id=OIP.8Qv9BmqeYXQ5gZFF60kFdgHaFw&pid=Api&P=0&h=180" alt="" />
          </div>
        </div>

        <div className="bg-green-300 w-340 h-123 rounded-lg flex p-4 space-x-4">
          <div className="w-80">
            <div className="bg-black text-white text-center rounded-md ">
              Soil Analysis
            </div>
          </div>
          <div className="w-30">
            <img src="https://tse2.mm.bing.net/th?id=OIP.8Qv9BmqeYXQ5gZFF60kFdgHaFw&pid=Api&P=0&h=180" alt="" />
          </div>
        </div>

        <div className="bg-green-300 w-340 h-123 rounded-lg flex p-4 space-x-4">
          <div className="w-80">
            <div className="bg-black text-white text-center rounded-md ">
              Soil Analysis
            </div>
          </div>
          <div className="w-30">
            <img src="https://tse2.mm.bing.net/th?id=OIP.8Qv9BmqeYXQ5gZFF60kFdgHaFw&pid=Api&P=0&h=180" alt="" />
          </div>
        </div>

        <div className="bg-green-300 w-340 h-123 rounded-lg flex p-4 space-x-4">
          <div className="w-80">
            <div className="bg-black text-white text-center rounded-md ">
              Soil Analysis
            </div>
          </div>
          <div className="w-30">
            <img src="https://tse2.mm.bing.net/th?id=OIP.8Qv9BmqeYXQ5gZFF60kFdgHaFw&pid=Api&P=0&h=180" alt="" />
          </div>
        </div>

        <div className="bg-green-300 w-340 h-123 rounded-lg flex p-4 space-x-4">
          <div className="w-80">
            <div className="bg-black text-white text-center rounded-md ">
              Soil Analysis
            </div>
          </div>
          <div className="w-30">
            <img src="https://tse2.mm.bing.net/th?id=OIP.8Qv9BmqeYXQ5gZFF60kFdgHaFw&pid=Api&P=0&h=180" alt="" />
          </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Home