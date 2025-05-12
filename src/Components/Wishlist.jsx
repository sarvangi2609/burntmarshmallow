import axios from "axios";
import React, { useEffect, useState } from "react";

const Wishlist = () => {
  const [list, setlist] = useState([]);

  const [showModal, setShowModal] = useState(true);


  const FetchListData = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/Wishlist");
      setlist(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const HandleRemove = async (id) => {
    try {
      axios.delete(`http://localhost:3000/Wishlist/${id}`).then((res) => {
        FetchListData();
      });
    } catch (error) {
      console.log(error);
    }
  };

  // share

  const handleShare = (productId) => {
    const shareUrl = `${window.location.origin}/description/${productId}`;
    navigator.clipboard
      .writeText(shareUrl)
      .then(() => {
        alert("Product link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy link:", err);
      });
  };

  // shareall

  const handleShareAll = () => {
    if (list.length === 0) {
      alert("Your wishlist is empty.");
      return;
    }

    const baseUrl = `${window.location.origin}/description/`;
    const shareLinks = list.map((item) => `${baseUrl}${item.id}`).join("\n");

    navigator.clipboard
      .writeText(shareLinks)
      .then(() => {
        alert("All product links copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy links:", err);
      });
  };

  // social media

  const generateShareLinks = () => {
    const baseUrl = `${window.location.origin}/description/`;
    return list.map((item) => `${baseUrl}${item.id}`).join("\n");
  };
  
  const generateEmailLink = () => {
    const subject = "Check out my wishlist!";
    const body = generateShareLinks().replace(/\n/g, "%0D%0A"); 
    return `mailto:?subject=${encodeURIComponent(subject)}&body=${body}`;
  };
  
  
  const generateWhatsAppLink = () => {
    const text = encodeURIComponent("Check out these products from my wishlist:\n" + generateShareLinks());
    return `https://wa.me/?text=${text}`;
  };

  

  useEffect(() => {
    FetchListData();

  }, []);

  return (
    <>

    <div className="mx-auto p-6 mt-5 mb-5" style={{ width: "98%" }}>
      <h1 className="text-2xl font-bold mb-4">Your WishList</h1>

      {/* List Item */}
      <div className="space-y-4">
        {list.map((item) => {
          return (
            <div className="d-flex justify-content-between align-items-center bg-white rounded shadow p-3 mb-3">
              {/* Product Info */}
              <div className="d-flex align-items-center gap-3">
                <img
                  src={item.proimg}
                  alt="Product"
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
                <div>
                  <h5 className="mb-1">
                    {item.title.substring(0, 20) + "..."}
                  </h5>
                  <p className="text-muted mb-0">${item.currentprice}</p>
                </div>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => HandleRemove(item.id)}
                className="btn btn-link text-danger fw-semibold p-0"
              >
                Remove
              </button>
              {/* share button */}

              <button
                className="btn btn-link text-danger fw-semibold p-0"
                onClick={() => handleShare(item.id)}
              >
                Share
              </button>
            </div>
          );
        })}
      </div>

      {/* Share all Item */}
      <button onClick={() => handleShareAll()}  className="btn btn-link text-dark fw-semibold p-0 text-end w-100">
        Share All
      </button>

      {/* shre via social */}

      <div className="d-flex gap-3 mb-4">
  <button
    onClick={handleShareAll}
    className="btn btn-primary"
  >
    Copy All Links
  </button>

  <a
    href={generateEmailLink()}
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-outline-secondary"
  >
    Share via Email
  </a>

  <a
    href={generateWhatsAppLink()}
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-success"
  >
    Share via WhatsApp
  </a>
</div>


    </div>

    {/* Fallback */}
    {showModal && (
      <div
        className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center"
        style={{ zIndex: 1050 }}
        onClick={() => setShowModal(false)}
      >
        <div
          className="bg-white rounded p-4 shadow"
          style={{ width: "90%", maxWidth: "600px" }}
          onClick={(e) => e.stopPropagation()}
        >
          <h5 className="mb-3">All Wishlist Product Links</h5>
          <textarea
            value={generateShareLinks()}
            readOnly
            rows="8"
            className="form-control mb-3"
            style={{ fontSize: "0.9rem" }}
          />
          <button
            onClick={() => {
              navigator.clipboard.writeText(generateShareLinks());
              alert("Copied to clipboard!");
            }}
            className="btn btn-primary me-2"
          >
            Copy to Clipboard
          </button>
          <button
            onClick={() => setShowModal(false)}
            className="btn btn-secondary"
          >
            Close
          </button>
        </div>
      </div>
    )}

    </>
  );
};

export default Wishlist;
