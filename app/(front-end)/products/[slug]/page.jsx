import AddToCartButton from "@/components/frontend/AddToCartButton";
import Breadcrumb from "@/components/frontend/Breadcrumb";
import CategoryCarousel from "@/components/frontend/CategoryCarousel";
import ProductImageCarousel from "@/components/frontend/ProductImageCarousel";
import ProductShareButton from "@/components/frontend/ProductShareButton";
import { getData } from "@/lib/getData";
import { BaggageClaim, Minus, Plus, Send, Share2, Tag, PhoneCall } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function ProductDetailPage({ params: { slug } }) {
  const product = await getData(`products/product/${slug}`);
  const { id } = product;
  const catId = product.categoryId;
  const category = await getData(`categories/${catId}`);
  const categoryProducts = category.products;
  const products = categoryProducts.filter((product) => product.id !== id);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const urlToShare = `${baseUrl}/products/${slug}`;
  return (
    <div>
      <Breadcrumb />
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-4">
            <ProductImageCarousel
              productImages={product.productImages}
              thumbnail={product.imageUrl}
            />
        </div>
        <div className="col-span-12 md:col-span-7 lg:col-span-5">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl lg:text-2xl">
              {product.title}
            </h2>
            <ProductShareButton urlToShare={urlToShare} />
          </div>
          <div className="flex gap-3 mt-2 mb-8">
            <div>
              <p><b>Cateogory : </b><Link className="text-blue-600" href={`/category/${category.slug}`}>{category.title}</Link></p>
            </div>
            <span>|</span>
            <div>
              <p><b>Brand :</b> Brand Name</p>
            </div>
          </div>
          <div className="border-b border-gray-300">
            <p className="py-2 ">{product.description}</p>
            <div className="flex items-center gap-8 mb-4 justify-between">
              <h4>SKU: {product.sku}</h4>
              <p className="py-1.5 px-4 border rounded-full text-slate-900 ">
                <b>Stock</b>: {product.productStock}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 pt-4 border-b border-gray-300 pb-4">
            <div className="items-center gap-4">
              <h4 className="text-2xl flex">৳ {product.salePrice}</h4>
              <del className="text-slate-400 text-md">
                ৳ {product.productPrice}
              </del>
            </div>
            <p className="flex items-center bg-lime-200 py-2 px-4 rounded-full text-slate-900 ">
              <Tag className="w-5 h-5 text-slate-400 me-2" />
              <h4>Save <b>TK- 50</b></h4>
            </p>
          </div>
          <div className="flex justify-between items-center py-6">
            <AddToCartButton product={product} />
            <div className="flex gap-3">
              <div>
              <PhoneCall className="mt-3"/>
              </div>
              <div>
              <h4>Call for Any Query :</h4>
              <p><b> 01511- 309 309</b></p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5 lg:col-span-3 sm:block bg-white border border-gray-300 rounded-lg  dark:bg-gray-700 dark:border-gray-700 text-slate-800 overflow-hidden hidden">
          <h2 className="bg-slate-100 dark:bg-gray-800 py-3 px-6 font-semibold border-b border-gray-300 dark:border-gray-600 text-slate-800 dark:text-slate-100">
            DELIVERY & RETURNS
          </h2>
{/* 
          <div className="p-4">
            <div className="flex rounded-lg py-2 px-4 bg-orange-400 text-slate-50 items-center gap-3">
              <span>BDyana Express </span>
              <Send />
            </div>
            <div className="py-3 text-slate-100 border-b border-gray-500">
              Eligible for Free Delivery.
              <Link href="#">View Details</Link>
            </div>
            <h2 className="text-slate-200 py-2">Choose your Location</h2>
            <div className=" pb-3">
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </select>
            </div>

            <div className="pb-3">
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </select>
            </div>
            <div className="pb-3">
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </select>
            </div>
          </div> */}
        </div>
      </div>
      <div className="bg-white dark:bg-slate-700 my-8 rounded-xl p-4">
        <h2 className="mb-4 text-xl font-semibold dark:text-slate-200 ml-3">
          Similar Products
        </h2>
        <CategoryCarousel products={products} />
      </div>
    </div>
  );
}
