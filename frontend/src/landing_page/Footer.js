import React from 'react';

function Footer() {
	return (
		<footer className='bg-light'>
			<div className='container border-top '>
				<div className='row mt-5' >
					<div className='col'>
						<img src='media/images/logo.svg' alt='logo' style={{ width: "50%" }} />
						<p className='mt-3'>&copy; 2010 - 2024, Not Zerodha Broking Ltd.
							All rights reserved.</p>
					</div>
					<div className='col ' >
						<p>company</p>
						<a href='#' style={{ textDecoration: "none" }} className='text-muted' >About</a><br />

						<a href='#' style={{ textDecoration: "none" }} className='text-muted' >Products</a><br />

						<a href='#' style={{ textDecoration: "none" }} className='text-muted' >Pricing</a><br />

						<a href='#' style={{ textDecoration: "none" }} className='text-muted' >Referral programme</a><br />

						<a href='#' style={{ textDecoration: "none" }} className='text-muted' >Careers</a><br />

						<a href='#' style={{ textDecoration: "none" }} className='text-muted' >Zerodha.tech</a><br />

						<a href='#' style={{ textDecoration: "none" }} className='text-muted' >Press & media</a><br />

						<a href='#' style={{ textDecoration: "none" }} className='text-muted' >Zerodha cares (CSR)</a><br />

					</div>
					<div className='col'>
						<p>support</p>
						<a href='#' style={{ textDecoration: "none" }} className='text-muted'>Contact</a><br />

						<a href='#' style={{ textDecoration: "none" }} className='text-muted'>Support portal</a><br />

						<a href='#' style={{ textDecoration: "none" }} className='text-muted'>Z-Connect blog</a><br />

						<a href='#' style={{ textDecoration: "none" }} className='text-muted'>List of charges</a><br />

						<a href='#' style={{ textDecoration: "none" }} className='text-muted'>Downloads & resources</a><br />
					</div>
					<div className='col'>
						<p>account</p>
						<a href='#' style={{ textDecoration: "none" }} className='text-muted'>Open an account</a><br />

						<a href='#' style={{ textDecoration: "none" }} className='text-muted'>Fund transfer</a><br />

						<a href='#' style={{ textDecoration: "none" }} className='text-muted'>60 day challenge</a><br />
					</div>
				</div>

				<div className='row mt-5 text-muted'>
					<p>Zerodha Broking Ltd .: Member of NSE, BSE, MCX & MSEI - SEBI Registration no .: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. - SEBI Registration no .: IN-DP-431-2019 Registered Address:
					Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to
					complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
					</p>	
					<p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy
					redressal of the grievances</p>

					<p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

					<p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

					<p>Attention investors: 1 Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2 Update your e-mail and phone number with your stock broker /
					depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3 Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL
					every month.</p>

					<p>India's largest broker based on networth as per NSE. NSE broker factsheet</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
