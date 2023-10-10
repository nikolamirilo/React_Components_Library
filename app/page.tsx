"use client";
import AddNewProduct from "components/AddNewProduct";
import Hero from "sections/Hero";
import Products from "sections/Products";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
import background from "../public/images/hero.jpg";
import { useProductsContext } from "../context/ProductsContext";
const Services = dynamic(() => import("sections/Products"), { suspense: true });
const About = dynamic(() => import("sections/About"), { suspense: true });
const Gallery = dynamic(() => import("sections/Gallery"), { suspense: true });

const Home: React.FC = () => {
    const { products, isLoading } = useProductsContext();
    return (
        <>
            <Head>
                <title>V-Products</title>
                <meta name="description" content="Site Description" />
            </Head>
            <main className="home">
                <Hero
                    type="home"
                    title="V-Products"
                    subtitle="In the modern design world, Lorem Ipsum is the industry standard when placing dummy text onto an unfinished page, whether it's a newspaper, magazine, or advertisement. The Latin text was first used in the 16th century, when a printer scrambled a row of type  so it could be used in a book that showcased the type's quality. This text saw a resurgence when electronic typesetting became popular in the 1960s, mainly because the French typography company Letraset started selling sheets with Lorem Ipsum."
                    image={background.src}
                />
                <AddNewProduct />
                <Products data={products} isLoading={isLoading} />
                <About />
            </main>
        </>
    );
};
export default Home;
