/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
import ClayButton from '@clayui/button';
import ClayDropDown, {Align} from '@clayui/drop-down';
import ClayIcon from '@clayui/icon';
import ClayLabel from '@clayui/label';
import ClayProgressBar from '@clayui/progress-bar';
import ClayTable from '../src';
import React from 'react';
import {boolean, select} from '@storybook/addon-knobs';
import {ClayCheckbox} from '@clayui/form';
import {ClayTableWithEditableRow} from '../src/ClayTableWithEditableRow';
import {ClayTableWithQuickActions} from '../src/ClayTableWithQuickActions';
import {storiesOf} from '@storybook/react';

function ClayCheckboxWithState(props: any) {
	const [value, setValue] = React.useState<boolean>(false);

	return (
		<ClayCheckbox
			checked={value}
			disabled={false}
			indeterminate={false}
			onChange={() => setValue(val => !val)}
		>
			{props.children}
		</ClayCheckbox>
	);
}

const DropDownWithState: React.FunctionComponent<any> = ({
	children,
	...others
}) => {
	const [active, setActive] = React.useState(false);
	return (
		<ClayDropDown
			{...others}
			active={active}
			alignmentPosition={Align.BottomRight}
			onActiveChange={newVal => setActive(newVal)}
			trigger={<ClayIcon spritemap={spritemap} symbol="ellipsis-v" />}
		>
			{children}
		</ClayDropDown>
	);
};

const thumbnail = require('./static/thumbnail_coffee.jpg');

function ClayDropdownWithTrigger() {
	return (
		<DropDownWithState>
			<ClayDropDown.ItemList>
				{[
					{href: '#1', label: 'One'},
					{href: '#2', label: 'Two'},
					{href: '#3', label: 'Three'},
				].map((item, i) => (
					<ClayDropDown.Item href={item.href} key={i}>
						{item.label}
					</ClayDropDown.Item>
				))}
			</ClayDropDown.ItemList>
		</DropDownWithState>
	);
}

const spritemap = require('@clayui/css/lib/images/icons/icons.svg');

