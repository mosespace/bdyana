import db from "@/lib/db";
import { NextResponse } from "next/server";
export async function POST(request) {
  try {
    const { title, couponCode, expiryDate, isActive, vendorId } =
      await request.json();
    const newCoupon = await db.coupon.create({
      data: {
        title,
        couponCode,
        expiryDate,
        isActive,
        vendorId,
      },
    });
<<<<<<< HEAD
=======
    // console.log(newCoupon);
>>>>>>> fbe612953c2fcf2680eaee0cd3799976f94d839c
    return NextResponse.json(newCoupon);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create Coupon",
        error,
      },
      { status: 500 }
    );
  }
}
export async function GET(request) {
  try {
    const coupons = await db.coupon.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(coupons);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch Coupon",
        error,
      },
      { status: 500 }
    );
  }
}
