import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import ProductImage from '../ProductImage/ProductImage';
import Button from '../Button/Button';

const Product = ({name, title, basePrice, colors, sizes}) => {

  //Nowe informacje w stanie o kolorze i o rozmiarze, z pierwszą opcją jako domyślna
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const getPrice = useMemo(() => {
    return(
      basePrice + sizes.find((element) => element.name === currentSize).additionalPrice
    );
  }, [currentSize, basePrice, sizes]);

  const displayBasket = (e) => {

    e.preventDefault();

    return (
      console.log('Name: ', title),
      console.log('Price: ', getPrice),
      console.log('Size: ', currentSize),
      console.log('Color: ', currentColor)
    );
  };



  return (
    <article className={styles.product}>

        <ProductImage name={name} title={title} currentColor={currentColor} ></ProductImage>

      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>

        <form onSubmit={displayBasket}>
          <OptionSize sizes={sizes} currentSize={currentSize} setCurrentSize={setCurrentSize}/>
          
          <OptionColor colors={colors} currentColor={currentColor} setCurrentColor={setCurrentColor}/>
          
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
</form>
      </div>
    </article>
    )
};

Product.propTypes= {
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default Product;

/*
 <Optionform colors={colors} sizes={sizes} currentSize={currentSize} currentColor={currentColor} setCurrentColor={setCurrentColor} setCurrentSize={setCurrentSize} clickHandler={clickHandler} /> 
*/