import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { InlineWidget } from "react-calendly"

const NotFoundPage = () => (
  <Layout>
    <Seo title="Schedule Service" />
    <InlineWidget url="https://calendly.com/wnhollington/schedule-service" />
  </Layout>
)

export default NotFoundPage
