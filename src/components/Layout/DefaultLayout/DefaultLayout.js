import Footer from "../components/Footer/Footer";
import Header from "../components/Header/header";

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container-fuild">
                <div className="content">{children}</div>
            </div>
            <Footer/>
        </div>
    );
}

export default DefaultLayout;
