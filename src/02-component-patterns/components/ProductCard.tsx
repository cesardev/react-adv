import { useProduct } from '../hooks/useProduct';
import { createContext, CSSProperties, ReactElement } from 'react';
import { Product, ProductContextProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export interface Props {
   children?: ReactElement | ReactElement[];
   className?: string;
   product: Product;
   style?: CSSProperties;
}

export const ProductContext = createContext( {} as ProductContextProps );

const { Provider } = ProductContext;

export const ProductCard = ( { children, className, product, style }: Props ) => {

   const { counter, increaseBy } = useProduct();

   return (
      <Provider value={{
         counter,
         increaseBy,
         product
      }}>
         <div
            className={ `${styles.productCard} ${className}` }
            style={ style }
         >

            { children }
      
         </div>
      </Provider>
   );
};
