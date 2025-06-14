
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  return (
    <Layout
      title="404 — Page Not Found"
      description="Sorry, this page does not exist."
    >
      <div className="min-h-[calc(100vh-320px)] flex items-center justify-center bg-calabria-sand py-12">
        <div className="text-center px-4">
          <h1 className="text-7xl font-extrabold font-serif mb-3 text-calabria-terracotta">404</h1>
          <h2 className="text-2xl font-bold mb-6">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            Sorry, the page you are looking for doesn't exist.<br/>
            Похоже, такой страницы нет. Попробуйте начать с главной.
          </p>
          <Button asChild>
            <Link to="/">← Go to Home</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};
export default NotFound;
