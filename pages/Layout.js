import { Fragment } from 'react'
import Link from 'next/link'
import styles from './styles'
import Nav from './Nav'
import Footer from './Footer'

export default ({children}) => <Fragment>
    
    <Nav />

    <main>{children}</main>

   <Footer />

    <style jsx global>{styles}</style>

</Fragment>    

    