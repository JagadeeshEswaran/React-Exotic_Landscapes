import React from "react";
import { pageLinks, socialLinks } from "../appData";

const Footer = () => {
	return (
		<div>
			<footer className="section footer">
				<ul className="footer-links">
					{pageLinks.map((ele) => {
						return (
							<li key={ele.id}>
								<a href={ele.href} className="footer-link">
									{" "}
									{ele.name}{" "}
								</a>
							</li>
						);
					})}
				</ul>
				<ul className="footer-icons">
					{socialLinks.map((ele) => {
						return (
							<li key={ele.id}>
								<a href={ele.href} target="" className="nav-icon">
									<i className={ele.icon}></i>
								</a>
							</li>
						);
					})}
				</ul>
				<p className="copyright">
					copyright 2023 &copy; Exotic Landscapes Tours company
					<span id="date"></span> all rights reserved
				</p>
			</footer>
		</div>
	);
};

export default Footer;
