import Head from "next/head"

const Layout = ({
    title,
    keywords,
    description,
    children,
}) =>{

    return (
        <div>
        <Head>
          <title>{title}</title>
          <meta
            name="description"
            content={description}
            key="unmediabuzz-key-description"
          />
          <meta
            name="keywords"
            content={keywords}
            key="unmediabuzz-key-keywords"
          />
          </Head>
          <div>{children}</div>
      </div>
    )
    
}

Layout.defaultProps = {
  title:"page | Unmediabuzz",
  description:"unmediabuzz description",
  keywords: "keywords",
}

export default Layout