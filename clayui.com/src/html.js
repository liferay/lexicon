/**
 * SPDX-FileCopyrightText: © 2018 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

export default (props) => {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta content="IE=edge" httpEquiv="X-UA-Compatible" />
				<meta
					content="width=device-width, initial-scale=1.0"
					name="viewport"
				/>
				<link
					href="/images/favicon-32x32.png"
					rel="shortcut icon"
					sizes="16x16 32x32"
					type="image/png"
				/>
				<link href="/css/atlas.css" id="clayCSSFile" rel="stylesheet" />
				<link
					href="/css/cadmin.css"
					id="clayCadminFile"
					rel="stylesheet"
				/>
				<link
					href="/css/colors.css"
					id="clayuiCSSFile"
					rel="stylesheet"
				/>

				{props.headComponents}
				<link
					href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css"
					rel="stylesheet"
				/>
				<script src="/js/jquery.min.js" />
				<script src="/js/popper.js" />
				<script src="/js/bootstrap.js" />
			</head>
			<body {...props.bodyAttributes}>
				<div
					dangerouslySetInnerHTML={{__html: props.body}}
					id="___gatsby"
				/>
				{props.postBodyComponents}
				<script src="/js/docs-site.js" />
				<script src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js" />
			</body>
		</html>
	);
};
