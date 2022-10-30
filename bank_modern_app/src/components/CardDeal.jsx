import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden" /> in a few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We match the credit card to your specific requirements, how you work, where you travel, and what you needs are. We do this through a series of interviews that allow us to find the best card for you.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h=100%]" />
      </div>
    </section>
  )

export default CardDeal