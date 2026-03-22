import Layout from "../components/Layout";
import SEO from "../components/SEO";
import LazySection from "../components/LazySection";

export default function About() {
  return (
    <>
      <SEO
        title="About Tarmac | The Real-Time AI Travel Companion"
        description="Built by former Goldman Sachs and Postman engineers, Tarmac is the only AI travel companion that plans your trip, navigates the chaos, and settles the bill."
        keywords="AI travel companion startup, active travel guide app, spatial RAG travel, intelligent travel assistant, Tarmac founders"
        canonical="/about"
      />
      <Layout>
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="app-title-font app-type-heading text-4xl text-gray-900 mb-8">
              One AI that plans the trip, navigates the chaos, and settles the bill.
            </h1>
            <p className="app-subheading-font app-type-subheading text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Travelers spend an average of 18 hours across dozens of open tabs to plan a trip, only to be abandoned by legacy apps the moment their flight takes off. Tarmac was built to change that. We aren't just a static planner or a basic expense tracker — we are an active AI travel companion that stays by your side. From the initial group chat to navigating sudden on-ground changes in real-time, right down to the final shared bill.
            </p>
          </div>

          <LazySection minHeight={360}>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="app-title-font app-type-heading text-2xl text-gray-900 mb-4">
                  The Mission: Never Travel Alone
                </h2>
                <p className="app-type-body text-gray-600 leading-relaxed">
                  We believe technology should actively guide you, not just give you a checklist. Our mission is to eliminate the friction of group coordination, provide a reliable safety net for solo travelers, and remove the awkwardness of splitting expenses. We are building the ultimate local guide, directly in your pocket.
                </p>
              </div>

              <div>
                <h2 className="app-title-font app-type-heading text-2xl text-gray-900 mb-4">
                  The Tech: Real-Time Spatial Intelligence
                </h2>
                <p className="app-type-body text-gray-600 leading-relaxed">
                  Tarmac isn't a chatbot. Our proprietary Spatial RAG architecture fuses your chat history with live GPS, weather, and local context. This allows our multi-agent engine to proactively push hyper-local recommendations, instantly reroute around canceled plans, and keep everyone synced without you ever needing to type a search.
                </p>
              </div>
            </div>
          </LazySection>
        </div>
      </Layout>
    </>
  );
}
