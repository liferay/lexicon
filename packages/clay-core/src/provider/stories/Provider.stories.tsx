/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import {storiesOf} from '@storybook/react';
import React, {useState} from 'react';

import {Provider} from '../';
import {Button, DropDown, Icon} from '../../';

storiesOf('Provider', module)
	.add('spritemap', () => (
		<Provider spritemap={spritemap}>
			<Icon symbol="books" />
			<Icon symbol="times" />
		</Provider>
	))
	.add('theme', () => {
		const [active, setActive] = useState(false);

		return (
			<Provider spritemap={spritemap} theme="cadmin">
				<DropDown
					active={active}
					onActiveChange={setActive}
					trigger={<Button>{'Click here!'}</Button>}
				>
					<DropDown.ItemList>
						<DropDown.Group header="Group #1">
							{[
								{href: '#one', label: 'one'},
								{href: '#two', label: 'two'},
								{href: '#three', label: 'three'},
							].map((item, i) => (
								<DropDown.Item href={item.href} key={i}>
									{item.label}
								</DropDown.Item>
							))}
						</DropDown.Group>
					</DropDown.ItemList>
				</DropDown>
			</Provider>
		);
	});
