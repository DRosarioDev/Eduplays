import { Link } from "react-router-dom";


export default function Home(){

    return (

        <>
            <div className="container-color">
                <h1 className="text-home">Mind Rush</h1>
                <div className="btn-selection">
                    <Link to="/math">
                        <button className="btn">Math</button>
                    </Link>
                    <Link to="/color">
                        <button className="btn">Colors</button>
                    </Link>
                </div>
            </div>
        </>

    );

}

