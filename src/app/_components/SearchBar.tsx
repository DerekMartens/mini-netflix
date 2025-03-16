"use client";

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const SearchBar = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const [term, setTerm] = useState(searchParams.get('query')?.toString() || '');

    useEffect(() => {
        const handler = setTimeout(() => {
            const params = new URLSearchParams(searchParams);
            if (term) {
                params.set('query', term);
            } else {
                params.delete('query');
            }
            replace(`${pathname}?${params.toString()}`);
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [term, searchParams, pathname, replace]);

    return (
        <div className="w-full flex items-center justify-center p-4">
            <input
                className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
                type="text"
                placeholder="Search for movies..."
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                aria-label='Search for movies'
            />
        </div>
    );
};

export default SearchBar;
