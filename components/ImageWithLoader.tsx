"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  className?: string;
  priority?: boolean;
  quality?: number;
  onError?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
}

export default function ImageWithLoader({
  src,
  alt,
  fill,
  width,
  height,
  sizes,
  className = "",
  priority = false,
  quality,
  onError,
}: ImageWithLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setIsLoading(false);
    setHasError(true);
    onError?.(e);
  };

  return (
    <div className="relative w-full h-full">
      {/* Loading skeleton */}
      {isLoading && !hasError && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Shimmer effect */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      )}

      {/* Actual image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full h-full"
      >
        <Image
          src={src}
          alt={alt}
          fill={fill}
          width={width}
          height={height}
          sizes={sizes}
          className={className}
          priority={priority}
          quality={quality}
          onLoad={handleLoad}
          onError={handleError}
        />
      </motion.div>

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400 text-sm">
          <span>Image unavailable</span>
        </div>
      )}
    </div>
  );
}
