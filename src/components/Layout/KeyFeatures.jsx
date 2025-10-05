import React from 'react'
import PlantCard from '../Prediction/PlantCard';
const backgroundImageUrl = 'url(https://blossomplant.com/assets/images/features-bg.png)'; //
const KeyFeatures = () => {

  return (
    <div className="bg-transparent  h-full border-black z-10 mt-2 mb-2"
 >
       <div className='cards  max-w-[1200px] mx-auto p-3 '>
       <h1 className='text-center text-3xl font-bold p-3 mb-2'>Key Features</h1>
       <div className=' bg-gray-400 rounded-full h-0.5 text-center ml-6 w-full'></div>
            <PlantCard />
       </div>




    </div>
  )
}

export default KeyFeatures
