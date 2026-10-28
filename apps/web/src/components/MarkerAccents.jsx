import React from 'react';

export const MarkerUnderline = ({ src, className = '' }) => (
    <img
        src={src}
        alt=""
        className={`pointer-events-none block h-3 w-full max-w-[16rem] object-fill object-left ${className}`}
    />
);

export const MarkerCircle = ({ className = '', color = '#c8102e' }) => (
    <svg viewBox="0 0 240 150" className={`pointer-events-none ${className}`} aria-hidden="true">
        <path
            d="M46 86 C28 52 52 18 118 16 C176 14 214 36 210 72 C206 108 168 132 112 130 C58 128 24 112 42 84"
            fill="none"
            stroke={color}
            strokeWidth="9"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M58 90 C44 64 70 34 122 32 C170 30 200 50 194 78 C188 104 156 118 114 116"
            fill="none"
            stroke={color}
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="0.7"
        />
    </svg>
);
