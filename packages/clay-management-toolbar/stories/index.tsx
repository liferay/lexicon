/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
import {boolean, select, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import ClayManagementToolbar from '../src';

storiesOf('ClayManagementToolbar', module)
	.add('default', () => (
		<ClayManagementToolbar />
	));