import React from 'react'
import  Helmet  from 'react-helmet'

function MetaTag({title,keyword,description}) {
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keyword" content={keyword} />
            </Helmet>
    </div>
  )
}

export default MetaTag
