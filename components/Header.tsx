"use client";
import { ClerkLoaded, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Form from "next/form";
import React from "react";
import { PackageIcon, TrolleyIcon } from "@sanity/icons";
import { Button } from "./ui/button";
import useBasketStore from "@/store";

function Header() {
  const { user } = useUser();
  console.log("User data:", user);
  const itemCount = useBasketStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0)
  );

  const createClerkPaskey = async () => {
    try {
      const response = await user?.createPasskey();
      console.log("Passkey created:", response);
    } catch (error) {
      console.error("Error creating passkey:", error);
    }
  };
  return (
    <header className="flex flex-wrap justify-between items-center px-4 py-2">
      {/* top row */}
      <div className="flex w-full flex-wrap justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-gray-800 hover:opacity-50 cursor-pointer mx-auto sm:mx-0"
        >
          TeeStores
        </Link>

        <Form
          action="/search"
          className="w-full sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0"
        >
          <input
            type="text"
            name="query"
            placeholder="search for products..."
            className="bg-gray-100 text-gray-800 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-opacity-50 border w-full max-w-4xl "
          />
        </Form>
        {/* my basket */}
        <div className="flex items-center space-x-4 mt-4 sm:mt-0 flex-1 sm:flex-none">
          <Link
            href="/basket"
            className="flex-1 relative flex items-center justify-center sm:justify-start sm: sm:flex-none space-x-2 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
          >
            <TrolleyIcon className="w-6 h-6" />
            {/* item count from global state */}
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {itemCount}
              </span>
            )}
            <span>My Cart</span>
          </Link>

          {/* user profile */}
          <ClerkLoaded>
            {user && (
              <Link
                href={"orders"}
                className="flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-gray-500 hover:bg-gray-600 text-white  font-bold py-2 px-4 rounded"
              >
                <PackageIcon className="w-6 h-6" />
                <span>My Orders</span>
              </Link>
            )}
            {user ? (
              <div className="flex items-center space-x-2">
                <UserButton />
                <div className="hidden sm:block text-xs">
                  <p className="text-gray-400">Welcome back</p>
                  <p className="text-gray-800 font-bold">{user?.fullName}</p>
                </div>
              </div>
            ) : (
              <SignInButton mode="modal" />
            )}
            {user?.passkeys.length === 0 && (
              <button
                onClick={createClerkPaskey}
                className="bg-white hover:bg-gray-700 hover:tex-white animate-pulse text-gray-500 font-bold py-2 px-4 rounded border-gray-300 border"
              >
                Create Passkey
              </button>
            )}
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
}

export default Header;
