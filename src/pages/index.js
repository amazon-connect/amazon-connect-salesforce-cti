import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "Amazon Connect CTI Adapter Salesforce Package",
    description: (
      <>
        The newly updated Amazon Connect CTI Adapter v5 makes it easy to use
        your Amazon Connect contact center with Salesforce to deliver engaging
        service with lower cost at any scale. Amazon Connect is cloud-based,
        self-service, and can be set up in minutes.
      </>
    ),
  },
  {
    title: "Amazon Connect Salesforce Lambdas",
    description: (
      <>
        The AWS Serverless application package contains a set of common Lambda
        functions to be used by Amazon Connect to interact with Salesforce,
        allowing lookup, create and update operations for different Salesforce
        objects, like Contacts and Cases.
      </>
    ),
  },
  {
    title: "Deep Integration between Amazon Connect and Salesforce",
    description: (
      <>
        With those components, customers can build a deep integration between
        the Amazon Connect contact center platform and Salesforce, the leading
        customer relationship management (CRM) platform.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout description="Amazon Connect Salesforce CTI Adapter Documentation">
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
