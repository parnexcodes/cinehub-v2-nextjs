import React from "react";
import Image from "next/image";
import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { Icon, SearchIcon } from "@chakra-ui/icons";
import { AiOutlineUser } from "react-icons/ai";
import Link from "next/link";

function Header() {
  return (
    <div className="px-8 py-8">
      <div className="flex justify-between">
        <Image src={"/logo.png"} width={150} height={150} alt={'logo'}></Image>
        <ul className="flex space-x-4 text-white">
          <li className="bg-[#2E343E] px-4 py-2 rounded-md hover:bg-[#323744]">
            <Link className="hover:text-[#76D12A]" href={'/'}>
            Home
            </Link>
          </li>
          <li className="bg-[#2E343E] px-4 py-2 rounded-md hover:bg-[#323744]">
            <Link className="hover:text-[#76D12A]" href={'/'}>Genre</Link>
          </li>
          <li className="bg-[#2E343E] px-4 py-2 rounded-md hover:bg-[#323744]">
            <Link className="hover:text-[#76D12A]" href={'/'}>Country</Link>
          </li>
          <li className="bg-[#2E343E] px-4 py-2 rounded-md hover:bg-[#323744]">
            <Link className="hover:text-[#76D12A]" href={'/'}>Movies</Link>
          </li>
          <li className="bg-[#2E343E] px-4 py-2 rounded-md hover:bg-[#323744]">
            <Link className="hover:text-[#76D12A]" href={'/'}>TV</Link>
          </li>
          <li className="bg-[#2E343E] px-4 py-2 rounded-md hover:bg-[#323744]">
            <Link className="hover:text-[#76D12A]" href={'/'}>Top IMDb</Link>
          </li>
        </ul>
        <ul className="flex space-x-4">
          <li>
            <InputGroup>
              <InputLeftAddon children={<SearchIcon />} pointerEvents="none" />
              <Input width={"32"} variant="outline" placeholder="Search" className="text-white" />
            </InputGroup>
          </li>
          <li className="pt-2">
            <a
              className="bg-[#2E343E] px-4 py-2 rounded-md hover:bg-[#323744] text-white"
              href="#"
            >
              <Icon className="mr-2" as={AiOutlineUser} />
              Login
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
