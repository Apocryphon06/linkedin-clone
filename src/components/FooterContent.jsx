import React from 'react'

const footerLinks = [
  {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Accessiblity',
    link: '/accessiblity',
  },
  {
    name: 'Help Center',
    link: '/help-center',
  },
  {
    name: 'Privacy & Terms',
    link: '/privacy-and-terms',
  },
  {
    name: 'Ad Choices',
    link: '/ad-choices',
  },
  {
    name: 'Advertising',
    link: '/advertising',
  },
  {
    name: 'Business Services',
    link: '/business-services',
  },
  {
    name: 'Get the Linkedin app',
    link: '/get-the-linkedin',
  },
  {
    name: 'More',
    link: '#',
  },
]

const FooterContent = () => {
  return (
      <div className="w-10/12 mx-auto flex flex-wrap gap-x-6 gap-y-2 items-center justify-center text-center">
        {React.Children.toArray(footerLinks.map((item) => <p className='text-xs text-[#808080] font-light'>{item.name}</p>))}
      </div>
  )
}

export default FooterContent
