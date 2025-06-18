import { z, ZodString } from "zod";

const productSchemaValidator = z.object({
    productName: z.string().min(3), 
    price: z.number().positive(),
    description: z.string().min(3) , 
    stock: z.number().positive(),
    category: z.string().min(3)
});

export { productSchemaValidator };