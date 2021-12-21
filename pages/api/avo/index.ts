import { IncomingMessage, ServerResponse } from 'http';
import DataBase from "@database";

const allAvos = async (request: IncomingMessage, response: ServerResponse) => {
  const db = new DataBase();
  const allEntries = await db.getData();
  const length = allEntries.length;
  response.statusCode = 200;
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify({data: allEntries, length}));
}

export default allAvos;