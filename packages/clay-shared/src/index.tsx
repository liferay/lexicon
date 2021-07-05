/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

export const noop = () => {};
export {ClayPortal} from './Portal';
export {delegate} from './delegate';
export {FocusScope} from './FocusScope';
export {getEllipsisItems} from './getEllipsisItems';
export {Keys} from './Keys';
export {LinkOrButton} from './LinkOrButton';
export {sub} from './sub';
export {observeRect} from './observeRect';
export {useDebounce} from './useDebounce';
export {useFocusManagement, FOCUSABLE_ELEMENTS} from './useFocusManagement';
export {setElementFullHeight} from './setElementFullHeight';
export {useInternalState} from './useInternalState';
export {useMousePosition} from './useMousePosition';
export {MouseSafeArea} from './MouseSafeArea';
export type {IBaseProps as IPortalBaseProps} from './Portal';
export type {TInternalStateOnChange} from './useInternalState';
