import React from "react";
import { formatDate ,checkFemale} from "../utils/utils";


const PatientProfileCard = ({ data }) => {
    const isFemale = checkFemale(data?.gender)
    console.log(isFemale)
    return (
    <div className="aspect-[367/1216] text-center bg-[#FFF] w-[20%] max-w-[367px] max-h-[602px] flex justify-evenly flex-col rounded-3xl">
      <span className="aspect-square mx-auto mt-5 size-36">
        <img
          className="w-full h-full "
          src={data?.profile_picture}
          alt="profile"
        />
      </span>
      <span className="flex flex-col items-center justify-center gap-y-2 mt-2">
        <p className="text-lg font-semibold">{data?.name}</p>
      </span>
      <div className="flex flex-col text-start">
        <div className="flex w-full justify-start ml-2 items-start gap-x-10">
          <span className="size-10">
            <img
              className="w-full h-full"
              src="/assets/BirthIcon.svg"
              alt="DateofBirth"
            />
          </span>
          <span className="py-2 ">
            <p className="text-[#000] text-xs">Date Of Birth</p>
            <p className="text-[#000] text-xs">{formatDate(data?.date_of_birth)}</p>
          </span>
        </div>
        <div className="flex w-full justify-start ml-2 mt-4 items-start gap-x-10">
          <span className="size-10">
            <img
              className="w-full h-full"
              src={isFemale ? "/assets/FemaleIcon.svg" : "/assets/MaleIcon.svg"}
              alt={isFemale ? "Female":"Male"}
            />
          </span>
          <span className="py-2 ">
            <p className="text-[#000] text-xs">Gender</p>
            <p className="text-[#000] text-xs">{data?.gender}</p>
          </span>
        </div>
        <div className="flex w-full justify-start ml-2 mt-4 items-start gap-x-10">
          <span className="size-10">
            <img
              className="w-full h-full"
              src="/assets/PhoneIcon.svg"
              alt="contactInfo"
            />
          </span>
          <span className="py-2 ">
            <p className="text-[#000] text-xs">Contact Info.</p>
            <p className="text-[#000] text-xs">{data?.phone_number}</p>
          </span>
        </div>
        <div className="flex w-full justify-start ml-2 mt-4 items-start gap-x-10">
          <span className="size-10">
          <img
              className="w-full h-full"
              src="/assets/PhoneIcon.svg"
              alt="EmgergencyContact"
            />
          </span>
          <span className="py-2 ">
            <p className="text-[#000] text-xs">Emergency Contacts</p>
            <p className="text-[#000] text-xs">{data?.emergency_contact}</p>
          </span>
        </div>
        <div className="flex w-full justify-start ml-2 mt-4 items-start gap-x-10">
          <span className="size-10">
          <img
              className="w-full h-full"
              src="/assets/InsuranceIcon.svg"
              alt="EmgergencyContact"
            />
          </span>
          <span className="py-2 ">
            <p className="text-[#000] text-xs">Insurance Provider</p>
            <p className="text-[#000] text-xs">{data?.insurance_type}</p>
          </span>
        </div>
      </div>
      <button className="bg-[#01F0D0] w-44 px-2 py-1.5 mx-auto  rounded-3xl">Show All Information</button>
    </div>
  );
};

export default PatientProfileCard;
