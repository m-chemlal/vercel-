import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='list for car dispo' subtitle='you can chanse your car ' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
