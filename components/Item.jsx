import styles from './item.module.scss';

console.log(JSON.stringify(styles));
export const Item = props => (
    <div className={ styles.item }>
        <div className={ styles.wrapper }>
            <div className={ `${styles.rarity} ${styles[props.rarity]}` }> 
                <div className={ styles.container }>
                </div>
            </div>
        </div>
    </div>
);