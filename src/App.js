import { Route, Routes } from "react-router-dom";
import { Layout, Typography } from "antd";
// import { HomePage, Navbar } from "./components";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Exchanges from "./components/Exchanges/Exchanges";
import Cryptocurrencies from "./components/Cryptocurrencies/Cryptocurrencies";
import CryptoDetails from "./components/CryptoDetails/CryptoDetails";
import News from "./components/News/News";

const App = () => {
	return (
		<div className="app">
			<div className="navbar">
				<Navbar />
			</div>
			<div className="main">
				<Layout>
					<div className="routes">
						<Routes>
							<Route exact path="/" element={<HomePage />} />
							<Route exact path="/exchanges" element={<Exchanges />} />
							<Route
								exact
								path="/cryptocurrencies"
								element={<Cryptocurrencies />}
							/>
							<Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
							<Route exact path="/news" element={<News />} />
						</Routes>
					</div>
				</Layout>
				<div className="footer">
					<Typography.Title
						level={5}
						style={{ color: "#fff", textAlign: "center" }}
					>
						Cryptoverse <br /> All rights reserved
					</Typography.Title>
				</div>
			</div>
		</div>
	);
};

export default App;
