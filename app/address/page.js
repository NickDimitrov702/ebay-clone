'use client'

import TextImput from "../components/TextImput"
import MainLayout from "../layouts/MainLayout"
import { AiOutlineLoading3Quarters } from "react-icons/ai"

export default function Address() {
    return(
        <>
        <MainLayout>
            <div id="AddressPage" className="mt-4 max-w-[600px] mx-auto px-2">
                <div className="mx-auto bg-white rounded-lg p-3">
                     <div lang="text-xl text-bold mb-2">
                        Address Details
                     </div>
                     <form>
                        <div className="mb-4">
                            <TextImput className="w-full" string={'TEST'} placeholder="Name" error="This Is An Error"/>
                        </div>
                        <button className="mt-6 w-full text-white text-lg font-semibold p-3 rounded bg-blue-600">
                                    Update Address
                        </button>
                     </form>
                </div>
            </div>
        </MainLayout>
        </>
    )
}