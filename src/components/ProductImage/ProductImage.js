import PropTypes from "prop-types";
import styles from './ProductImage.module.scss'

const ProductImage = ({ name, currentColor, title }) => {

    // Renderowanie diva z odpowiednim obrazkiem
    return(
        <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`} />
      </div>
    )
}

ProductImage.propTypes= {
    name: PropTypes.string.isRequired,
    currentColor: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    };
    
export default ProductImage;