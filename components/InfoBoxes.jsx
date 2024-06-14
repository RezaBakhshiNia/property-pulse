import React from "react";
import InfoBox from "./InfoBox";

const InfoBoxes = () => {
  return (
    <section>
      <div class="container-xl lg:container m-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            heading={"مستاجرین"}
            bgColor="bg-gray-100"
            textColor="text-black"
            buttonInfo={{
              text: "جستجوی خانه",
              bgColor: "bg-black",
              link: "/properties",
            }}>
            {" "}
            خونه مورد نظرتون رو پیدا کنید، ارتباط مستقیم با مالکان
          </InfoBox>
          <InfoBox
            heading={"صاحبان املاک"}
            bgColor="bg-blue-100"
            textColor="text-black"
            buttonInfo={{
              text: "ثبت ملک",
              bgColor: "bg-blue-500",
              link: "/properties/add",
            }}>
            املاک خود را فهرست کنید و با مستاجران جدید قرارداد ببندید. اجاره به
            صورت موقت یا بلند مدت.
          </InfoBox>
          {/* <div class="bg-blue-100 p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold">صاحبان املاک</h2>
            <p class="mt-2 mb-4">
              املاک خود را فهرست کنید و با مستاجران جدید قرارداد ببندید. اجاره
              به صورت موقت یا بلند مدت.
            </p>
            <a
              href="/add-property.html"
              class="inline-block bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600">
              ثبت اقامتگاه
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
