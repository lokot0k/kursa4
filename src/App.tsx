import React, {useEffect, useState} from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import {Main} from './pages/Main/Main';
import {ProductPage} from './components/ProductPage/ProductPage';
import {Product} from './components/ProductPage/Product/Product';
import {useTransition, animated} from 'react-spring';
import styles from './App.module.sass';


import RouterMobile390 from './AdaptiveRoutes/Mobile390/RouterConfig';
import RouterMobile768 from './AdaptiveRoutes/Mobile768/RouterConfig';
import RouterMobile1024 from './AdaptiveRoutes/Mobile1024/RouterConfig';
import RouterDesktop from './AdaptiveRoutes/Desktop/RouterConfig';
import StoreProvider from './store/StoreProvider';

export const App = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth);
  window.addEventListener('resize', () => setDesktop(window.innerWidth));
  return (
      <div >
          <div className='alert-danger flex-fill p-3' style={{paddingLeft:""}}>ВСЕ, ЧТО ВЫ ЗДЕСЬ ВИДИТЕ, НЕ ИМЕЕТ НИКАКОГО ОТНОШЕНИЯ К РЕАЛЬНОМУ ООО "ПРОМКОМСНАБ" И НЕ НЕСЕТ ЦЕЛИ ОПОРОЧИТЬ ЧЕСТЬ И РЕПУТАЦИЮ КОМПАНИИ. ДАННЫЙ ИНТЕРНЕТ-РЕСУРС СОЗДАН ИСКЛЮЧИТЕЛЬНО В ОБРАЗОВАТЕЛЬНЫХ ЦЕЛЯХ </div>
    <div>
      <StoreProvider>
        {
          isDesktop >= 1440 ?
            (<RouterDesktop/>) :
            (isDesktop >= 1024) ?
              (<RouterMobile1024/>) :
              (isDesktop >= 768) ?
                (<RouterMobile768/>) :
                (<RouterMobile390/>)
        }

      </StoreProvider>
    </div>
      </div>
  );
};
