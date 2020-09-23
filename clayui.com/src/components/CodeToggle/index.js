/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {useEffect} from 'react';

const CodeToggle = (props) => {
	const handleCodeCollapse = (e) => {
		const isCodeCollapseBtn =
			e.target.classList.contains('btn-collapse--collapse') ||
			e.target.closest('.btn-collapse--collapse');

		if (isCodeCollapseBtn) {
			const codeContainer = e.target.closest('.code-container');

			const codeSampleInfo = codeContainer.querySelector(
				'.code-sample-info'
			);

			codeSampleInfo.classList.toggle('hide');

			const isVisible = codeContainer.classList.contains('expanded');

			const expanded = isVisible ? 'Expand' : 'Collapse';

			codeContainer
				.querySelector('.btn-collapse--collapse')
				.setAttribute('title', expanded);

			codeContainer.classList.toggle('expanded');
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleCodeCollapse, false);

		return () => {
			document.removeEventListener('click', handleCodeCollapse, false);
		};
	});

	return props.children;
};

export default CodeToggle;
