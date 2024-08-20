// components/Timeline.tsx
import { FC } from "react";

const Timeline: FC = () => {
  return (
    <div className="relative text-white py-12 px-6">
      {/* Central Timeline Line with Animated Blob */}
      <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 bg-gray-700 animate-drawLine">
        {/* Animated Blob */}
        <div className="absolute left-[-6px] w-4 h-4 bg-blue-500 rounded-full animate-moveBlob"></div>
      </div>

      {/* Timeline Events */}
      <div className="relative flex flex-col items-center">
        <div className="space-y-20">
          {/* Event Card 1 */}
          <div className="relative flex items-center justify-end">
            <div className="absolute left-[-2px] w-1 h-16 bg-gray-700"></div>
            <div className="w-80 p-6 bg-gray-800 text-white rounded-lg shadow-lg animate-slideInRight">
              <h3 className="text-2xl font-semibold">Event 1</h3>
              <p className="mt-2">
                Details about the first event. This card slides in from the
                right and has a shadow for a 3D effect.
              </p>
            </div>
          </div>
          {/* Event Card 2 */}
          <div className="relative flex items-center justify-start">
            <div className="absolute left-[-2px] w-1 h-16 bg-gray-700"></div>
            <div className="w-80 p-6 bg-gray-800 text-white rounded-lg shadow-lg animate-slideInLeft">
              <h3 className="text-2xl font-semibold">Event 2</h3>
              <p className="mt-2">
                Details about the second event. This card slides in from the
                left and has a shadow for a 3D effect.
              </p>
            </div>
          </div>
          {/* Event Card 3 */}
          <div className="relative flex items-center justify-end">
            <div className="absolute left-[-2px] w-1 h-16 bg-gray-700"></div>
            <div className="w-80 p-6 bg-gray-800 text-white rounded-lg shadow-lg animate-slideInRight">
              <h3 className="text-2xl font-semibold">Event 3</h3>
              <p className="mt-2">
                Details about the third event. This card slides in from the
                right and has a shadow for a 3D effect.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
