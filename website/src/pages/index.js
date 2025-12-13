import Layout from "@theme/Layout";
import HomepageHeader from "../components/HomepageHeader";
import HomepageContent from "../components/HomepageContent";

export default function Home() {
    return (
        <Layout title="Home" description="Landing page for schema project">
            <HomepageHeader />
            <HomepageContent />
        </Layout>
    );
}
