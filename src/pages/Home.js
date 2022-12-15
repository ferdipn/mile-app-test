import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { GoogleMap, useLoadScript, MarkerF} from '@react-google-maps/api'
import '../index.css'

const Home =  () => {
    let navigate = useNavigate();

    const isLoggedIn = localStorage.getItem('__c_mileapp_name')
    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login")
        }
    }, [isLoggedIn])

    const handleLogout = () => {
        localStorage.removeItem('__c_mileapp_name')
        navigate("/login")
    }

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyCgE9lheqAKwnMF7019uJUoCTmsA6lALaw'
    })

    const containerStyle = {
        width: '100vw',
        height: '100vh'
      };
    

    const center = {lat: -6.2088, lng: 106.8456}
    const mark1 = {lat: -6.1753924, lng: 106.8226681}
    const mark2 = {lat: -6.1344, lng: 106.8472}
    const mark3 = {lat: -6.2373489, lng: 106.8507361}
    const mark4 = {lat: -6.2185701, lng: 106.7996082}
    const mark5 = {lat: -6.1746757, lng: 106.7878878}

    return (
        <div 
            style={{
                background: '#fff',
            }}
        >
            <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    height: '30px',
                    color: 'white',
                    backgroundColor: 'gray'
            }}>
                <button onClick={handleLogout}>
                    <span style={{ marginRight: '16px'}}>Log out</span>
                </button>
            </div>
            <div>
                {isLoaded &&
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={10}
                    >
                        <MarkerF position={mark1} />
                        <MarkerF position={mark2} />
                        <MarkerF position={mark3} />
                        <MarkerF position={mark4} />
                        <MarkerF position={mark5} />
                    </GoogleMap>
                }
            </div>
        </div>
    )
}

export default Home;