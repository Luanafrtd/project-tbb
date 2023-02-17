import { useRef, useState } from "react";
import { Category, Product } from "../App";

export default function useFilter(products: Product[]) {
  const categories = useRef<Category[]>() 
  const [filteredProducts, setFilteredProducts ] = useState(products);

  categories.current = products.reduce((acc, nextProduct) => {

    if(!acc.some(category => category._id === nextProduct.category._id )) {
      acc.push(nextProduct.category)
    }
     return acc
    }, [] as Category[])


    function onFilterByText(text: string) {
      const filteredProducts = products.filter(product => {
        return product.name.includes(text) ||  product.shortDescription.includes(text)
      });

        setFilteredProducts(filteredProducts)
    }


    function onFilterByCategories(selectedCategories: string[]) {
      if(selectedCategories.length === 0 ){
        return setFilteredProducts(products)
      }

      const filteredProducts = products.filter(product => {
      
        return selectedCategories.includes(product.category._id)
        });
  
        setFilteredProducts(filteredProducts)
      }

    return{categories: categories.current, onFilterByText, onFilterByCategories, filteredProducts}
}