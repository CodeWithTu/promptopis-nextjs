"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, MouseEventHandler } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { Logo } from "../../public/assets/images";

const handleSignOut: MouseEventHandler<HTMLButtonElement> = async (event) => {
  event.preventDefault();
  try {
    await signOut();
  } catch (error) {
    console.error("Sign out error:", error);
  }
};

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const res: any = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image src={Logo} alt="logo" width={30} height={30} className="object-contain" />
        <p className="logo_text">Promptopia</p>
      </Link>
      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>

            <button type="button" onClick={handleSignOut} className="outline_btn">
              Sign Out
            </button>
            <Link href="/profile">
              {session?.user?.image ? (
                <Image
                  src={session?.user?.image}
                  width={37}
                  height={37}
                  alt="profile"
                  className="rounded-full"
                  onClick={() => setToggleDropdown((prev) => !prev)}
                />
              ) : (
                <></>
              )}
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider: any) => (
                <button className="black_btn" type="button" key={provider.name} onClick={() => signIn(provider.id)}>
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            {session?.user?.image ? (
              <Image
                src={session?.user?.image}
                width={37}
                height={37}
                alt="profile"
                className="rounded-full"
                onClick={() => setToggleDropdown((prev) => !prev)}
              />
            ) : (
              <></>
            )}

            {toggleDropdown && (
              <div className="dropdown">
                <Link href="/profile" className="dropdown_link" onClick={() => setToggleDropdown(false)}>
                  My Profile
                </Link>
                <Link href="/create-prompt" className="dropdown_link" onClick={() => setToggleDropdown(false)}>
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider: any) => (
                <button className="black_btn" type="button" key={provider.name} onClick={() => signIn(provider.id)}>
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
