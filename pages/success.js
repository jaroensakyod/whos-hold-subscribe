import styles from '../styles/Getbot.module.css'
import Image from 'next/image'

export default function Success() {
          return <>
                    <aside class={styles.profilecard}>
                              <header className={styles.header}>

                                        <a target="_blank" href="#" className={styles.a}>
                                                  <Image src="https://img.icons8.com/color/452/discord-logo.png" class="hoverZoomLink" />
                                        </a>


                                        <h1 className={styles.h1}>
                                                  NOOB
                                        </h1>


                                        <h2 className={styles.h2}>
                                                  Noob plan
                                        </h2>

                              </header>


                              <div class={styles.profilebio}>

                                        <p>
                                                  Have fun and enjoy with us.
                                        </p>
                                        <p>
                                                  Click on the picture to invite bot.
                                        </p>

                              </div>

                    </aside>
          </>
}