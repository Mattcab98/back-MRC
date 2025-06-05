interface ProductInterface {
    productName: string;
    price?: number;
    description?: string;
    stock?: number;
    category?: "golosinas" | "reposteria" | "descartables" | "cotillon y fiestas" | "decoracion tortas";
};

export { ProductInterface };