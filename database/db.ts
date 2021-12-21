import allData from "./data";

class DataBase {
  constructor(){}

  async getData(): Promise<TProduct[]>{
    const asArray = Object.values(allData);
    await randomDelay();
    return asArray;
  }

  async getDataById(id: string): Promise<TProduct | null> { 
    if (!Object.prototype.hasOwnProperty.call(allData, id)) {
      return null;
    }
    const entry = allData[id];
    await randomDelay();
    return entry;
  }
}

const randomDelay = () => 
  new Promise((resolve) => {
    const max = 350;
    const min = 100;
    const delay = Math.floor(Math.random() * (max - min + 1)) + min;
    setTimeout(resolve, delay);
  })


export default DataBase;