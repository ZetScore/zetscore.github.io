import { useState } from 'react';
import { Play, Download, CheckCircle } from 'lucide-react';

const DemoSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const youtubeVideoId = '_zShxJofkjU';
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?controls=1&modestbranding=1&rel=0`;

  const demoPoints = [
    'Constructive peer review process',
    'Comprehensive employee assessments',
    'Employee wellbeing tracking',
    'Net Promoter System insights',
    'Personal development planning',
    'Workforce analytics dashboards',
  ];
  
  const handlePlayClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section id="demo" className="py-16 lg:py-24 bg-gradient-to-br from-custom-green to-white">
      <div className="grid items-center grid-cols-12 px-2 py-2 mx-auto">
        <div className="col-span-10 col-start-2 px-4 py-8 sm:px-8 lg:px-16">
          {/* Header */}
          <div className="grid items-center grid-cols-2 mb-12">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 lg:text-5xl">
                ZetScore in Action
              </h2>
              <p className="max-w-3xl text-xl text-gray-600">
                Watch how ZetScore streamlines and simplifies performance management.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid items-center grid-cols-12 px-2 py-2 mx-auto mb-6">
        <div className="col-span-10 col-start-2 px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Video Section */}
            <div className="relative">
              <div className="relative overflow-hidden bg-gray-900 shadow-2xl rounded-2xl">
                {/* Video Placeholder or Embedded Video */}
                <div className="relative flex items-center justify-center aspect-video">
                  {isVideoPlaying ? (
                    <iframe
                      className="w-full h-full"
                      src={`${youtubeEmbedUrl}${isVideoPlaying ? '&autoplay=1' : ''}`}
                      title="ZetScore in Action"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  ) : (
                    <button
                      onClick={handlePlayClick}
                      className="relative rounded-full group focus:outline-none focus:ring-4 focus:ring-secondary focus:ring-opacity-50"
                      aria-label="Play video"
                    >
                      <div className="absolute inset-0 transition-transform duration-300 scale-110 rounded-full bg-black/20 group-hover:scale-125"></div>
                      <div className="flex items-center justify-center w-20 h-20 transition-all duration-300 bg-white rounded-full shadow-2xl group-hover:shadow-3xl">
                        <Play className="w-8 h-8 ml-1 text-secondary" />
                      </div>
                    </button>
                  )}
                  
                  {!isVideoPlaying && (
                    <div className="absolute left-0 bottom-4">
                      <div className="p-4 text-white rounded-lg bg-black/50 backdrop-blur-sm">
                        <h3 className="mb-1 font-semibold">ZetScore in Action</h3>
                      </div>
                    </div>
                  )}
                </div>

                {/* Video Controls */}
                <div className="absolute flex space-x-2 bottom-4 right-4">
                  <button className="p-2 text-white transition-colors rounded-lg bg-white/20 backdrop-blur-sm hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div>
              <h3 className="mb-6 text-2xl font-bold text-gray-900">
                What you will see in this demo:
              </h3>
              
              <div className="mb-8 space-y-4">
                {demoPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>

              {/* Request Full Demo Button */}
              <div className="mt-6">
                <button className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white transition-all duration-200 rounded-lg shadow-lg bg-custom-green hover:bg-custom-green hover:shadow-xl">
                  Request a Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;