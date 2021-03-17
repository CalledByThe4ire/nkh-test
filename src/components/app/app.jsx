import React from 'react';
import styles from './app.module.scss';
import Accordion from '../accordion';
import Grid from '../grid';
import gridStyles from '../grid/grid.module.scss';

const App = () => {
  return (
    <div className={styles.App}>
      <div classnames={styles.AppRow}>
        <h2 className={styles.AppHeader}>
          Обыкновенный аккордеон на&nbsp;React
        </h2>
        <Accordion title="Почему слабопроницаем символ?">
          Механизм сочленений традиционен. Орнаментальный сказ, как&nbsp;бы это
          ни&nbsp;казалось парадоксальным, теоретически возможен. В&nbsp;связи
          с&nbsp;этим нужно подчеркнуть, что ударение дает реципиент.
        </Accordion>
        <Accordion title="Латентный гомеостаз глазами современников">
          Репрезентативная система начинает понимающий стимул.
          По&nbsp;их&nbsp;почти единодушному мнению, бихевиоризм жизненно
          отражает эмпирический эриксоновский гипноз, независимо
          от&nbsp;психического состояния пациента. Действие, как справедливо
          считает Ф.Энгельс, дает аутотренинг одинаково по&nbsp;всем
          направлениям. Объект, в&nbsp;первом приближении, отталкивает импульс,
          таким образом осуществляется своего рода связь с&nbsp;темнотой
          бессознательного. Генезис, конечно, притягивает индивидуальный
          аутотренинг. Эгоцентризм неустойчиво понимает психоз.
        </Accordion>
        <Accordion title="Экзистенциальный архетип: гипотеза и&nbsp;теории">
          Как мы&nbsp;уже знаем, коллективное бессознательное релевантно
          выбирает оппортунический автоматизм. Агрессия, как&nbsp;бы это
          ни&nbsp;казалось парадоксальным, гомогенно дает оппортунический
          эскапизм. Комплекс выбирает методологический гештальт.
        </Accordion>
      </div>
      <div classnames={styles.AppRow}>
        <h2 className={styles.AppHeader}>Сетка (flex)</h2>
        <Grid classModifier={gridStyles.GridFlex} />
        <h2 className={styles.AppHeader}>Сетка (inline-block)</h2>
        <Grid classModifier={gridStyles.GridInlineBlock} />
        <h2 className={styles.AppHeader}>Сетка (float)</h2>
        <Grid classModifier={gridStyles.GridFloat} />
        <h2 className={styles.AppHeader}>Сетка (table)</h2>
        <div className={styles.AppInner}>
          <Grid classModifier={gridStyles.GridTable} />
        </div>
      </div>
    </div>
  );
};

export default App;
