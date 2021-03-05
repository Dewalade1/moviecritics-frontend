import Head from 'next/head';
import Layout from '../layouts/layout';

import "bootstrap/dist/css/bootstrap.min.css";

import MyCarousel from '../../src/components/carousel';


export default function Home() {

  const tileData = [{
        img: "/images/celebs/Ramsey-Noah/ramseynouah-2.jpg",
        title: 'First slide label', 
        desc: "Nulla vitae elit libero, a pharetra augue mollis interdum.", 
        url: "/images/celebs/Ramsey-Noah/ramseynouah-2.jpg",
        author: "Dewa Ade-Onojobi"
    },{
        img: "/images/celebs/Ramsey-Noah/ramson-bckd.jpg",
        title: 'Second slide label', 
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
        url: "/images/celebs/Ramsey-Noah/ramson-bckd.jpg",
        author: "Dewa Ade-Onojobi"
    },{
        img: "/images/celebs/Ramsey-Noah/ramseynouah-3.jpg",
        title: 'Third slide label', 
        desc: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
        url: "/images/celebs/Ramsey-Noah/ramseynouah-3.jpg", 
        author: "Dewa Ade-Onojobi"
    },{
        img: "/images/celebs/Ramsey-Noah/ramseynouah-4.jpg",
        title: 'Fourth slide label', 
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
        url:"/images/celebs/Ramsey-Noah/ramseynouah-4.jpg",
        author: "Dewa Ade-Onojobi"
    },{
        img: "/images/celebs/Ramsey-Noah/ramseynouah-5.jpg",
        title: 'Fifth slide label', 
        desc: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
        url: "/images/celebs/Ramsey-Noah/ramseynouah-5.jpg", 
        author: "Dewa Ade-Onojobi"
    },{
        img: "/images/celebs/Ramsey-Noah/ramseynouah-6.jpg",
        title: 'Sixth slide label', 
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
        url: "/images/celebs/Ramsey-Noah/ramseynouah-6.jpg",
        author: "Dewa Ade-Onojobi"
    },{
        img: "/images/celebs/Ramsey-Noah/ramseynouah-7.jpg",
        title: 'Seventh slide label', 
        desc: "Nulla vitae elit libero, a pharetra augue mollis interdum.", 
        url: "/images/celebs/Ramsey-Noah/ramseynouah-7.jpg",
        author: "Dewa Ade-Onojobi"
    },{
        img: "/images/celebs/Ramsey-Noah/ramseynouah-8.jpg",
        title: 'Eighth slide label', 
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
        url: "/images/celebs/Ramsey-Noah/ramseynouah-8.jpg",
        author: "Dewa Ade-Onojobi"
    },{
        img: "/images/celebs/Ramsey-Noah/ramseynouah-9.jpg",
        title: 'Ninth slide label', 
        desc: "Nulla vitae elit libero, a pharetra augue mollis interdum.", 
        url: "/images/celebs/Ramsey-Noah/ramseynouah-9.jpg",
        author: "Dewa Ade-Onojobi"
    },{
        img: "/images/celebs/Ramsey-Noah/angels-heart.jpg",
        title: 'Tenth slide label', 
        desc: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.o", 
        url: "https://www.youtube.com/watch?v=z-WIAD4LgnI",
        author: "Dewa Ade-Onojobi"
    }]
    
  return (
    <Layout>
     <MyCarousel/>
      
    </Layout>
  )
}
