import { Header } from "../component/header"
import { Bodys } from "../component/bodys"
import { Footer } from "../component/footer"
import { Subsubsciptionplan } from "../component/subscribe/homepage.sub"
import styles from "../styles/Home.module.css"


export function Homepage() {
          return(
                    <div className={styles.container}>
                    <Header />
                    <main className={styles.main}>
                      <Bodys />
                      <Subsubsciptionplan/>
              
                    </main>
              
                    <Footer />
                  </div>
          )
}
               
