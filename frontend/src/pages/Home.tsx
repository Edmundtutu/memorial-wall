import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";

const Home = () => {
  return (
    <Layout showFab={false}>
      <div className="text-center py-16 max-w-2xl mx-auto">
        <h1 className="font-serif text-3xl sm:text-4xl text-foreground mb-6">
          A shared space for remembering.
        </h1>
        <p className="font-serif text-lg text-muted-foreground mb-8 leading-relaxed">
          This Memorial Wall was created to honor and remember those we've lost. 
          Each wall is a collection of memories, photos, quotes, and reflections 
          shared by family and friends.
        </p>
        <div className="space-y-4">
          <p className="font-sans text-sm text-muted-foreground">
            To view a memorial wall, please use a valid memorial URL.
          </p>
          <p className="font-sans text-sm text-muted-foreground">
            Memorial URLs follow the format: <code className="px-2 py-1 bg-muted rounded text-foreground">/memorial/[beloved-one's-name]</code>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
