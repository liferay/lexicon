/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {useProvider} from '@clayui/core';
import classNames from 'classnames';
import React from 'react';
import {createPortal} from 'react-dom';

const ClayPortalContext = React.createContext<React.RefObject<Element | null> | null>(
	null
);

ClayPortalContext.displayName = 'ClayPortalContext';

const createDivElement = (className?: string, id?: string) => {
	const element = document.createElement('div');

	if (className) {
		element.setAttribute('class', className);
	}

	if (id) {
		element.setAttribute('id', id);
	}

	return element;
};

export interface IBaseProps {
	/**
	 * Class to add to the root element
	 */
	className?: string;

	/**
	 * Id fof the root element
	 */
	id?: string;
}

interface IProps extends IBaseProps {
	children: React.ReactElement | Array<React.ReactElement>;

	/**
	 * Ref of element to render portal into.
	 */
	containerRef?: React.RefObject<Element>;

	/**
	 * Ref of element to render nested portals into.
	 */
	subPortalRef?: React.RefObject<Element>;
}

export const ClayPortal: React.FunctionComponent<IProps> = ({
	children,
	className,
	containerRef,
	id,
	subPortalRef,
}) => {
	const {theme} = useProvider();

	const parentPortalRef = React.useContext(ClayPortalContext);

	const portalRef = React.useRef(
		typeof document !== 'undefined'
			? createDivElement(classNames(theme, className), id)
			: null
	);

	React.useEffect(() => {
		const closestParent =
			parentPortalRef && parentPortalRef.current
				? parentPortalRef.current
				: document.body;

		const elToMountTo =
			containerRef && containerRef.current
				? containerRef.current
				: closestParent;

		if (elToMountTo && portalRef.current) {
			elToMountTo.appendChild(portalRef.current);
		}

		return () => {
			if (portalRef.current) {
				if (typeof portalRef.current.remove === 'function') {
					portalRef.current.remove();
				} else if (elToMountTo) {
					elToMountTo.removeChild(portalRef.current);
				}
			}
		};
	}, [containerRef, parentPortalRef]);

	const content = (
		<ClayPortalContext.Provider
			value={subPortalRef ? subPortalRef : portalRef}
		>
			{children}
		</ClayPortalContext.Provider>
	);

	return portalRef.current
		? createPortal(content, portalRef.current)
		: content;
};
