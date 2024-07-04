import React from "react";

const VideoSection = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Post Your Requirements</h2>
        <div className="mb-8">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/your_video_id"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p>
          Post your requirements and get matched with the best suppliers in your
          network.
        </p>
      </div>
    </section>
  );
};

export default VideoSection;
