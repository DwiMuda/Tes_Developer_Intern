import React from "react";

const Card = ({ title, description, price, image, rating }) => {
  return (
    <div style={{
      background: "#fff",
      borderRadius: "16px",
      overflow: "hidden",
      boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      cursor: "pointer",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      border: "1px solid #f0f0f0"
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-12px)";
      e.currentTarget.style.boxShadow = "0 12px 32px rgba(102, 126, 234, 0.2)";
      e.currentTarget.style.borderColor = "#667eea";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)";
      e.currentTarget.style.borderColor = "#f0f0f0";
    }}
    >
      {}
      {image && (
        <div style={{
          width: "100%",
          height: "220px",
          overflow: "hidden",
          background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
          position: "relative"
        }}>
          <img 
            src={image} 
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.4s ease"
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          />
          {rating && (
            <div style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              background: "rgba(255, 255, 255, 0.95)",
              padding: "6px 12px",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}>
              <span style={{ color: "#fbbf24", fontSize: "14px" }}>⭐</span>
              <span style={{ fontSize: "13px", fontWeight: "600", color: "#333" }}>
                {rating}
              </span>
            </div>
          )}
        </div>
      )}
      
      {}
      <div style={{ 
        padding: "24px", 
        flexGrow: 1, 
        display: "flex", 
        flexDirection: "column",
        gap: "12px"
      }}>
        <h3 style={{ 
          color: "#1a202c", 
          margin: 0,
          fontSize: "18px",
          fontWeight: "700",
          lineHeight: "1.4",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          minHeight: "50px"
        }}>
          {title}
        </h3>
        
        <p style={{ 
          color: "#718096", 
          fontSize: "14px",
          lineHeight: "1.6",
          margin: 0,
          flexGrow: 1,
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden"
        }}>
          {description || "No description available"}
        </p>
        
        {}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "16px",
          borderTop: "1px solid #e2e8f0",
          marginTop: "auto"
        }}>
          {price && (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{
                fontSize: "24px",
                fontWeight: "800",
                color: "#667eea",
                lineHeight: 1
              }}>
                ${price}
              </span>
              <span style={{
                fontSize: "11px",
                color: "#a0aec0",
                marginTop: "2px"
              }}>
                Best Price
              </span>
            </div>
          )}
          
          <button style={{
            padding: "10px 20px",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "600",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 6px 16px rgba(102, 126, 234, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(102, 126, 234, 0.3)";
          }}
          onClick={(e) => {
            e.stopPropagation();
            alert(`Added "${title}" to cart!`);
          }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;