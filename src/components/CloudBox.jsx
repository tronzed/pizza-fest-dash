import { useState } from "react";

function CloudBox() {


    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");

    // Upload function
    const uploadImage = async () => {
        if (!image) return alert("Please select an image first!");

        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "tron_file_zed"); // from Cloudinary
        data.append("cloud_name", "dyxkr50bl"); // from Cloudinary dashboard

        try {
            const res = await fetch(
                "https://api.cloudinary.com/v1_1/dyxkr50bl/image/upload",
                {
                    method: "POST",
                    body: data,
                }
            );

            const uploadedData = await res.json();
            setUrl(uploadedData.secure_url); // ✅ URL of uploaded image
        } catch (err) {
            console.error("Upload failed:", err);
        }
    };


    return (
        <>

            <div style={{ padding: "20px" }}>
                <h2>Upload Image to Cloudinary</h2>

                {/* File Input */}
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                />

                <button onClick={uploadImage} style={{ marginLeft: "10px" }}>
                    Upload
                </button>

                {/* Show uploaded image */}
                {url && (
                    <div style={{ marginTop: "20px" }}>
                        <p>Uploaded Image:</p>
                        <img src={url} alt="Uploaded" style={{ width: "250px" }} />
                    </div>
                )}
            </div>

        </>
    );
}

export default CloudBox;