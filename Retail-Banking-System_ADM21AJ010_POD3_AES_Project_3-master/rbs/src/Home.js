import wallpaper from './wallpaper.png';
import { Link } from 'react-router-dom';
const Home = () => {

    return ( 
        <div className="home">
            <div className="image">
                <Link to="/">
                    <img src={wallpaper} alt="" style={
                        {
                            position: "absolute",
                            top: "90px",
                            height: "86%",
                            width: "100%",
                            left: "0px",
                            marginTop:"0.5px",
                            display: 'flex',
                            marginLeft:'0'
                    
                        }
                    } />
                </Link>
            </div>
            {/* <h2>Homepage</h2> */}
        </div>
    );
}
 
export default Home;