import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div className="">
            <Helmet>
                <title>Home</title>
            </Helmet>
            <h2 className='text-2xl'>This is Home</h2>
        </div>
    );
};

export default Home;