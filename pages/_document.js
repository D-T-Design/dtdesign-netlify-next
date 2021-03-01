import Document, { Html, Head, Main, NextScript } from "next/document";

import { GA_TRACKING_ID } from "../lib/gtag";
import { FB_PIXEL_ID } from "../lib/fbp";

export default class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel="icon" href="/dtdesign-icon.jpg" />
					<link rel="stylesheet" href="https://use.typekit.net/rdq5egn.css" />
					{/* Global Site Tag (gtag.js) - Google Analytics */}
					<script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
					<script
						dangerouslySetInnerHTML={{
							__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
						}}
					/>
					{/* Facebook Pixel */}
					<script
						dangerouslySetInnerHTML={{
							__html: `
								!function(f,b,e,v,n,t,s)
								{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
									n.callMethod.apply(n,arguments):n.queue.push(arguments)};
									if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
									n.queue=[];t=b.createElement(e);t.async=!0;
									t.src=v;s=b.getElementsByTagName(e)[0];
									s.parentNode.insertBefore(t,s)}(window, document,'script',
									'https://connect.facebook.net/en_US/fbevents.js');
									fbq('init', '${FB_PIXEL_ID}');
									fbq('track', 'PageView');
              `,
						}}
					/>
					<noscript>
						<img
							height="1"
							width="1"
							style={{ display: "none" }}
							src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
						/>
					</noscript>

					{/* Facebook SDK */}
					<script
						dangerouslySetInnerHTML={{
							__html: `window.fbAsyncInit = function() {
								FB.init({
									appId      : '982745578921499',
									cookie     : true,
									xfbml      : true,
									version    : 'v9.0'
								});
								FB.AppEvents.logPageView();   
							};
							(function(d, s, id){
								var js, fjs = d.getElementsByTagName(s)[0];
								if (d.getElementById(id)) {return;}
								js = d.createElement(s); js.id = id;
								js.src = "https://connect.facebook.net/en_US/sdk.js";
								fjs.parentNode.insertBefore(js, fjs);
							}(document, 'script', 'facebook-jssdk'));`,
						}}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
