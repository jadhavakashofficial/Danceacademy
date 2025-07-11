// pages/gallery.js
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const galleryImages = [
    {
      id: 1,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1750241518480.png",
      title: "Classical Kathak Performance",
      description: "Mesmerizing traditional dance presentation"
    },
    {
      id: 2,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1750241194343.png",
      title: "Grace in Motion",
      description: "Elegant expressions of classical art"
    },
    {
      id: 3,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1750240970773.png",
      title: "Cultural Heritage",
      description: "Preserving traditions through dance"
    },
    {
      id: 4,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1750233828980.png",
      title: "Student Excellence",
      description: "Rising stars of Kathak"
    },
    {
      id: 5,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1750233481334.png",
      title: "Learning Journey",
      description: "Dedication in practice"
    },
    {
      id: 6,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1750232506953.png",
      title: "Academy Moments",
      description: "Cherished memories"
    },
    {
      id: 7,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1739431559767.jpeg",
      title: "Artistic Expression",
      description: "Dance as a language of emotions"
    },
    {
      id: 8,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1739432659613.jpeg",
      title: "Perfect Synchronization",
      description: "Harmony in movement"
    },
    {
      id: 9,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1739430747623-scaled.jpeg",
      title: "Master at Work",
      description: "Guru's divine performance"
    },
    {
      id: 10,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1739430044988.jpeg",
      title: "Knowledge Transfer",
      description: "Teaching the next generation"
    },
    {
      id: 11,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1739429006284.jpeg",
      title: "Daily Inspiration",
      description: "Life at the academy"
    },
    {
      id: 12,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1000926100.jpg",
      title: "Rising Stars",
      description: "Future of Kathak"
    },
    {
      id: 13,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1000069339-scaled.jpg",
      title: "Majestic Performance",
      description: "Grand cultural presentation"
    },
    {
      id: 14,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1000046801.jpg",
      title: "Young Talents",
      description: "The future artists"
    },
    {
      id: 15,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1000046504.jpg",
      title: "Community Gathering",
      description: "Celebrating together"
    },
    {
      id: 16,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/18159.jpg",
      title: "Master Class",
      description: "Wisdom in motion"
    },
    {
      id: 17,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/3095.png",
      title: "Cultural Program",
      description: "Heritage celebration"
    },
    {
      id: 18,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/2984-scaled.jpg",
      title: "Traditional Elegance",
      description: "Festival performance"
    },
    {
      id: 19,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/2556-scaled.jpg",
      title: "Teaching Excellence",
      description: "Guru's demonstration"
    },
    {
      id: 20,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/2430-scaled.jpg",
      title: "Individual Brilliance",
      description: "Solo performance mastery"
    },
    {
      id: 21,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/2398-scaled.jpg",
      title: "Practice Perfection",
      description: "Dedication in learning"
    },
    {
      id: 22,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1000926106.jpg",
      title: "Unity in Dance",
      description: "Group performance excellence"
    },
    {
      id: 23,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/IMG_9244-scaled.jpg",
      title: "35 Years of Excellence",
      description: "Academy's proud legacy"
    },
    {
      id: 24,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/1000926102.jpg",
      title: "Success Celebration",
      description: "Achievement moments"
    },
    {
      id: 25,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/3584.jpg",
      title: "Artistry Peak",
      description: "Masterful display"
    },
    {
      id: 26,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/3517-scaled.jpg",
      title: "Magical Moments",
      description: "Evening recital beauty"
    },
    {
      id: 27,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/3117.png",
      title: "Leading Excellence",
      description: "Guru's exemplary performance"
    },
    {
      id: 28,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/2381.jpg",
      title: "Continuing Tradition",
      description: "Academy's lasting legacy"
    },
    {
      id: 29,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/2231-scaled.jpg",
      title: "Timeless Beauty",
      description: "Classical presentation excellence"
    },
    {
      id: 30,
      url: "https://sanchaykathak.com/cms/wp-content/uploads/2025/06/2231-1-scaled.jpg",
      title: "Future of Kathak",
      description: "Student excellence showcase"
    }
  ];

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (lightboxIndex + 1) % galleryImages.length;
    setLightboxIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (lightboxIndex - 1 + galleryImages.length) % galleryImages.length;
    setLightboxIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  return (
    <Layout>
      <Head>
        <title>Gallery | Sanchay Kathak Academy</title>
        <meta name="description" content="Explore our stunning gallery showcasing 35 years of Kathak excellence" />
      </Head>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-900 to-indigo-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Gallery of Excellence</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10">
            35 years of Kathak tradition captured in moments of grace, dedication, and artistic expression
          </p>
          <div className="flex justify-center space-x-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold">{galleryImages.length}+</div>
              <div>Moments</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold">35+</div>
              <div>Years</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold">1000+</div>
              <div>Students</div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Visual Journey Through Dance</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our collection of performances, training sessions, and cultural celebrations that define our legacy
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={image.id}
                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300"
                onClick={() => openLightbox(image, index)}
              >
                <div className="aspect-square relative">
                  <Image
                    src={image.url}
                    alt={image.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <h3 className="text-white font-bold text-lg">{image.title}</h3>
                    <p className="text-white/80 text-sm">{image.description}</p>
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-white/90 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button 
            className="absolute top-6 right-6 text-white text-3xl z-10"
            onClick={closeLightbox}
          >
            &times;
          </button>
          
          <div className="relative max-w-6xl w-full max-h-[90vh]">
            <div className="relative aspect-[16/10]">
              <Image
                src={selectedImage.url}
                alt={selectedImage.title}
                layout="fill"
                objectFit="contain"
              />
            </div>
            
            <div className="bg-black/70 p-4 text-white">
              <h3 className="text-xl font-bold">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.description}</p>
              <div className="mt-2 text-sm text-gray-400">
                Image {lightboxIndex + 1} of {galleryImages.length}
              </div>
            </div>
            
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
              onClick={(e) => {e.stopPropagation(); prevImage();}}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
              onClick={(e) => {e.stopPropagation(); nextImage();}}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <style jsx global>{`
        body {
          font-family: 'Inter', sans-serif;
          background-color: #f9fafb;
        }
        
        .gallery-item {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .gallery-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        @media (max-width: 768px) {
          .grid-cols-4 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        
        @media (max-width: 640px) {
          .grid-cols-4 {
            grid-template-columns: repeat(1, minmax(0, 1fr));
          }
        }
      `}</style>
    </Layout>
  )
}