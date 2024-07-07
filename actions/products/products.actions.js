"use server";

import db from "@/lib/db";

export const getLatestProducts = async (pageSize) => {
  try {
    const products = await db.product.findMany({
      include: {
        category: true,
        user: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: pageSize,
    });
    console.log("Product Length", products.length);
    return products;
  } catch (error) {
    console.error("Error while fetching lastest products", error);
    throw new Error("Error while fetching lastest products");
  }
};

export const getAllProducts = async (params) => {
  try {
    const { page = 1, pageSize = 16 } = params;
    const skipAmount = (page - 1) * pageSize;

    const products = await db.products.findMany({
      include: {
        category: true,
        user: true,
        orderItems: true,
        sales: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      skip: skipAmount,
      take: pageSize,
    });

    const totalProducts = await db.products.count();
    const isNext = totalProducts > skipAmount + products.length;

    return { products, isNext };
  } catch (error) {
    console.error("Error while fetching all products", error);
    throw new Error("Error while fetching all products");
  }
};