storiesOf('ClayTable', module)
	.add('default', () => (
		<ClayTable>
			<ClayTable.Head>
				<ClayTable.Row>
					<ClayTable.Cell expanded headingCell headingTitle>
						{'Teams'}
					</ClayTable.Cell>
					<ClayTable.Cell headingCell headingTitle>
						{'Region'}
					</ClayTable.Cell>
					<ClayTable.Cell headingCell headingTitle>
						{'Country'}
					</ClayTable.Cell>
				</ClayTable.Row>
			</ClayTable.Head>
			<ClayTable.Body>
				<ClayTable.Row>
					<ClayTable.Cell headingTitle>
						{'White and Red'}
					</ClayTable.Cell>
					<ClayTable.Cell>{'South America'}</ClayTable.Cell>
					<ClayTable.Cell>{'Brazil'}</ClayTable.Cell>
				</ClayTable.Row>
				<ClayTable.Row>
					<ClayTable.Cell headingTitle>
						{'White and Purple'}
					</ClayTable.Cell>
					<ClayTable.Cell>{'Europe'}</ClayTable.Cell>
					<ClayTable.Cell>{'Spain'}</ClayTable.Cell>
				</ClayTable.Row>
			</ClayTable.Body>
		</ClayTable>
	))
	.add('with hover', () => {
		const DownloadButton = () => (
			<ClayButton displayType="secondary">{'Download'}</ClayButton>
		);

		const ImageCell = () => (
			<div className="autofit-row">
				<div className="autofit-col">
					<img
						alt="thumbnail"
						className="table-img"
						src={thumbnail}
					/>
				</div>
				<div className="autofit-col autofit-col-expand">
					<div className="table-title">
						<span className="text-truncate-inline">
							<span
								className="text-truncate"
								title="Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds."
							>
								{
									'Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.'
								}
							</span>
						</span>
					</div>
				</div>
			</div>
		);

		const HeadCellTitles = [
			'Image',
			'Origin',
			'Time',
			'Spicy Level',
			'Download',
			'Difficulty',
			'',
		];

		const rowCellItems = [
			'',
			'',
			'',
			'',
			<DownloadButton key={5} />,
			<ClayProgressBar key={6} spritemap={spritemap} value={0} />,
			<ClayDropdownWithTrigger key={7} />,
		];

		return (
			<form>
				<ClayTable
					bodyVerticalAlignment={select(
						'body vertical alignment',
						{bottom: 'bottom', middle: 'middle', top: 'top'},
						'middle'
					)}
					bordered={boolean('bordered', false)}
					headVerticalAlignment={select(
						'head vertical alignment',
						{bottom: 'bottom', middle: 'middle', top: 'top'},
						'middle'
					)}
					headingNoWrap={boolean('heading no wrap', false)}
					hover={boolean('hover', true)}
					noWrap={boolean('no wrap', false)}
					responsive={boolean('responsive', false)}
					responsiveSize={select(
						'responsive size',
						{lg: 'lg', md: 'md', sm: 'sm', xl: 'xl'},
						'sm'
					)}
					striped={boolean('striped', false)}
					tableVerticalAlignment={select(
						'table vertical alignment',
						{bottom: 'bottom', middle: 'middle', top: 'top'},
						'middle'
					)}
				>
					<ClayTable.Head>
						<ClayTable.Row>
							<ClayTable.Cell headingCell>
								<ClayButton displayType="unstyled">
									{'Name'}
								</ClayButton>
								<ClayIcon
									spritemap={spritemap}
									symbol="order-arrow-up"
								/>
							</ClayTable.Cell>
							{HeadCellTitles.map((title, index) => (
								<ClayTable.Cell headingCell key={index}>
									{title}
								</ClayTable.Cell>
							))}
						</ClayTable.Row>
					</ClayTable.Head>
					<ClayTable.Body>
						<ClayTable.Row divider>
							<ClayTable.Cell colSpan={8}>
								{'Folders'}
							</ClayTable.Cell>
						</ClayTable.Row>

						<ClayTable.Row active>
							<ClayTable.Cell expanded headingTitle>
								{'Photos'}
							</ClayTable.Cell>
							{rowCellItems.map((child, index) => (
								<ClayTable.Cell key={index}>
									{child}
								</ClayTable.Cell>
							))}
						</ClayTable.Row>

						<ClayTable.Row>
							<ClayTable.Cell expanded headingTitle>
								{'Videos'}
							</ClayTable.Cell>
							{rowCellItems.map((child, index) => (
								<ClayTable.Cell key={index}>
									{child}
								</ClayTable.Cell>
							))}
						</ClayTable.Row>

						<ClayTable.Row divider>
							<ClayTable.Cell colSpan={8}>
								{'Recipes'}
							</ClayTable.Cell>
						</ClayTable.Row>

						<ClayTable.Row>
							<ClayTable.Cell expanded headingTitle>
								{'Hamburger'}
							</ClayTable.Cell>
							<ClayTable.Cell>
								<ImageCell />
							</ClayTable.Cell>
							<ClayTable.Cell>{'U.S.A'}</ClayTable.Cell>
							<ClayTable.Cell align="right">
								{'10 min.'}
							</ClayTable.Cell>
							<ClayTable.Cell>
								<ClayLabel displayType="success">
									{'No Spicy'}
								</ClayLabel>
							</ClayTable.Cell>
							<ClayTable.Cell>
								<ClayButton displayType="secondary">
									{'Download'}
								</ClayButton>
							</ClayTable.Cell>
							<ClayTable.Cell>
								<ClayProgressBar
									spritemap={spritemap}
									value={2}
								/>
							</ClayTable.Cell>
							<ClayTable.Cell>
								<ClayDropdownWithTrigger />
							</ClayTable.Cell>
						</ClayTable.Row>

						<ClayTable.Row>
							<ClayTable.Cell expanded headingTitle>
								{'Ramen'}
							</ClayTable.Cell>
							<ClayTable.Cell>
								<ImageCell />
							</ClayTable.Cell>
							<ClayTable.Cell>{'China'}</ClayTable.Cell>
							<ClayTable.Cell align="right">
								{'90 min.'}
							</ClayTable.Cell>
							<ClayTable.Cell>
								<ClayLabel displayType="warning">
									{'Spicy'}
								</ClayLabel>
							</ClayTable.Cell>
							<ClayTable.Cell>
								<ClayButton displayType="secondary">
									{'Download'}
								</ClayButton>
							</ClayTable.Cell>
							<ClayTable.Cell>
								<ClayProgressBar
									spritemap={spritemap}
									value={8}
								/>
							</ClayTable.Cell>
							<ClayTable.Cell>
								<ClayDropdownWithTrigger />
							</ClayTable.Cell>
						</ClayTable.Row>

						<ClayTable.Row divider>
							<ClayTable.Cell colSpan={8}>
								{'Chefs'}
							</ClayTable.Cell>
						</ClayTable.Row>

						<ClayTable.Row>
							<ClayTable.Cell expanded headingTitle>
								{'Ferrán Adriá'}
							</ClayTable.Cell>
							{rowCellItems.map((child, index) => (
								<ClayTable.Cell key={index}>
									{child}
								</ClayTable.Cell>
							))}
						</ClayTable.Row>
					</ClayTable.Body>
				</ClayTable>
			</form>
		);
	})
	.add('with table list', () => {
		const HeadCellTitles = [
			'ID',
			'Title',
			'Status',
			'Modified Date',
			'Display Date',
			'Author',
		];

		const rowCellTitles = [
			<ClayCheckboxWithState key={0} />,
			'21146',
			'Some regular text',
			'--',
			'1 Hour Ago',
			'--',
			'Stanley Nelson',
		];

		return (
			<form>
				<ClayTable
					bodyVerticalAlignment={select(
						'body vertical alignment',
						{bottom: 'bottom', middle: 'middle', top: 'top'},
						'middle'
					)}
					bordered={boolean('bordered', false)}
					headVerticalAlignment={select(
						'head vertical alignment',
						{bottom: 'bottom', middle: 'middle', top: 'top'},
						'middle'
					)}
					headingNoWrap={boolean('heading no wrap', false)}
					hover={boolean('hover', true)}
					noWrap={boolean('no wrap', true)}
					responsive={boolean('responsive', false)}
					responsiveSize={select(
						'responsive size',
						{lg: 'lg', md: 'md', sm: 'sm', xl: 'xl'},
						'sm'
					)}
					striped={boolean('striped', false)}
					tableVerticalAlignment={select(
						'table vertical alignment',
						{bottom: 'bottom', middle: 'middle', top: 'top'},
						'middle'
					)}
				>
					<ClayTable.Head>
						<ClayTable.Row>
							<ClayTable.Cell />
							{HeadCellTitles.map((title, index) => (
								<ClayTable.Cell
									headingCell
									headingTitle
									key={index}
								>
									<span className="text-truncate">
										{title}
									</span>
								</ClayTable.Cell>
							))}
						</ClayTable.Row>
					</ClayTable.Head>

					<ClayTable.Body>
						<ClayTable.Row divider>
							<ClayTable.Cell colSpan={9}>
								{'Group 1'}
							</ClayTable.Cell>
						</ClayTable.Row>
						<ClayTable.Row>
							{rowCellTitles.map((title, index) => (
								<ClayTable.Cell key={index}>
									{title}
								</ClayTable.Cell>
							))}
						</ClayTable.Row>
						<ClayTable.Row>
							{rowCellTitles.map((title, index) => (
								<ClayTable.Cell key={index}>
									{title}
								</ClayTable.Cell>
							))}
						</ClayTable.Row>
						<ClayTable.Row>
							{rowCellTitles.map((title, index) => (
								<ClayTable.Cell key={index}>
									{title}
								</ClayTable.Cell>
							))}
						</ClayTable.Row>
					</ClayTable.Body>
				</ClayTable>
			</form>
		);
	})
	.add('with table list striped', () => (
		<form>
			<ClayTable
				bodyVerticalAlignment={select(
					'body vertical alignment',
					{bottom: 'bottom', middle: 'middle', top: 'top'},
					'middle'
				)}
				bordered={boolean('bordered', false)}
				headVerticalAlignment={select(
					'head vertical alignment',
					{bottom: 'bottom', middle: 'middle', top: 'top'},
					'middle'
				)}
				headingNoWrap={boolean('heading no wrap', false)}
				hover={boolean('hover', true)}
				noWrap={boolean('no wrap', false)}
				responsive={boolean('responsive', false)}
				responsiveSize={select(
					'responsive size',
					{lg: 'lg', md: 'md', sm: 'sm', xl: 'xl'},
					'sm'
				)}
				striped={boolean('striped', true)}
				tableVerticalAlignment={select(
					'table vertical alignment',
					{bottom: 'bottom', middle: 'middle', top: 'top'},
					'middle'
				)}
			>
				<ClayTable.Head>
					<ClayTable.Row>
						<ClayTable.Cell headingCell />
						<ClayTable.Cell expanded headingCell headingTitle>
							<span className="text-truncate">
								{'Description'}
							</span>
						</ClayTable.Cell>
						<ClayTable.Cell headingCell>
							<span className="text-truncate">{'Format'}</span>
						</ClayTable.Cell>
						<ClayTable.Cell headingCell>
							<span className="text-truncate">{'Label'}</span>
						</ClayTable.Cell>
						<ClayTable.Cell headingCell />
					</ClayTable.Row>
				</ClayTable.Head>

				<ClayTable.Body>
					<ClayTable.Row>
						<ClayTable.Cell>
							<ClayCheckboxWithState />
						</ClayTable.Cell>
						<ClayTable.Cell expanded headingTitle>
							<span className="text-truncate">
								{
									'Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.'
								}
							</span>
						</ClayTable.Cell>
						<ClayTable.Cell>
							<a href="1">{'JPG'}</a>
						</ClayTable.Cell>
						<ClayTable.Cell>
							<a href="1">{'JPG'}</a>
						</ClayTable.Cell>
						<ClayTable.Cell>
							<ClayDropdownWithTrigger />
						</ClayTable.Cell>
					</ClayTable.Row>
					<ClayTable.Row>
						<ClayTable.Cell>
							<ClayCheckboxWithState />
						</ClayTable.Cell>
						<ClayTable.Cell expanded headingTitle>
							<span className="text-truncate">
								{
									'Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.'
								}
							</span>
						</ClayTable.Cell>
						<ClayTable.Cell>
							<a href="2">{'GIF'}</a>
						</ClayTable.Cell>
						<ClayTable.Cell>
							<a href="2">{'GIF'}</a>
						</ClayTable.Cell>
						<ClayTable.Cell>
							<ClayDropdownWithTrigger />
						</ClayTable.Cell>
					</ClayTable.Row>
					<ClayTable.Row>
						<ClayTable.Cell>
							<ClayCheckboxWithState />
						</ClayTable.Cell>
						<ClayTable.Cell expanded headingTitle>
							<span className="text-truncate">
								{
									'Wings eu, pumpkin spice robusta, kopi-luwak mocha caffeine froth grounds.'
								}
							</span>
						</ClayTable.Cell>
						<ClayTable.Cell>
							<a href="3">{'TIFF'}</a>
						</ClayTable.Cell>
						<ClayTable.Cell>
							<a href="3">{'TIFF'}</a>
						</ClayTable.Cell>
						<ClayTable.Cell>
							<ClayDropdownWithTrigger />
						</ClayTable.Cell>
					</ClayTable.Row>
				</ClayTable.Body>
			</ClayTable>
		</form>
	))
	.add('using EditableRow', () => {
		const [state, setState] = React.useState({
			cells: [
				{
					title: 'White and Red',
				},
				{
					editable: true,
					title: 'South America',
				},
				{
					editable: true,
					title: 'Brazil',
				},
			],
		});

		const onRowUpdated = (cellsUpdated: any, oldCells: any) => {
			const cells = [...state.cells];
			cells[cells.indexOf(oldCells)] = cellsUpdated;
			setState({...state, cells});
		};

		return (
			<ClayTable responsive>
				<ClayTable.Head>
					<ClayTable.Row>
						{['', 'Teams', 'Region', 'Country', ''].map(
							(cell, index) => (
								<ClayTable.Cell
									columnTextAlignment={
										['', 'Teams', 'Region', 'Country', '']
											.length === index
											? 'end'
											: undefined
									}
									expanded={index > 0}
									headingCell
									key={index}
								>
									{cell}
								</ClayTable.Cell>
							)
						)}
					</ClayTable.Row>
				</ClayTable.Head>
				<ClayTable.Body>
					<ClayTableWithEditableRow
						cells={state.cells}
						onRowUpdated={onRowUpdated}
						selectable
					/>
					<ClayTable.Row>
						<ClayTable.Cell />
						<ClayTable.Cell>{'Purple and Yellow'}</ClayTable.Cell>
						<ClayTable.Cell>{'North America'}</ClayTable.Cell>
						<ClayTable.Cell>{'U.S.A'}</ClayTable.Cell>
						<ClayTable.Cell />
					</ClayTable.Row>
				</ClayTable.Body>
			</ClayTable>
		);
	})
	.add('using high-level', () => {
		const columns = [
			{
				dataIndex: 'author',
				render: (title: string) => (
					<p className="table-list-title">{title}</p>
				),
				title: 'Author',
			},
			{
				cellProps: {
					expanded: true,
				},
				dataIndex: 'description',
				title: 'Description',
			},
			{
				dataIndex: 'title',
				title: 'Title',
			},
		];

		const rows = [
			{
				author: 'Manuel Bandeira',
				description: (
					<div className="autofit-row">
						<div className="autofit-col-expand">
							{`Estrela da Manhã is the title of a poem that gives name to a book by the Brazilian poet Manuel Bandeira of 1936.`}
						</div>
						<div className="autofit-col">
							<img
								className="table-img"
								src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Estrela_da_Manh%C3%A3_Manuel_Bandeira_1936.jpg"
							/>
						</div>
					</div>
				),
				dropdownActions: [
					{
						label: 'Edit',
						onClick: () =>
							alert('Edit event from Estrela da Manhã'),
					},
					{
						label: 'Share',
						onClick: () =>
							alert('Share event from Estrela da Manhã'),
					},
				],
				quickActions: [
					{
						href: '#1',
						symbol: 'trash',
					},
					{
						href: '#2',
						symbol: 'download',
					},
					{
						href: '#3',
						symbol: 'expand',
					},
				],
				render: (values: any) => {
					return values.map((value: any, index: number) => (
						<ClayTable.Cell className="bg-light" key={index}>
							{value}
						</ClayTable.Cell>
					))
				},
				title: 'Estrela da Manhã',
			},
			{
				author: 'Manuel Bandeira',
				description: (
					<div className="autofit-row">
						<div className="autofit-col-expand">
							{`Libertinagem is the fourth book of poetry by Brazilian writer Manuel Bandeira, published in 1930. It is composed of 38 poems, among which stand out Pneumothorax, Family Pension, Deeply and I'm Leaving for Pasargada.`}
						</div>
						<div className="autofit-col">
							<img
								className="table-img"
								src="https://d3swacfcujrr1g.cloudfront.net/img/uploads/2000/01/002670084013.jpg"
							/>
						</div>
					</div>
				),
				dropdownActions: [
					{
						label: 'Edit',
						onClick: () => alert('Edit event from Libertinagem'),
						symbolRight: 'edit',
					},
					{
						label: 'Share',
						onClick: () => alert('Share event from Libertinagem'),
						symbolRight: 'edit',
					},
				],
				quickActions: [
					{
						href: '#1',
						symbol: 'trash',
					},
					{
						href: '#2',
						symbol: 'download',
					},
					{
						href: '#3',
						symbol: 'expand',
					},
				],
				title: 'Libertinagem',
			},
			{
				author: 'João Cabral de Melo Neto',
				description: (
					<div className="autofit-row">
						<div className="autofit-col-expand">
							{`Published in 1955 and written between 1954 and 1955, the play is divided into 18 sections and written in heptasyllabic meter, recalling the popular poetry of northeastern Brazil, where Melo Neto was born and lived for most of his life, the cordel.`}
						</div>
						<div className="autofit-col">
							<img
								className="table-img"
								src="https://upload.wikimedia.org/wikipedia/pt/thumb/0/0d/Morte-e-vida-severina-joo-cabral-de-melo-neto.jpg/230px-Morte-e-vida-severina-joo-cabral-de-melo-neto.jpg"
							/>
						</div>
					</div>
				),
				dropdownActions: [
					{
						label: 'Edit',
						onClick: () =>
							alert('Edit event from Morte e Vida Severina'),
						symbolRight: 'edit',
					},
					{
						label: 'Share',
						onClick: () =>
							alert('Share event from Morte e Vida Severina'),
						symbolRight: 'edit',
					},
				],
				quickActions: [
					{
						href: '#1',
						symbol: 'trash',
					},
					{
						href: '#2',
						symbol: 'download',
					},
					{
						href: '#3',
						symbol: 'expand',
					},
				],
				render: (values: any) => {
					return values.map((value: any, index: number) => (
						<ClayTable.Cell className="bg-light" key={index}>
							{value}
						</ClayTable.Cell>
					))
				},
				title: 'Morte e Vida Severina',
			},
		];

		return (
			<ClayTableWithQuickActions
				columns={columns}
				rows={rows}
				spritemap={spritemap}
			/>
		);
	});
