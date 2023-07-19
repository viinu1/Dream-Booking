import Header from "../components/Header/header";

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container-fuild">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
