import {Config} from 'metal-state';

let actionItemShape = {
	disabled: Config.bool().value(false),
	href: Config.string().required(),
	icon: Config.string(),
	id: Config.string(),
	label: Config.string().required(),
	quickAction: Config.bool(),
	separator: Config.bool().value(false),
	title: Config.string(),
	type: Config.oneOf(['group', 'item']).value('item'),
};

const actionItemsValidator = Config.arrayOf(Config.shapeOf(actionItemShape));

actionItemShape.items = actionItemsValidator;

let creationMenuItem = {
	disabled: Config.bool().value(false),
	href: Config.string().required(),
	icon: Config.string(),
	label: Config.string().required(),
	separator: Config.bool().value(false),
	title: Config.string(),
};

const creationMenuItemsValidator = Config.arrayOf(
	Config.shapeOf(creationMenuItem)
);

creationMenuItem.items = creationMenuItemsValidator;

let filterItemShape = {
	checked: Config.bool().value(false),
	disabled: Config.bool().value(false),
	href: Config.string(),
	id: Config.string(),
	inputName: Config.string(),
	inputValue: Config.string(),
	label: Config.string().required(),
	separator: Config.bool().value(false),
	title: Config.string(),
	type: Config.oneOf(['checkbox', 'group', 'item', 'radiogroup']),
};

const filterItemsValidator = Config.arrayOf(Config.shapeOf(filterItemShape));

filterItemShape.items = filterItemsValidator;

export {
	actionItemsValidator,
	creationMenuItemsValidator,
	filterItemsValidator,
};
