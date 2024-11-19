import SearchInput from "../../components/SearchInput"
import SearchSelect from "../../components/SearchSelect"
import CutomButton from '../../components/CustomButton'
import { CiSearch } from "react-icons/ci";
import { PiMagnifyingGlassPlusLight } from "react-icons/pi";
import Accordion from "./components/Accordion";
import MapComponent from "./components/MapComponent";


const MapView = () => {
    return (
        <>
            <div className="flex justify-between items-center">
                <div className="flex w-1/2">
                    <SearchInput Icon={CiSearch} iconColor='defaultBlue' placeholder='Search' className="pl-10 w-full p-2 bg-white text-sm text-defaultBlue placeholder-defaultBlue	 border border-defaultBlue rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <SearchSelect Icon={PiMagnifyingGlassPlusLight} iconColor='defaultBlue' placeholder='Saved Search' className="pl-10 w-full p-2 bg-white text-sm text-defaultBlue placeholder-defaultBlue border border-defaultBlue rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />

                </div>
                <CutomButton variant="primary" size="md">
                    Save to List
                </CutomButton>
            </div>
            <div className="flex justify-between w-full">
                <MapComponent />
                <Accordion />
            </div>
        </>
    )
}

export default MapView