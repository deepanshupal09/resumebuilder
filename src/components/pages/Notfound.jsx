import React, { useEffect, useRef } from 'react'
import Lottie from 'lottie-web'

function useNotFound() {
    const pic = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when component is rendered
      }, []);

    useEffect(() => {
        const instance = Lottie.loadAnimation({
            container: pic.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: require("../animations/404.json"),
        });
        return () => instance.destroy();
    }, []);

    return pic;
}

export default function NotFound() {
    const pic = useNotFound();

    return (
        <div className='h-[100vh] font-manrope text-xl flex flex-col justify-center items-center'>
            <div ref={pic} className='h-[50vh]'></div>
            <div className='mt-10'>Sorry, the page you are looking for cannot be found. It may have been removed, had its name changed, or is temporarily unavailable.</div>
            <div>Please check the URL for any mistakes or return to the homepage.</div>
        </div>
    );
}
