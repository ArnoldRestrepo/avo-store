import { NextApiRequest, NextApiResponse } from 'next';
import DataBase from "@database";
import enablePublicAccess from '@cors'

const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    await enablePublicAccess(request, response);
    const db = new DataBase();
    const allEntries = await db.getData();
    const length = allEntries.length;
    response.status(200).json({ data: allEntries, length });
  } catch (error) { 
    console.error(error);
    response.status(500).end();
  }
  
}

export default allAvos;