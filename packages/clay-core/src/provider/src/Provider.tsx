/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayIconSpriteContext} from '@clayui/icon';
import {ClayModalProvider} from '@clayui/modal';
import React, {useContext} from 'react';

interface IProviderProps extends IProviderContext {
	children: React.ReactNode;

	/**
	 * Path to the location of the spritemap resource.
	 */
	spritemap: string;
}

interface IProviderContext {
	/**
	 * The theme corresponds to a CSS class to scope the application.
	 */
	theme?: string;
}

const Context = React.createContext<IProviderContext>({});

Context.displayName = 'ClayProviderContext';

export const Provider = ({
	children,
	spritemap,
	...otherProps
}: IProviderProps) => (
	<Context.Provider value={otherProps}>
		<ClayIconSpriteContext.Provider value={spritemap}>
			<ClayModalProvider>{children}</ClayModalProvider>
		</ClayIconSpriteContext.Provider>
	</Context.Provider>
);

export const useProvider = () => {
	return useContext(Context);
};
