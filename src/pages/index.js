import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>WPChamp | The Open Privacy Map for WordPress</title>
        <meta
          name="description"
          content="WPChamp is an open-source registry mapping how WordPress plugins, themes, and hosts handle PII/PHI. Empower privacy transparency and compliance."
        />
        <meta
          name="keywords"
          content="WordPress privacy, PII risk, plugin compliance, GDPR, HIPAA, data protection, open-source registry"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.wpchamp.com/" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="WPChamp | WordPress Privacy Risk Map" />
        <meta
          property="og:description"
          content="Explore how WordPress plugins and themes handle personal data. Open-source YAML registry for compliance and trust."
        />
        <meta property="og:image" content="https://www.wpchamp.com/images/og-wpchamp.jpg" />
        <meta property="og:url" content="https://www.wpchamp.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="WPChamp | WordPress Privacy Risk Map" />
        <meta
          name="twitter:description"
          content="Open-source registry of PII and PHI usage in WordPress plugins, themes, and hosts. Built for transparency, compliance, and safety."
        />
        <meta name="twitter:image" content="https://www.wpchamp.com/images/og-wpchamp.jpg" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "WPChamp",
            "description": "WPChamp maps how WordPress plugins, themes, and hosts handle sensitive data like PII and PHI.",
            "applicationCategory": "DeveloperTool",
            "operatingSystem": "All",
            "url": "https://www.wpchamp.com",
            "author": {
              "@type": "Organization",
              "name": "WPChamp"
            }
          }
        `}
        </script>
      </Head>

      <div id="nextjs">
        <Header />
        <main className="container-fluid mainWrapper">
          <div className="row align-center firstRow">
            <section id="mainText" className="col-lg-12 poppins-bold text-center">
              <h1><span className="highlight">WordPress Privacy</span> Starts with Transparency</h1>
              <h2><span className="highlight">Track how plugins and themes use personal data</span>—PII, PHI, cookies, and more.</h2>
              <div className="actions">
                <Link className='btn btn-primary' href="/">Github Repo<i className='bi bi-arrow-right-short'></i></Link>
              </div>
            </section>
          </div>

          <div className="mainRow">
            <div className="row">
              <h2 className="col-lg-12 poppins-bold text-center">Who is WPChamp For?</h2>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 align-items-stretch mt-0">
              <div className="col">
                <div className="border rounded d-flex flex-column box bs_default">
                  <h3>Site Owners</h3>
                  <p className="mb-0">Understand plugin data practices and reduce compliance risk.</p>
                </div>
              </div>
              <div className="col">
                <div className="border rounded d-flex flex-column box bs_default">
                  <h3>Developers</h3>
                  <p className="mb-0">Document your plugin's data use to build trust.</p>
                </div>
              </div>
              <div className="col">
                <div className="border rounded d-flex flex-column box bs_default">
                  <h3>Compliance Teams</h3>
                  <p className="mb-0">Scan and score WordPress environments for PII/PHI exposure.</p>
                </div>
              </div>
              <div className="col">
                <div className="border rounded d-flex flex-column box bs_default">
                  <h3>Researchers</h3>
                  <p className="mb-0">Analyze trends in WordPress data usage and privacy risks.</p>
                </div>
              </div>
            </div>
          </div>

          <section id="keyBenefits" className="mainRow poppins-semibold">
            <div className="row">
              <div className="offset-lg-1 col-lg-10">
                <h2 className='poppins-bold'>Why WPChamp?</h2>
              </div>
            </div>

            <div className="row">
              <div className="offset-lg-1 col-lg-2 cardC">
                <div className="p-3 card bs_default">
                  <h3 className="poppins-semibold">Open Source</h3>
                  <p className="poppins-regular">Transparent YAML-based registry hosted on GitHub.</p>
                </div>
              </div>

              <div className="col-lg-2 cardC">
                <div className="p-3 card bs_default">
                  <h3 className="poppins-semibold">Privacy Scoring</h3>
                  <p className="poppins-regular">Scan and evaluate risk per plugin or entire site.</p>
                </div>
              </div>

              <div className="col-lg-2 cardC">
                <div className="p-3 card bs_default">
                  <h3 className="poppins-semibold">PII/PHI Mapping</h3>
                  <p className="poppins-regular">See what personal data is used and where.</p>
                </div>
              </div>

              <div className="col-lg-2 cardC">
                <div className="p-3 card bs_default">
                  <h3 className="poppins-semibold">Plugin Integration</h3>
                  <p className="poppins-regular">Use the WPChamp plugin to monitor your WordPress install.</p>
                </div>
              </div>

              <div className="col-lg-2 cardC">
                <div className="p-3 card bs_default">
                  <h3 className="poppins-semibold">Compliance-Friendly</h3>
                  <p className="poppins-regular">Built with GDPR, HIPAA, and global laws in mind.</p>
                </div>
              </div>
            </div>
          </section>

          
        </main>
        <Footer />
      </div>
    </>
  );
}
