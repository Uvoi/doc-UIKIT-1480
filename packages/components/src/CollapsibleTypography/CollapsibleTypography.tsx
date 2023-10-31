import { PropsWithChildren, forwardRef } from 'react';

import { TypographyProps } from '../Typography';
import { Button } from '../Button';

import { CollapsibleTypographyWrapper, CollapsibleWrapper } from './styles';
import { useCollabsible } from './hooks';

type CollapsibleProps = {
  /**
   * @example <CollapsibleTypography rowsCount={2} />
   * Максимиально отображаемое колличество строк
   */
  rowsCount?: number;
  /**
   * Текст кнопки для показа сокрытого текста
   *
   */
  textShowButton?: string;
  /**
   * Текст кнопки скрытия контента
   *
   */
  textHideButton?: string;
};

export type CollapsibleTypographyProps = PropsWithChildren<
  CollapsibleProps & TypographyProps
>;

/**
 * Компонент даёт возможность скрывать часть текста по строкам, и показывать их при нажатии на кнопку
 */
export const CollapsibleTypography = forwardRef<
  HTMLElement,
  CollapsibleTypographyProps
>(
  (
    {
      children,
      rowsCount = 1,
      textShowButton = 'Показать полностью',
      textHideButton = 'Скрыть',
      ...props
    },
    forwardedRef,
  ) => {
    const {
      ref,
      isOpenCollapse,
      toggleCollapse,
      isCollapsable,
      currentHeight,
    } = useCollabsible(forwardedRef);

    const collapsibleProps = {
      ...props,
      children,
      rowsCount,
      ref,
      isOpenCollapse,
      currentHeight,
    };

    return (
      <CollapsibleWrapper>
        <CollapsibleTypographyWrapper {...collapsibleProps} />
        {isCollapsable && (
          <Button variant="link" onClick={toggleCollapse}>
            {isOpenCollapse ? textHideButton : textShowButton}
          </Button>
        )}
      </CollapsibleWrapper>
    );
  },
);