import React from 'react'
import { useRouter } from 'next/router'
export default function ProductDetail() {
  const router = useRouter()
  const {id} = router.query
    return (    
    <>
    <h1>สินค้าชิ้นที่  : {id} </h1>
    </>
  )
}
