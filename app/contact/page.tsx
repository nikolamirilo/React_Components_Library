import { ContactProps } from "typescript/interfaces/pages";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import Head from "next/head";
const Form = dynamic(() => import("components/Form"), { suspense: true });
const Map = dynamic(() => import("components/Map"), { suspense: true });

const Contact: React.FC = () => {
    const metaDescription = "Site Description";
    return (
        <>
            <Head>
                <title>Contact Title</title>
                <meta name="description" content={metaDescription} />
            </Head>
            <main className="contact">
                <Form />
                <Map />
            </main>
        </>
    );
};
export default Contact;
