import clsx from "clsx";
import PropTypes from "prop-types";
import styles from './OptionColor.module.scss';

const OptionColor = ({colors, currentColor, setCurrentColor}) => {

    const ColorClassName = item => {
        return clsx(styles['color' + item[0].toUpperCase() + item.substr(1).toLowerCase()], item === currentColor && styles.active)
    }

    return(
        <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map(item => (
                <li key={item}>
                  <button
                  type="button"
                  onClick={() => setCurrentColor(item)}
                  className={ColorClassName(item)}
                  >
                  </button>
                </li>
              ))}
            </ul>
          </div>
    )
}

OptionColor.propTypes={
    colors: PropTypes.array.isRequired,
    currentColor: PropTypes.string.isRequired,
    setCurrentColor: PropTypes.func.isRequired
};

export default OptionColor;

/* 
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
*/