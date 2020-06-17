/*
AALLEELEELEEMMEELEELEELRREELEELELXXYYYZZ
Where:
    AA = Armor ID
    LL = Level
    EE = Enchantment ID
    MM = Melee Weapon ID
    RR  = Ranged Weapon ID
    XX,YY,ZZ = are Artifact IDs

    Example:
        Thief Armor: "TA"
        Level: 34
        Enchantments: Snowball (SB) lvl 1, Potion Shield (PS) lvl 3
        Axe: "AX"
        Level: 31
        Enchantments: Radiance (RA) lvl 3
        Bow: "BW"
        Level: 36
        Enchantments: Growth (GW) lvl 3

        http://mcd-armory.com/armory/TA34SB1PS3XX0AX31RA3XX0XX0BW36GW3XX0XX0XX00XX00XX00

    Alternate:
        {
            armor: {
                name: "Thief Armor"
                level: 34
            }
        }
*/

import styles from './armory.module.scss';
import main from '../main.scss';
import { Item } from '../../components/Item';

const Page = (props) => (
    <div className={styles.container}>
        <div className={styles.character}>
            <Item type="double-axe" rarity="common"/>
            <Item type="melee" rarity="rare"/>
            <Item type="melee" rarity="unique"/>
            <div className={styles.armor}></div>
            <div className={styles.ranged}></div>
            <div className={styles.level}></div>
            <div className={styles.character}></div>
            <div className={styles.power}></div>
            <div className={styles.artifact}></div>
            <div className={styles.artifact}></div>
            <div className={styles.artifact}></div>
        </div>
    </div>
)
 
Page.getInitialProps = async ctx => ({ });

export default Page;