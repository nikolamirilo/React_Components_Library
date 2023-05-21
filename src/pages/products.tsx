import { OfferProps } from "@/typescript/interfaces/pages";
import dynamic from "next/dynamic";
import Head from "next/head";
import React, { Suspense } from "react";
import img1 from "../../public/images/offer/1.webp";
import img2 from "../../public/images/offer/2.webp";
import img3 from "../../public/images/offer/3.webp";
import img4 from "../../public/images/offer/4.webp";
import img5 from "../../public/images/offer/5.webp";
import img6 from "../../public/images/offer/6.webp";
import data from "../../translationKeys.json";
const OfferCard = dynamic(() => import("@/components/OfferCard"));

const Offer: React.FC<OfferProps> = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  const metaDescription = "Site Description";
  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <main className="offer">
        <div className="offer-cards">
          {data.offers
            ? data.offers.map((item, idx) => {
                return (
                  <Suspense fallback="" key={idx}>
                    <OfferCard type={item.type} title={item.title} text={item.text} image={images[idx].src} />
                  </Suspense>
                );
              })
            : null}
        </div>
      </main>
    </>
  );
};

export default Offer;
