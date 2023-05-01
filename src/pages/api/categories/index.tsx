import { throwServerError } from "@apollo/client"
import axios from "axios"
import { NextApiRequest, NextApiResponse } from "next"

// categoriesArr: Array<number>

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { method } = req
  let tree
  console.log('here1')
  if (method === 'GET') {
    console.log('here')
    const response = await fetch(`https://www.crisbarros.com.br/api/catalog_system/pub/category/tree/2`, {
    mode: 'no-cors',
    'headers': {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    tree = await response.json()
    console.log(tree)
  }
  return res.json(tree)
}