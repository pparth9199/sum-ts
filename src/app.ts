// add.ts
import express from 'express';
import { Request, Response } from 'express';
export function add(num1: number, num2: number): number {
    return num1 + num2;
  } 
  const app = express();
  const port = 3000;
  
  if (require.main === module) {
    app.get('/', (req: Request, res: Response) => {
      const num1: number = 2;
      const num2: number = 3;
      const result = add(num1, num2);
  
      res.send(`Sum of ${num1} and ${num2} is ${result}`);
    });
  
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
  
  export default app;
  