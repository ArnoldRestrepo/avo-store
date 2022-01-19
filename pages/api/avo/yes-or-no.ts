import { NextApiRequest, NextApiResponse } from 'next'
import enablePublicAccess from '@cors'

const YesOrNo = async (req: NextApiRequest, res: NextApiResponse) => {
  await enablePublicAccess(req, res)

  const answer = Math.round(Math.random()) ? 'Yes' : 'No'

  res.status(200).json({ answer, error: null })
}

export default YesOrNo
