import { NextApiRequest, NextApiResponse } from 'next';
import DataBase from "@database";
import enablePublicAccess from '@cors'

const AvoDetail = async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    await enablePublicAccess(request, response);
    const db = new DataBase();
    const id = request.query.id;
    const avo = await db.getDataById(id as string);
    response.status(200).json(avo);
  } catch (error) {
    console.error(error);
    response.status(400).end();
  }
}

export default AvoDetail;