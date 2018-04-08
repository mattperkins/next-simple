import { Fragment } from 'react'
import Link from 'next/link'
import Head from './Head'
import styles from './styles'
import Nav from './Nav'
import Footer from './Footer'

export default ({children}) => <Fragment>
    <Head title="Party!"/>
        
    <Nav />

    <main>{children}</main>

   <Footer />

    <style jsx global>{styles}</style>

</Fragment>    

    