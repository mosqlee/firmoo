import React from 'react'
import Link from 'next/link'
import { Button } from 'reactstrap';
import Head from 'next/head'

export default () => (
  <div>
    <Head>
      <link href="https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet"></link>
    </Head>
    <ul>
      <li><Link href='/b' as='/a'><a>a</a></Link></li>
      <li><Link href='/a' as='/b'><a>b</a></Link></li>
    </ul>
    <div>
      <Button color="primary">primary</Button>
    </div>
  </div>
)
