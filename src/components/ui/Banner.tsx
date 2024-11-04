import { bannerList } from '@/utils/exports/banners';
import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div>
            <Image
            src={bannerList[1]}
            alt='banner'
            width={1200}
            height={1200}
            layout="responsive"
            sizes="(max-width: 768px) 100vw, 50vw"
            />
        </div>
    );
};

export default Banner;