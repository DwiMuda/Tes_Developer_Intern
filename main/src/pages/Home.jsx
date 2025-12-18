import React, { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [displayCount, setDisplayCount] = useState(6);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + 6);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f8f9fa" }}>
      <Navbar />

      <div id="home">
        <Hero />
      </div>

      <section
        id="products"
        style={{
          padding: "80px 40px",
          maxWidth: "1200px",
          margin: "0 auto",
          background: "#fff",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#333",
            marginBottom: "16px",
            fontSize: "36px",
            fontWeight: "700",
          }}
        >
          Our Products
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "48px",
            fontSize: "16px",
          }}
        >
          Discover our curated collection of premium products
        </p>

        {loading && (
          <div
            style={{
              textAlign: "center",
              padding: "60px 20px",
            }}
          >
            <div
              style={{
                display: "inline-block",
                width: "50px",
                height: "50px",
                border: "5px solid #f3f3f3",
                borderTop: "5px solid #667eea",
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
              }}
            ></div>
            <p
              style={{ marginTop: "20px", color: "#667eea", fontSize: "16px" }}
            >
              Loading amazing products...
            </p>
          </div>
        )}

        {error && (
          <div
            style={{
              textAlign: "center",
              padding: "40px 20px",
              background: "#fff5f5",
              borderRadius: "12px",
              border: "2px solid #feb2b2",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            <p style={{ fontSize: "40px", marginBottom: "16px" }}>⚠️</p>
            <p
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#c53030",
                marginBottom: "8px",
              }}
            >
              Oops! Something went wrong
            </p>
            <p style={{ color: "#744210", fontSize: "14px" }}>{error}</p>
          </div>
        )}

        {!loading && !error && (
          <>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: "32px",
                marginBottom: "48px",
              }}
            >
              {products.slice(0, displayCount).map((item) => (
                <Card
                  key={item.id}
                  title={item.title}
                  description={item.description || "No description available"}
                  price={item.price}
                  image={item.thumbnail}
                  rating={item.rating}
                />
              ))}
            </div>

            {displayCount < products.length && (
              <div style={{ textAlign: "center" }}>
                <button
                  onClick={handleLoadMore}
                  style={{
                    padding: "14px 32px",
                    background: "#667eea",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: "600",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#5568d3";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 6px 16px rgba(102, 126, 234, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#667eea";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 12px rgba(102, 126, 234, 0.3)";
                  }}
                >
                  Load More Products ({products.length - displayCount}{" "}
                  remaining)
                </button>
              </div>
            )}
          </>
        )}
      </section>

      <section
        id="contact"
        style={{
          padding: "80px 40px",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h2
          style={{ fontSize: "36px", marginBottom: "16px", fontWeight: "700" }}
        >
          Contact Our Team
        </h2>
        <p
          style={{
            fontSize: "18px",
            marginBottom: "32px",
            maxWidth: "600px",
            margin: "0 auto 32px",
          }}
        >
          Have any inquiries or need assistance? Reach out to us and our team
          will get back to you promptly with all the information you need.
        </p>

        <button
          style={{
            padding: "14px 32px",
            background: "#fff",
            color: "#667eea",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "600",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
          }}
        >
          Contact Us
        </button>
      </section>

      <Footer />

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        @media (max-width: 768px) {
          section {
            padding: 40px 20px !important;
          }
          
          h1 {
            font-size: 32px !important;
          }
          
          h2 {
            font-size: 28px !important;
          }
          
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
