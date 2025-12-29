import React from 'react'
import '../styles/App.css'
import Review from './Review'

const App = () => {
  return (
    <div>
        <section className='container'>
            <h1 id='review-heading'>Our Reviews</h1>
            <Review />
        </section>
      
    </div>
  )
}

export default App
