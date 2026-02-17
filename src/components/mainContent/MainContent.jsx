import StateCard from "../stateCard/StateCard";
import ProductPage from "../productPage/ProductPage";
import OrderPage from "../orderPage/OrderPage";
import WeatherApi from "../API/WeatherApi";

function MainContent({activePage}) {
    if(activePage === "Products"){
        return <ProductPage />;
    }
    if(activePage === "Orders"){
        return <OrderPage />;
    }
    if (activePage === "WeatherApi") {
        return (
          <main className="main-content">
            <WeatherApi />
          </main>
        );
      }
    return(
        <div className="main-content">
            <h2>Admin Dashboard</h2>
            <div className="card-grid">
                <StateCard title="Total Orders" value={10} />
                <StateCard title="Total Products" value={10} />
            </div>
        </div>
    );
}

export default MainContent;