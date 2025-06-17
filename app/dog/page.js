import React from 'react'

const getDogImage = async () => {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random')
        const data = await response.json()
        return data?.message
    } catch (error) {
        console.error('Error fetching dog image:', error)
        return null
    }
}

async function page() {
    const dogImage = await getDogImage()

  return (
    <div>
      <h1>Random Dog Image</h1>
      {dogImage ? <img src={dogImage} alt="A random dog" /> : <p>Loading...</p>}
    </div>
  )
}

export default page