import React from 'react'
import { redirect } from 'next/dist/server/api-utils';
import Image from 'next/image';
import { auth } from 'auth';
import Logout from 'components/Logout';

const HomePage = async () => {
    const session = await auth();
    //don't show page if user not logged in
    if (!session?.user) redirect("/");
  return (

    <div className="flex flex-col items-center m-4 ">
        <h1>{session?.user?.name}</h1>
        <Image
        src={session?.user?.image}
        alt={session?.user?.name}
        width={72}
        height={72}
        className="rounded-full"
        />
        <Logout />
    </div>
  );
};

export default HomePage;
