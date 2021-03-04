import Head from 'next/head';
import Layout from '../layouts/layout';

import "bootstrap/dist/css/bootstrap.min.css";

import MyCarousel from '../../src/components/carousel';


export default function Home() {
  return (
    <Layout>
     <MyCarousel/>
      
    </Layout>
  )
}
