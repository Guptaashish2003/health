import React from "react";
import { formatDate ,checkFemale} from "../utils/utils";


const PatientProfileCard = ({ data }) => {
    const isFemale = checkFemale(data?.gender)
  const ListData =  [
      {
        icon: "/assets/BirthIcon.svg",
        alt: "DateOfBirth",
        label: "Date Of Birth",
        value: formatDate(data?.date_of_birth),
      },
      {
        icon: isFemale ? "/assets/FemaleIcon.svg" : "/assets/MaleIcon.svg",
        alt: isFemale ? "Female" : "Male",
        label: "Gender",
        value: data?.gender,
      },
      {
        icon: "/assets/PhoneIcon.svg",
        alt: "ContactInfo",
        label: "Contact Info.",
        value: data?.phone_number,
      },
      {
        icon: "/assets/PhoneIcon.svg",
        alt: "EmergencyContact",
        label: "Emergency Contacts",
        value: data?.emergency_contact,
      },
      {
        icon: "/assets/InsuranceIcon.svg",
        alt: "InsuranceProvider",
        label: "Insurance Provider",
        value: data?.insurance_type,
      },
    ]
    return (
    <div className="aspect-[367/1216] text-center bg-[#FFF] w-full max-md:mx-auto max-w-[367px] max-h-[602px] max-md:grid-flow-row grid grid-cols-1 justify-evenly  rounded-3xl">
      <span className="aspect-square mx-auto mt-5 col-span-2 size-36">
        <img
          className="w-full h-full "
          src={data?.profile_picture}
          alt="profile"
        />
      </span>
      <span className="col-span-2 items-center justify-center gap-y-2 mt-2">
        <p className="text-lg font-semibold">{data?.name}</p>
      </span>
      <div className="grid grid-cols-1 px-2 gap-y-4 text-start">
      {ListData.map((item, index) => (
  <div key={index} className="grid grid-cols-[1fr_5fr] items-center gap-x-4">
    {/* Icon Column */}
    <span className="flex justify-start size-10">
      <img className="h-full w-full" src={item.icon} alt={item.alt} />
    </span>
    {/* Text Column */}
    <span className="w-full flex flex-col text-start">
      <p className="text-[#000] text-xs">{item.label}</p>
      <p className="text-[#000] text-xs">{item.value}</p>
    </span>
  </div>
))}
</div>

      <button className="bg-[#01F0D0] w-44 px-2 h-10 mt-5 mx-auto col-span-2  rounded-3xl">Show All Information</button>
    </div>
  );
};

export default PatientProfileCard;
