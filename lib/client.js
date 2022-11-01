import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId:'437r6uxa',
    dataset:'production',
    apiVersion:'2022-09-10',
    useCdn:true,
    token: process.env.NEXT_PUBLIC_SANITY_TOCKEN

});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source); 