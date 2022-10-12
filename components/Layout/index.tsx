import { ReactNode } from 'react'
import { NextSeo } from 'next-seo'
import styles from './Layout.module.scss'

interface ILayout {
  children: ReactNode | JSX.Element
}

const Layout = ({ children }: ILayout) => {
  return (
    <div className={styles.container}>
      <NextSeo
        openGraph={{
          type: 'website',
          url: 'https://www.your-website-goes-here.com',
          title: 'Title',
          description: 'description',
          site_name: 'Site Name',
          images: [
            {
              url: 'https://www.your-website-goes-here.com/image.jpg',
              width: 800,
              height: 600,
              alt: 'Image Alt',
            },
            {
              url: 'https://www.your-website-goes-here.com/image-2.jpg',
              width: 800,
              height: 600,
              alt: 'Image Alt 2',
            },
          ],
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
          {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap',
          },
        ]}
      />
      <main>{children}</main>
    </div>
  )
}

export default Layout
