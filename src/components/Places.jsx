import React from 'react'
import './Places.css'
import { Modal } from 'bootstrap'
// step4
const Places = ({ togglePlace, selectedPlaces }) => {
  const places = [
    { name: "Forest Waterfall", img: "forest-waterfall.jpg" },
    { name: "African Savanna", img: "african-savanna.jpg" },
    { name: "Amazon River", img: "amazon-river.jpg" },
    { name: "Caribbean Beach", img: "caribbean-beach.jpg" },
    { name: "Desert Dunes", img: "desert-dunes.jpg" },
    { name: "Grand Canyon", img: "grand-canyon.jpg" },
    { name: "great Barrier reef", img: "great-barrier-reef.jpg" },
    { name: "Japanese temple", img: "japanese-temple.jpg" }
  ]
  return (
    <div className='border border-1 rounded border-primary p-3'>
      <h3 className='mt-3' style={{ color: 'blue' }}>Available places</h3>

      <div className='row'>
        {/* card 1 */}
        {places.map((place, index) => (
          <div key={index} className="col-md-3 col-sm-6 mb-4">
            <div className="card h-100 position-relative"> 
              {/* step5 */}
              <img src={`/images/${place.img}`} alt={place.name} className={`card-img-top ${selectedPlaces.includes(place) ? "border border-primary" : ""}`} onClick={() => togglePlace(place)}
              style={{ cursor: "pointer" }} />
              {/* Overlay text at bottom-right */}
              <div className="position-absolute bottom-0 end-0 m-2 px-2 py-1 bg-warning rounded text-white fs-6">
                {place.name}
              </div>
            </div>
          </div>

        ))}

      </div>
    </div>
    
  )
}

export default Places