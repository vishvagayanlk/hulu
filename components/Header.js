import Image from "next/image"
import HeaderItems from "./HeaderItems"

import {
    HomeIcon,
    BadgeCheckIcon,
    CollectionIcon,
    LightBulbIcon,
    SearchIcon,
    UserIcon
} from "@heroicons/react/outline"

function Header() {
    return (<header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
        <div className='flex flex-grow justify-evenly max-w-2xl'>
            <HeaderItems title="HOME"
                Icon={HomeIcon}/>

            <HeaderItems title="TRENDING"
                Icon={LightBulbIcon}/>

            <HeaderItems title="VERIFIED"
                Icon={BadgeCheckIcon}/>

            <HeaderItems title="COLLECTIONS"
                Icon={CollectionIcon}/>

            <HeaderItems title="SEARCH"
                Icon={SearchIcon}/>

            <HeaderItems title="ACTION"
                Icon={UserIcon}/>
        </div>
        <Image src="https://links.papareact.com/ua6" className ={"object-contain"}
            width={200}
            height={100}/>
    </header>)
}

export default Header
