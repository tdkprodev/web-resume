import thumbnailBlogsome from '../../../images/thumbnails/blogsome.png';
import thumbnailChat from '../../../images/thumbnails/chat.png';
import thumbnailExpensify from '../../../images/thumbnails/expensify.png';
import thumbnailNatours from '../../../images/thumbnails/natours.png';
import thumbnailNexter from '../../../images/thumbnails/nexter.png';
import thumbnailTrillo from '../../../images/thumbnails/trillo.png';
import thumbnailYouTube from '../../../images/thumbnails/yt.png';

import { IPreview } from '../../../../../shared/interface/preview';

export const previews: IPreview[] = [
  {
    alt: 'Chat app thumbnail',
    description: 'A public chat app',
    href: 'https://tdkchatapp.herokuapp.com',
    src: thumbnailChat,
    title: 'Chat App',
  },
  {
    alt: 'Blogsome app thumbnail',
    description: 'A private blogging app w/ Google OAuth',
    href: 'https://blogsome.herokuapp.com',
    src: thumbnailBlogsome,
    title: 'Blogsome',
  },
  {
    alt: 'Expensify app thumbnail',
    description: 'An app to tally expenses w/ Google OAuth',
    href: 'https://expensifyapp0101.herokuapp.com',
    src: thumbnailExpensify,
    title: 'Expensify',
  },
  {
    alt: 'YouTube app thumbnail',
    description: 'A simplified mock of a youtube search app',
    href: 'https://tdkyoutubeapp.herokuapp.com',
    src: thumbnailYouTube,
    title: 'YouTube Mock',
  },
  {
    alt: 'Nexter app thumbnail',
    description: 'A static web page of a made up realtor company',
    href: 'https://tdknexter.herokuapp.com',
    src: thumbnailNexter,
    title: 'Nexter',
  },
  {
    alt: 'Trillo app thumbnail',
    description: 'A static web page of a made up hotel service company',
    href: 'https://tdktrillo.herokuapp.com',
    src: thumbnailTrillo,
    title: 'Trillo',
  },
  {
    alt: 'Natours app thumbnail',
    description: 'A static web page of a touring service company',
    href: 'https://tdknatours.herokuapp.com',
    src: thumbnailNatours,
    title: 'Natours',
  },
];
