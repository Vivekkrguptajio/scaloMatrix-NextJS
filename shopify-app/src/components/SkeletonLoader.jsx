"use client";
import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className="w-full py-8 md:py-12 lg:py-14 bg-white animate-pulse">
      <div className="max-w-[1180px] mx-auto w-full px-4 sm:px-6 md:px-12 xl:px-16">
        
        {/* Placeholder for the Featured Case Study card */}
        <div className="relative w-full bg-gray-100 rounded-3xl p-5 md:p-10 h-[600px] md:h-[700px] flex flex-col lg:flex-row gap-8 md:gap-10 border border-gray-200">
          
          {/* Tag Placeholder */}
          <div className="absolute top-0 left-8 md:left-12 -translate-y-full bg-gray-200 w-48 h-10 rounded-t-2xl"></div>

          {/* Left Sidebar Placeholder */}
          <div className="w-full lg:w-[140px] xl:w-[155px] flex flex-col justify-between shrink-0 gap-4 mt-8 md:mt-0">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-200 flex flex-col overflow-hidden h-[250px]">
              {/* Logo block */}
              <div className="h-16 border-b border-gray-100 bg-gray-50 flex items-center justify-center p-4">
                <div className="w-full h-8 bg-gray-200 rounded-xl"></div>
              </div>
              {/* Stats blocks */}
              <div className="p-4 border-b border-gray-100 flex-1 flex flex-col justify-center">
                <div className="w-16 h-8 bg-gray-200 rounded mb-2"></div>
                <div className="w-8 h-3 bg-gray-200 rounded"></div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-center">
                <div className="w-16 h-8 bg-gray-200 rounded mb-2"></div>
                <div className="w-8 h-3 bg-gray-200 rounded"></div>
              </div>
            </div>

            {/* Button Placeholder */}
            <div className="h-[52px] bg-gray-200 rounded-full w-full mt-2"></div>
          </div>

          {/* Right Images Placeholder */}
          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-3 gap-6 h-[400px] sm:h-full">
            <div className="bg-gray-200 rounded-3xl h-full hidden sm:block"></div>
            <div className="bg-gray-200 rounded-3xl h-full hidden sm:block"></div>
            <div className="bg-gray-200 rounded-3xl h-full w-full"></div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default SkeletonLoader;
