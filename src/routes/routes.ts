import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
   to: string;
   path: string;
   Component: JSXComponent | LazyExoticComponent<JSXComponent>;
   name: string;
}

const LazyLayoutComponent = lazy( () => import(
   /* webpackChunkName: "LazyLayout" */
   '../01-lazyload/layout/LazyLayout' )
);

export const routes: Route[] = [
   {
      path: '/lazyload/*',
      to: '/lazyload/',
      Component: LazyLayoutComponent,
      name: 'Lazy layout'
   },
   {
      path: '/no-lazy',
      to: 'no-lazy',
      Component: NoLazy,
      name: 'No Lazy'
   }
]