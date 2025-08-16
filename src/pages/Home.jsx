import React, { useState } from 'react';
import taskLogo from '../assets/logo.png';
import Places from '../components/Places';
const Home = () => {
    // state create to store imag 
    const [selectedPlaces, setSelectedPlaces] = useState([]);
    const [modalImage, setModalImage] = useState(null);

    // step 3
    const togglePlace = (place) => {
        if (selectedPlaces.includes(place)) {
            // remove if already selected
            setSelectedPlaces(selectedPlaces.filter(p => p !== place));
        } else {
            // add if not selected
            setSelectedPlaces([...selectedPlaces, place]);
        }
    };

    return (
        <div className=" container  py-4">
            <div className='text-center'>
                <img className='img-fluid' style={{ width: '80px', height: '90px' }} src={taskLogo} alt="" />
                <h1 className="fw-bold p-2" style={{ letterSpacing: '20px' }}>PLACEPICKER</h1>
                <p>create your personal collection of  places you <br />
                    would like to visit or you have visited</p>

                <div className='border border-1 rounded border-primary p-3'>
                    <h1 className="fw-bold fs-3" style={{ color: 'blue' }}>i'd like to visit...</h1>
                    <h5>
                        {/* step 2 */}

                        {selectedPlaces.length === 0 ? "select the places you would like to visit below"
                            : selectedPlaces.map((place, index) => (
                                <span key={index} style={{ marginRight: "10px" }}>
                                    <img onClick={() => setModalImage(place)} src={`/images/${place.img}`} alt={place.name}
                                        style={{ width: "200px", height: "100px", borderRadius: "5px", marginRight: "5px" }} />

                                    <button onClick={() => togglePlace(place)} className="btn btn-sm btn-danger ms-1 h-25 mb-5  ">
                                        ❌</button>
                                </span>
                            ))

                        }

                    </h5>
                </div>
                <div className='mt-3'>
                    <Places togglePlace={togglePlace} selectedPlaces={selectedPlaces} />
                </div>
            </div>


            {/* Bootstrap Modal */}
            {modalImage && (
                <>
                    {/* Backdrop (dark background) */}
                    <div className="modal-backdrop fade show "></div>

                    {/* Modal */}
                    <div className="modal show fade" style={{ display: "block" }}>
                        <div className="modal-dialog modal-lg modal-dialog-centered">
                            <div className="modal-content">

                                {/* Header */}
                                <div className="modal-header">
                                    <h5 className="modal-title">{modalImage.name}</h5>
                                    <button type="button" className="btn-close" onClick={() => setModalImage(null)} ></button>
                                </div>

                                {/* Body */}
                                <div className="modal-body text-center">
                                    <img src={`/images/${modalImage.img}`} alt={modalImage.name} className="img-fluid rounded mb-3 h-25" />
                                    <p>Here is the place you selected: <b>{modalImage.name}</b></p>
                                </div>

                                {/* Footer */}
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" onClick={() => setModalImage(null)}>
                                        OK
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </>
            )}



        </div>


    )
}

export default Home