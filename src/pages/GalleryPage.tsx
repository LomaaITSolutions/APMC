// src/pages/Gallery.tsx
import React, { useState } from "react";
import Header from "@/components/Header"; // Import your Header component

interface ImageItem {
  id: number;
  src: string;
  alt: string;
  category?: string;
}

const images: ImageItem[] = [
  { id: 1, src: "https://media.istockphoto.com/id/1285443833/photo/male-doctor-talking-to-group-of-people-on-presentation-in-the-hospital.jpg?s=612x612&w=0&k=20&c=QM1zk1tr5ZJfXuzHNJPWVhJ3H3dn7GvsrKC90d6TB8A=", alt: "Medical Seminar", category: "Events" },
  { id: 2, src: "https://t3.ftcdn.net/jpg/03/05/64/02/360_F_305640264_LQpbXjvsIj9IzDA8tfNAddTxBxYtLiYX.jpg", alt: "Doctors Meeting", category: "Events" },
  { id: 3, src: "https://media.istockphoto.com/id/1312706504/photo/modern-hospital-building.jpg?s=612x612&w=0&k=20&c=DT6YDRZMH5G5dL-Qv6VwPpVDpIDxJqkAY4Gg0ojGi58=", alt: "Hospital Exterior", category: "Architecture" },
  { id: 4, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkAWqWqZD_Il3J51dUhJIsN0lFSv64cSwiZg&s", alt: "Medical Workshop", category: "Events" },
  { id: 5, src: "https://thumbs.dreamstime.com/b/team-doctors-medical-training-team-doctors-medical-training-workshop-learning-joy-131049893.jpg", alt: "Healthcare Training", category: "Technology" },
  { id: 6, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6RT0XRRhoPYtS0N3SBjmYF8mAFQDr8qGePA&s", alt: "Patient Care", category: "Nature" },
  { id: 7, src: "https://lib.sjp.ac.lk/wp-content/uploads/2022/09/1-1000x562.jpg", alt: "Medical Library", category: "Technology" },
  { id: 8, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuLv7wY6JBbkE93sA6dHROIg_SlE0A0kZtwQ&s", alt: "Hospital Lobby", category: "Architecture" },
];

const categories = ["All", "Events", "Architecture", "Technology", "Nature"];

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <>
      {/* Header */}
      <Header />

      {/* Gallery Section */}
      <div className="min-h-screen bg-gradient-to-b from-teal-700 to-teal-50 p-6">
        {/* Intro Content */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h1 className="text-4xl md:text-4xl font-bold text-white mb-3">
            ANDHRA PRADESH MEDICAL COUNCIL
          </h1>
          <p className="text-white/90 text-[20px]">
            Explore our gallery showcasing events, workshops, seminars, medical facilities, and initiatives.
            Stay updated with the activities and milestones of the Andhra Pradesh Medical Council.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all shadow-md ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-blue-100 hover:text-blue-700"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition duration-300"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-2 text-center font-medium text-gray-800 text-sm">{img.alt}</div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-3xl w-full">
              <button
                className="absolute top-3 right-3 text-white text-3xl font-bold hover:text-red-500"
                onClick={() => setSelectedImage(null)}
              >
                &times;
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full max-h-[75vh] object-contain rounded-lg shadow-xl"
              />
              <div className="mt-3 text-center text-white text-base font-semibold">{selectedImage.alt}</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;