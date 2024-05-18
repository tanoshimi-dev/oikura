import nextMDX from '@next/mdx'

import { recmaPlugins } from './src/mdx/recma.mjs'
import { rehypePlugins } from './src/mdx/rehype.mjs'
import { remarkPlugins } from './src/mdx/remark.mjs'
import withSearch from './src/mdx/search.mjs'

const withMDX = nextMDX({
  options: {
    remarkPlugins,
    rehypePlugins,
    recmaPlugins,
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],

  output: 'export',
  
  // basePath: '/demo/trade_front',
  // assetPrefix: '/demo/trade_front',
  basePath: '',
  assetPrefix: '',
  
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  trailingSlash: true,
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,
 
  // Optional: Change th

  // images: {
  //   domains: ['images.dog.ceo', 'localhost'], //ここにドメインを指定
  // },
  images: {
    unoptimized: true,
  },  
}

export default withSearch(withMDX(nextConfig))
