import Head from "next/head";
import Layout from "../components/Layout";


export default function Home({ blogs }) {
  return (
    <div>
      <Head>
        <title>Construcciones MED</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="construcciones med, med, lavalle, cosntruccion, casas, edificios, ladrillos, cosntruccion de casa, argentina, mendoza"
        />
        <meta
          name="keywords"
          content="construcciones med, med, lavalle, cosntruccion, casas, edificios, ladrillos, cosntruccion de casa, argentina, mendoza"
        />
        <meta name="author" content="Gino Pietrobon" />
      </Head>
      <Layout>
        <h1>CONTENIDO</h1>
       
        <style jsx>{`
          
        `}</style>
      </Layout>
    </div>
  );
}
