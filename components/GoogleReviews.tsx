import React from 'react';

export const GoogleReviews: React.FC = () => {
  const handleGoogleReviewClick = () => {
    window.open('https://www.google.com/search?gs_ssp=eJzj4tVP1zc0zElOyc1ONik3YLRSNagwTko2SjY3MDAyNzZMM7MwtDKoMDFLM0lLTTQ1TU0FSqSkeUkUZySm5JcrZOalFSWWpCZnKBSUlSjklKQAAKw3GMc&q=shadow+infratech+pvt+ltd&oq=shadow+infratech+&gs_lcrp=EgZjaHJvbWUqDQgBEC4YrwEYxwEYgAQyCggAEEUYFhgeGDsyDQgBEC4YrwEYxwEYgAQyDAgCEAAYFBiHAhiABDIHCAMQABiABDIHCAQQABiABDIICAUQABgWGB4yBggGEEUYPTIGCAcQRRg90gEINTQzMGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x3bc2c7002731f681:0x46f4fea55ee700df,1,,,,', '_blank');
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-pleo-text mb-8 animate-fade-in-up animate-3d-text">
          Here's What Our Customers Are Saying
        </h2>
        <div className="flex justify-center animate-fade-in-up animation-delay-300">
          <img 
            src="/Google logo with rating and action button.png" 
            alt="Google Reviews" 
            className="cursor-pointer hover:scale-110 hover:rotate-1 transition-all duration-500 w-96 h-auto animate-slide-horizontal hover:animate-none"
            onClick={handleGoogleReviewClick}
          />
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes text-3d {
          0% { transform: perspective(1000px) rotateX(0deg) rotateY(0deg) translateX(0px) translateY(0px); }
          25% { transform: perspective(1000px) rotateX(5deg) rotateY(-2deg) translateX(-10px) translateY(-5px); }
          50% { transform: perspective(1000px) rotateX(0deg) rotateY(2deg) translateX(10px) translateY(5px); }
          75% { transform: perspective(1000px) rotateX(-5deg) rotateY(-1deg) translateX(-5px) translateY(-3px); }
          100% { transform: perspective(1000px) rotateX(0deg) rotateY(0deg) translateX(0px) translateY(0px); }
        }
        
        @keyframes slide-horizontal {
          0% { transform: translateX(-50px); }
          50% { transform: translateX(50px); }
          100% { transform: translateX(-50px); }
        }
        
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes pulse-subtle {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-slide-horizontal {
          animation: slide-horizontal 4s ease-in-out infinite;
        }
        
        .animate-bounce-gentle {
          animation: bounce-gentle 3s ease-in-out infinite;
        }
        
        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }
        
        .animate-3d-text {
          animation: text-3d 4s ease-in-out infinite;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.1), 4px 4px 8px rgba(0,0,0,0.05);
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
};