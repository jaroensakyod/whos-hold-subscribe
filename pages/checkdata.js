import { useRouter } from 'next/router'
import axios from "axios";
import styles from '../styles/checkdata.module.scss'
import { Header } from "../component/header"
import { Bodys } from "../component/bodys"
import { Footer } from "../component/footer"
import Link from 'next/link';


export default function Succ() {
          const router = useRouter()
          const { nftAddress, ownerDiscordId, discordGuildId, ownerWalletAddress, projectName, totalSupply, symbol, website, facebook ,twitter, discordInviteLink, etherscan, planId, roleName  } = router.query
          const verifyHolder = async (nftAddress, ownerDiscordId, discordGuildId, ownerWalletAddress, projectName, totalSupply, symbol, website, facebook ,twitter, discordInviteLink, etherscan, planId, roleName) => {
                    try {
                              const response = await axios.post(
                                        `http://68.183.176.4:3000/v1/subscription/subscribe`,
                                        {
                                                nftAddress: nftAddress,
                                                ownerDiscordId: ownerDiscordId,
                                                discordGuildId: discordGuildId,
                                                ownerWalletAddress:ownerWalletAddress,
                                                projectName:projectName,
                                                totalSupply:totalSupply,
                                                symbol:symbol,
                                                website:website,
                                                facebook:facebook,
                                                twitter:twitter,
                                                discordInviteLink:discordInviteLink,
                                                etherscan:etherscan,
                                                planId:planId,
                                                roleName:roleName
                                        }
                                        
                                      );
                                      router.push(<Link href="/success"></Link>)
                    } catch(e){
                              const guild = JSON.stringify(discordGuildId)
                              return alert("GuildId: "+ (guild) +" is already!");
                    }
                    
           
          };
          return <>
                    <div>
                    <Header />
                    <main>
                      <Bodys />
                              
                      <div class={styles.outerdiv}>
                                        <div class={styles.innerdiv}>
                                                  <div class={styles.front}>
                                                            <div class={styles.front__bkgphoto}></div>
                                                            <div class={styles.front__facephoto}></div>
                                                            <div class={styles.front__text}>
                                                                      <h3 class={styles.front__textheader}>{projectName}</h3>
                                                                      <h1 class={styles.front__textheader}>{totalSupply}</h1>
                                                                      <h3 class={styles.front__textheader}>Guild ID {discordGuildId}</h3>
                                                                      <p class={styles.front__textpara}>Discord ID {ownerDiscordId}</p>

                                                                      
                                                            </div>
                                                  </div>
                                                  <div class={styles.back}>
                                                            
                                                                      
                                                                      <p class={styles.front__textpara}>nft Address : {nftAddress}</p>
                                                                      <p class={styles.front__textpara}>ownerWalletAddress: {ownerWalletAddress} </p>
                                                                      <p class={styles.front__textpara}>symbol: {symbol} </p>
                                                                      <p class={styles.front__textpara}>website: {website} </p>
                                                                      <p class={styles.front__textpara}>facebook: {facebook} </p>
                                                                      <p class={styles.front__textpara}>twitter: {twitter} </p>
                                                                      <p class={styles.front__textpara}>discordInviteLink: {discordInviteLink} </p>
                                                                      <p class={styles.front__textpara}>etherscan: {etherscan} </p>
                                                                      <p class={styles.front__textpara}>roleName: {roleName} </p>
                                                                      <button  className="verify-button" onClick={() => verifyHolder(nftAddress, ownerDiscordId, discordGuildId, ownerWalletAddress, projectName, totalSupply, symbol, website, facebook ,twitter, discordInviteLink, etherscan, planId, roleName)}> Verify</button>
                                                                      <Link href="/register" className="back-button">Back</Link>
                                                  </div>              
                                                  
                                        </div>
                              </div> 
                    
                             
                    </main>
              
                   
                  </div>

                  <Footer/>

          </>

}
