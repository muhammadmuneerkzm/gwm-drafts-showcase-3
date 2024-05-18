'use client'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Page = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [renderingPercent, setRenderingPercent] = useState(0);

    useEffect(() => {
        const handleRouteChangeStart = () => {
            setLoading(true);
        };

        const handleRouteChangeComplete = () => {
            setLoading(false);
        };

        const handleRouteChangeError = () => {
            setLoading(false);
        };

        const handleRouteChangeProgress = (url, { shallow }) => {
            if (!shallow) {
                setRenderingPercent(0); // Reset rendering percentage for new page
            }
        };

        const handleRouteChangeCompleteProgress = (url, { shallow }) => {
            if (!shallow) {
                setRenderingPercent(100); // Set rendering percentage to 100% when complete
            }
        };

        router.events.on('routeChangeStart', handleRouteChangeStart);
        router.events.on('routeChangeComplete', handleRouteChangeComplete);
        router.events.on('routeChangeError', handleRouteChangeError);
        router.events.on('routeChangeProgress', handleRouteChangeProgress);
        router.events.on('routeChangeComplete', handleRouteChangeCompleteProgress);

        return () => {
            router.events.off('routeChangeStart', handleRouteChangeStart);
            router.events.off('routeChangeComplete', handleRouteChangeComplete);
            router.events.off('routeChangeError', handleRouteChangeError);
            router.events.off('routeChangeProgress', handleRouteChangeProgress);
            router.events.off('routeChangeComplete', handleRouteChangeCompleteProgress);
        };
    }, [router.events]);

    return (
        <div className='bg-slate-100'>
            {loading && <div className='text-white'>Loading...</div>}
            <div className='text-white'>Rendering Percentage: {renderingPercent}%</div>
        </div>
    );
};

export default Page;
