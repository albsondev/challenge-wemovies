"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; 


interface BreadcrumbProps {
  paths: { label: string, path: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ paths }) => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <nav className="text-gray-500">
      {paths.map((path, index) => (
        <span key={index}>
          <button 
            onClick={() => router.push(path.path)} 
            className="hover:underline">
            {path.label}
          </button>
          {index < paths.length - 1 && ' / '}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
