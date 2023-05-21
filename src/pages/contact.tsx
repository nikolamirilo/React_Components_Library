import { ContactProps } from "@/typescript/interfaces/pages";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import Head from "next/head";
import React, { Suspense } from "react";
const Form = dynamic(() => import("@/components/Form"), { suspense: true });
const Map = dynamic(() => import("@/components/Map"), { suspense: true });

const Contact: React.FC = () => {
  const metaDescription = "Site Description";
  return (
    <>
      <Head>
        <title>Contact Title</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <main className="contact">
        <Suspense fallback="">
          <Form />
        </Suspense>
        <Suspense fallback="">
          <Map />
        </Suspense>
      </main>
    </>
  );
};
export default Contact;
