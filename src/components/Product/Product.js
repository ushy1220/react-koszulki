import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';

const Product = ({name, title, basePrice, colors, sizes}) => {

  //Nowe informacje w stanie o kolorze i o rozmiarze, z pierwszą opcją jako domyślna
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const getPrice = useMemo(() => {
    return(
      basePrice + sizes.find((element) => element.name === currentSize).additionalPrice
    );
  }, [currentSize, basePrice, sizes]);

  /*   
  Przycisk dodaj do koszyka ma pokazywać w konsoli co następuje:
  
  const displayBasket = () => {

    return (
      console.log('Name: ', name),
      console.log('Price: ', getPrice),
      console.log('Size: ', currentSize),
      console.log('Color: ', currentColor)
    );
  };
  
  */

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>

        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {sizes.map(item => (
                <li key={item.name}>
                  <button 
                    type="button" 
                    className={clsx(item.name === currentSize && styles.active)}
                    onClick={() => setCurrentSize(item.name)} // () => funkcja pośrednia, żeby odpaliła się dopiero po kliknięciu
                  >
                    {item.name}
                  </button>
                </li>
              ))} 
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map(item => (
                <li key={item}>
                  <button
                  type="button"
                  className={clsx(styles['color' + item[0].toUpperCase() + item.substr(1).toLowerCase()], item === currentColor && styles.active)}
                  onClick={() => setCurrentColor(item)}
                  >
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <Button 
          className={styles.button}>
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