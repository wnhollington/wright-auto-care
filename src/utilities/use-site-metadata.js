
import { useStaticQuery, graphql } from "gatsby";

export const useSiteMetadata = () => {
    const { site } = useStaticQuery(
        graphql`
            query metadata {
                site {
                    siteMetadata {
                        title
                        siteUrl
                        description
                        contact {
                            phone
                            email
                        }
                    }
                }
            }
        `
    ) 
    return site.siteMetadata
}