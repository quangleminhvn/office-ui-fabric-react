import * as React from 'react';
import { Dialog } from './Dialog';
import { IButtonProps } from '../Button';
import { IWithResponsiveModeState } from '../../utilities/decorators/withResponsiveMode';
import { IAccessiblePopupProps } from '../../common/IAccessiblePopupProps';

export interface IDialogProps extends React.Props<Dialog>, IWithResponsiveModeState, IAccessiblePopupProps {
  /**
  * Whether the dialog is displayed.
  * @default false
  */
  isOpen?: boolean;

  /**
  * The type of Dialog to display.
  * @default DialogType.normal
  */
  type?: DialogType;

  /**
  * Whether the overlay is dark themed.
  * @default true
  */
  isDarkOverlay?: boolean;

  /**
  * A callback function for when the Dialog is dismissed from the close button or light dismiss, before the animation completes.
  */
  onDismiss?: (ev?: React.MouseEvent<HTMLButtonElement>) => any;

  /**
   * A callback function which is called after the Dialog is dismissed and the animation is complete.
   */
  onDismissed?: () => any;

  /**
  * The title text to display at the top of the dialog.
  */
  title?: string;

  /**
  * The subtext to display in the dialog.
  */
  subText?: string;

  /**
  * Whether the dialog can be light dismissed by clicking outside the dialog (on the overlay).
  * @default false
  */
  isBlocking?: boolean;

  /**
   * Optional class name to be added to the root class
   */
  className?: string;

  /**
  * Optional override for container class
  */
  containerClassName?: string;

  /**
  * Optional override content class
  */
  contentClassName?: string;

  /**
   * A callback function for when the Dialog content is mounted on the overlay layer
   */
  onLayerDidMount?: () => void;

  /**
   * @deprecated
   * Use onLayerDidMount instead. Deprecated at 0.81.2, to be removed at 1.0.0.
   */
  onLayerMounted?: () => void;

  /**
   * Other top buttons that will show up next to the close button
   */
  topButtonsProps?: IButtonProps[];
}

export enum DialogType {
  /** Standard dialog */
  normal,
  /** Dialog with large header banner */
  largeHeader,
  /** Dialog with an 'x' close button in the upper-right corner */
  close
}