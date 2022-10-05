import Image from 'next/image'
import Layout from './Layout'
import React, {useState} from 'react'
import styles from './Login.module.css'
import { useRouter } from 'next/router'

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter();

    const submitForm = (e) =>{
        e.preventDefault();
        if (username === 'admin' && password === 'admin'){
            router.push('/admin/dashboard')
        }
    }

    return (
        <Layout title="Login">
            <div className='hidden w-full  md:flex bg-white justify-center'>
                <div className={`w-full md:w-1/2 min-h-screen h-full ${styles.backgroundDiv}`}>
                    <div className={`${styles.inverted} flex justify-center`}>
                        <div className={`${styles.logoLogin}`}>
                            <Image src={'/Login/Sans titre.svg'} layout={'fill'} />
                        </div>
                    </div>
                    <div className={`${styles.inverted} flex justify-center`}>
                        <div className={`${styles.imageLogin}`}>
                            <Image src={'/Login/Login Image.svg'} layout={'fill'} />
                        </div>
                    </div>

                </div>
                <div className='w-full md:w-1/2 portrait:w-full h-full px-6'>
                    <div className={`${styles.upperRow} flex justify-between`}>
                        <div className={`${styles.eclipseBox}`}>
                            <div className={`${styles.eclipse1}`} />
                            <div className={`${styles.eclipse2}`} />
                            <div className={`${styles.eclipse3}`} />
                            <div className={`${styles.eclipse4}`} />
                        </div>

                        <div className={`${styles.eclipseBox} ${styles.invertBox}`}>
                            <div className={`${styles.eclipse1}`} />
                            <div className={`${styles.eclipse2}`} />
                            <div className={`${styles.eclipse3}`} />
                            <div className={`${styles.eclipse4}`} />
                        </div>
                    </div>
                    <form onSubmit={submitForm}>
                        <div className={`${styles.loginForm}`}>
                            <div className={`${styles.loginHeading} text-2xl sm:text-3xl md:text-4xl lg:text-5xl`}>
                                Connexion
                            </div>

                            <div className={`${styles.loginRectangle} cursor-pointer flex justify-center items-center md:w-80 lg:w-96 md:py-2 lg:py-3`}>
                                <div className='pr-4 flex justify-center items-center'>
                                    <Image src='/Login/Google.svg' width={30} height={30} />
                                </div>
                                <span className={`${styles.loginInterText} sm:text-lg md:text-xl lg:text-xl`}>Login through Google</span>
                            </div>

                            <div className={`flex items-center justify-center text-[#3f3f3fb0] my-4`}>
                                <div className={`${styles.line} md:w-32 lg:w-36`} />
                                <span className={`${styles.loginInterText} px-2 md:text-lg lg:text-xl`}>or</span>
                                <div className={`${styles.line} md:w-32 lg:w-36`} />
                            </div>

                            <div className={``}>
                                <div className='md:ml-4 lg:ml-8'>
                                    <label htmlFor='email' className={`${styles.loginInterText} text-[#231F20] md:text-lg lg:text-xl`}>
                                        Email*
                                    </label>
                                </div>
                                <input id='email' className={`${styles.inputRectangle} bg-white text-[#231F20]
                            md:w-80 lg:w-96 sm:text-lg md:text-xl lg:text-xl md:py-2 md:px-3 lg:py-3 lg:px-4`}
                                    type={"text"} required onChange={(e)=>setUsername(e.target.value)} />
                            </div>


                            <div className={`${styles.passwordMargin}`}>
                                <div className='md:ml-4 lg:ml-8'>
                                    <label htmlFor='password' className={`${styles.loginInterText} text-[#231F20] md:text-lg lg:text-xl`}>
                                        Password*
                                    </label>
                                </div>
                                <input id='password' className={`${styles.inputRectangle} bg-white text-[#231F20]
                            md:w-80 lg:w-96 sm:text-lg md:text-xl lg:text-xl md:py-2 md:px-3 lg:py-3 lg:px-4`}
                                    type={"password"}  required onChange={(e)=>setPassword(e.target.value)}/>
                            </div>
                            <div className='md:w-80 lg:w-96 md:pl-4 lg:pl-6'>
                                <span className={`${styles.loginInterText} text-[#7A7A7A]`}>
                                    Forget your <span className='text-[#231F20]'>Password?</span>
                                </span>
                            </div>

                            <button type='submit' className={`md:w-72 lg:w-80 bg-black ${styles.borderRadius} flex justify-center
                                        items-center`}>
                                <span className={`${styles.loginInterText} text-white text-xl`}>Login</span>
                            </button>

                        </div>
                    </form>
                </div>
            </div>


            <div className={`md:hidden w-full flex justify-center`}>
                <div className={`${styles.marginMobile} flex flex-col items-center`}>
                    <div className={`ml-12`}>
                        <Image src={'/Login/logo-mobile.svg'} width={176} height={146} />
                    </div>

                    <div className={`${styles.marginMobileForm}`}>
                        <input className={`${styles.mobileInput}`} placeholder="username" type={"text"} />
                    </div>

                    <div className='mt-6'>
                        <input type={"password"} className={`${styles.mobileInput}`} placeholder="password" />
                    </div>

                    <div className='w-[300px] text-right mt-4'>
                        <span className={`${styles.textRoboto}`}>forgot password?</span>
                    </div>

                    <div className='mt-8'>
                        <button onClick={submitForm} type='button' className={`${styles.loginButton}`}>Login</button>
                    </div>

                    <div className=' mt-4'>
                        <span className={`${styles.textRobotoSignup}`}>Don’t have an account, <span className='text-black'>Sign Up</span> now.</span>
                    </div>

                    <div className=' mt-10'>
                        <span className={`${styles.loginInterText} text-xl `}>Or</span>
                    </div>

                    <div className='flex mt-6'>
                        <div className='w-[50px] h-[50px] flex justify-center items-center pr-2'>
                            <Image src={'/Login/google-icon.svg'} width={36} height={36} />
                        </div>
                        <div>
                            <Image src={'/Login/flickr-icon.svg'} width={50} height={50} />
                        </div>
                        <div className='w-[50px] h-[50px] flex justify-center items-center pl-2'>
                            <Image src={'/Login/facebook-icon.svg'} width={36} height={36} />
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    )
}
