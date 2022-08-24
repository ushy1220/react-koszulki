import styles from './OptionSize.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionSize = ({sizes, currentSize, setCurrentSize}) => {

    return(
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
    )
}

OptionSize.propTypes={
  sizes: PropTypes.array.isRequired,
  currentSize: PropTypes.object.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
};

export default OptionSize;